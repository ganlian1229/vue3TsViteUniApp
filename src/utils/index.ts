/**
 * @description: 深拷贝
 * @param {*} source
 * @return {*}
 */
export function deepCopy(source: any) {
    if (!source) return;
    let target;
    if (typeof source === 'object') {
        // 根据source类型判断是新建一个数组还是对象
        target = Array.isArray(source) ? [] : {};
        // 遍历source，并且判断是source的属性才拷贝
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (typeof source[key] !== 'object') {
                    (target as any)[key] = source[key];
                } else {
                    // 如果内部属性存在复杂数据类型，使用递归实现深拷贝
                    (target as any)[key] = deepCopy(source[key]);
                }
            }
        }
    } else {
        target = source;
    }
    return target;
}