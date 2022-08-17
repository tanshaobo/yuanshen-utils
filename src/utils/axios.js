import axios from 'axios'

const instance = axios.create({
  timeout: 20000 // 请求超时20s;
})
// 添加一个请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (
      config.url.indexOf('/auth/authenticate') === -1 &&
      config.url.indexOf('/password​/applyResetPassword') === -1
    ) {
      // 请求头里面添加token
      const token = sessionStorage.getItem('token')
      if (token) {
        config.headers.token = token
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加一个响应拦截器
instance.interceptors.response.use(
  (res) => {
    // token失效
    return res
  },
  (error) => {
    let errorMessage = ''
    // 主动取消请求
    if (axios.isCancel(error)) {
      // 为了终结promise链 就是实际请求 不会走到.catch(rej=>{});这样就不会触发错误提示之类了。
      return new Promise(() => {})
    }
    // 超时处理
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      errorMessage = '请求超时，请重试！'
    }
    // 错误状态码处理
    if (error.response) {
      const { status } = error.response
      switch (status) {
        case 401:
          errorMessage = error.response.data.message
          break
        case 404:
          errorMessage = error.response.data.message
          break
        case 500:
          errorMessage = error.response.statusText
          break
        default:
          errorMessage = '请求失败'
          break
      }
    }
    return Promise.reject(errorMessage)
  }
)

const service = {
  /** get 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  get(url, params, config) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, { params, ...config })
        .then((response) => {
          if (response) resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** get 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  getSync(url, params) {
    return instance
      .get(url, {
        params
      })
      .then((response) => {
        if (response) {
          return response
        }
      })
      .catch((err) => {})
  },

  /** post 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   * @param  {配置} config
   */
  post(url, params, config) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, params, config)
        .then((response) => {
          if (response) resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** post 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  postSync(url, params) {
    return instance
      .post(url, params)
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },

  /** post 请求，用于下载二进制文件
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  postBlob(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, params, {
          responseType: 'blob'
        })
        .then((response) => {
          if (response) resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** get 请求，用于下载二进制文件
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  getBlob(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          responseType: 'blob',
          params
        })
        .then((response) => {
          if (response) resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** delete 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  delete(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .delete(url, {
          data: params
        })
        .then((response) => {
          if (response) resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /** put 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  put(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .put(url, params)
        .then((response) => {
          if (response) resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default service
