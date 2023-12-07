const getMenus = (files,commonPath) => {
    let menus = [];
    Object.keys(files).forEach((typeKey,index) => {
        let typeItem = {
            collapsed: true,
            collapsible: true,
            items: [],
        };
        typeItem.text = files[typeKey].sidebarName || typeKey;
        let menuItems = []
        files[typeKey].list.forEach((item, index) => {
            let newText = `${item.text}`
            menuItems.push({
                text: newText, link: `${commonPath}/${typeKey}/${item.name}.md`
            })
        })
        typeItem.items = menuItems;
        menus.push(typeItem)
    })
    return menus
}

export default getMenus
