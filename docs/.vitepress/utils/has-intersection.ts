/**
 * @description 判断两个数组是否有交集
 * @param { Array } array1
 * @param { Array } array2
 * @return { Boolean }
 * @example
 * hasIntersection([1, 2, 3], [1, 4])
 * hasIntersection([1, 2, 3], [4])
 */
export default function hasIntersection(array1: any[], array2: any[]): boolean {
    return array1.some((value: any) => array2.includes(value))
}