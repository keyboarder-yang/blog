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
        files[typeKey].label.forEach((item, index) => {
            let newText = `${index+1}.${item}`
            menuItems.push({
                text: newText, link: `${commonPath}/${typeKey}/${files[typeKey].name[index]}.md`
            })
        })
        typeItem.items = menuItems;
        menus.push(typeItem)
    })
    return menus
}

export default getMenus
