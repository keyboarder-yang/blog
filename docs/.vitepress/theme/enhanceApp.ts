import {
    ElIcon,
    ElTag,
    ElDivider,
    ElAvatar,
    ElEmpty,
    ElPopover,
    ElCheckboxGroup,
    ElCheckbox,
} from 'element-plus'
import { Link, Clock, User, Edit, Calendar, CollectionTag, Monitor, ChatLineRound } from '@element-plus/icons-vue'
export async function customEnhanceApp(app: any) {
    app.component('Link', Link)
    app.component('Clock', Clock)
    app.component('User', User)
    app.component('Edit', Edit)
    app.component('Calendar', Calendar)
    app.component('CollectionTag', CollectionTag)
    app.component('Monitor', Monitor)
    app.component('ChatLineRound', ChatLineRound)
    app.component('ElIcon', ElIcon)
    app.component('ElTag', ElTag)
    app.component('ElDivider', ElDivider)
    app.component('ElAvatar', ElAvatar)
    app.component('ElEmpty', ElEmpty)
    app.component('ElPopover', ElPopover)
    app.component('ElCheckboxGroup', ElCheckboxGroup)
    app.component('ElCheckbox', ElCheckbox)
}