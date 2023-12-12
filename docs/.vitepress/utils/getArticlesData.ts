/**
 * @description 获取所有文章的数据信息
 */
export async function getArticles() {
    const promiseList: Promise<any>[] = [];
    // @ts-ignore
    const modules = import.meta.glob('../../../**/*.md');
    for (const path in modules) {
        const modulePromise: Promise<any> = modules[path]();
        promiseList.push(modulePromise);
    }
    const pageData: any[] = await Promise.all(promiseList);
    return pageData
}