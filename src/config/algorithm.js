/*
 * @Author: tanshaobo
 * @Date: 2022-02-11 09:23:55
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-21 16:42:27
 * @Description: 算法配置
 * @FilePath: \yuanshen-utils\src\config\algorithm.js
 */
export const dictionary = {
  id: '编号',
  label: '名称',
  stable: '是否稳定',
  linear: '是否线性',
  timeComplexity: '时间复杂度',
  bastComplexity: '最低复杂度',
  worstComplexity: '最高复杂度',
  spaceComplexity: '空间复杂度',
  baseIdea: '基础思想'
}

export const data = [
  {
    id: 1,
    label: '冒泡排序',
    name: 'Bubble',
    stable: true,
    linear: false,
    timeComplexity: 'O(n²)',
    bastComplexity: 'O(n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    baseIdea:
      '遍历未排序的序列，通过依次对比相邻元素大小，交换彼此位置，遍历一次后，最大元素处于队尾，重复此操作'
  },
  {
    id: 2,
    label: '选择排序',
    name: 'Selection',
    stable: false,
    linear: false,
    timeComplexity: 'O(n²)',
    bastComplexity: 'O(n²)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    baseIdea: '遍历未排序的序列，找到最小值，置于队首，再遍历剩余元素，依次进行该操作'
  },
  {
    id: 3,
    label: '插入排序',
    name: 'Insertion',
    stable: true,
    linear: false,
    timeComplexity: 'O(n²)',
    bastComplexity: 'O(n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    baseIdea:
      '将未排序的序列分为一个有序表和一个无序表，有序表中有一个元素，无序表中有n-1个元素，排序时，每次从无序表中抽取第一个元素，将它插入到有序表中适当位置，重复n-1次'
  },
  {
    id: 4,
    label: '堆排序',
    name: 'Heap',
    stable: false,
    linear: false,
    timeComplexity: 'O(nlog₂n)',
    bastComplexity: 'O(nlog₂n)',
    worstComplexity: 'O(nlog₂n)',
    spaceComplexity: 'O(1)',
    baseIdea: `
      1、初始化堆：将数列a[1...n]构造成最大堆。
      2、交换数据：将a[1]和a[n]交换，使a[n]是a[1...n]中的最大值；然后将a[1...n-1]重新调整为最大堆。 接着，将a[1]和a[n-1]交换，使a[n-1]是a[1...n-1]中的最大值；然后将a[1...n-2]重新调整为最大值。 依次类推，直到整个数列都是有序的
      `
  },
  {
    id: 5,
    label: '快速排序',
    name: 'Quick',
    stable: false,
    linear: false,
    timeComplexity: 'O(nlog₂n)',
    bastComplexity: 'O(nlog₂n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(log₂n)',
    baseIdea: `
      1、选择一个基准数，通过一趟排序将要排序的数据分割成独立的两部分；其中一部分的所有数据都比另外一部分的所有数据都要小。
      2、再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列`
  },
  {
    id: 6,
    label: '基数排序',
    name: 'Radix',
    stable: true,
    linear: true,
    timeComplexity: 'O(n*k)',
    bastComplexity: 'O(n*k)',
    worstComplexity: 'O(n*k)',
    spaceComplexity: 'O(n+k)',
    baseIdea: '将整数按位数切割成不同的数字，然后按每个位数分别比较'
  },
  {
    id: 7,
    label: '希尔排序',
    name: 'Shell',
    stable: false,
    linear: false,
    timeComplexity: 'O(n³ʹ²)',
    bastComplexity: 'O(n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    baseIdea: `
      1、对于n个待排序的数列，取一个小于n的整数gap(gap被称为步长)将待排序元素分成若干个组子序列，所有距离为gap的倍数的记录放在同一个组中；
      2、对各组内的元素进行直接插入排序。
      3、减小gap的值，并重复执行上述的分组和排序。重复这样的操作，当gap=1时，整个数列就是有序的。`
  },
  {
    id: 8,
    label: '归并排序',
    name: 'Merge',
    stable: true,
    linear: false,
    timeComplexity: 'O(nlog₂n)',
    bastComplexity: 'O(nlog₂n)',
    worstComplexity: 'O(nlog₂n)',
    spaceComplexity: 'O(n)',
    baseIdea: `
      1、从下往上的归并排序：将待排序的数列分成若干个长度为1的子数列，然后将这些数列两两合并；得到若干个长度为2的有序数列，再将这些数列两两合并；得到若干个长度为4的有序数列，再将它们两两合并；直接合并成一个数列为止。这样就得到了我们想要的排序结果。
      2、从上往下的归并排序：它与"从下往上"在排序上是反方向的。它基本包括3步：
      ① 分解 -- 将当前区间一分为二，即求分裂点 mid = (low + high)/2;
      ② 求解 -- 递归地对两个子区间a[low...mid] 和 a[mid+1...high]进行归并排序。递归的终结条件是子区间长度为1。
      ③ 合并 -- 将已排序的两个子区间a[low...mid]和 a[mid+1...high]归并为一个有序的区间a[low...high]。
    `
  },
  {
    id: 9,
    label: '桶排序',
    name: 'Bucket',
    stable: true,
    linear: true,
    timeComplexity: 'O(n+k)',
    bastComplexity: 'O(n)',
    worstComplexity: 'O(n²)',
    spaceComplexity: 'O(n+k)',
    baseIdea: `将数组分到有限数量的桶子里。假设待排序的数组a中共有N个整数，并且已知数组a中数据的范围[0, MAX)。在桶排序时，创建容量为MAX的桶数组r，并将桶数组元素都初始化为0；将容量为MAX的桶数组中的每一个单元都看作一个"桶"。
    在排序时，逐个遍历数组a，将数组a的值，作为"桶数组r"的下标。当a中数据被读取时，就将桶的值加1。`
  },
  {
    id: 10,
    label: '计数排序',
    name: 'Count',
    stable: true,
    linear: true,
    timeComplexity: 'O(n+k)',
    bastComplexity: 'O(n+k)',
    worstComplexity: 'O(n+k)',
    spaceComplexity: 'O(n+k)',
    baseIdea: `将输入的数据值转化为键存储在额外开辟的数组空间中`
  }
]

export default data
