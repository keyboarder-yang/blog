import { ElIcon, ElTag, ElDivider, ElTabs, ElTabPane, ElAvatar } from 'element-plus'
import { Link, Clock, User, Edit, Calendar, CollectionTag } from '@element-plus/icons-vue'
export async function customEnhanceApp(app: any) {
    app.component('Link', Link)
    app.component('Clock', Clock)
    app.component('User', User)
    app.component('Edit', Edit)
    app.component('Calendar', Calendar)
    app.component('CollectionTag', CollectionTag)
    app.component('ElIcon', ElIcon)
    app.component('ElTag', ElTag)
    app.component('ElDivider', ElDivider)
    app.component('ElTabs', ElTabs)
    app.component('ElTabPane', ElTabPane)
    app.component('ElAvatar', ElAvatar)
}