<script setup>
import {useLinkArticle} from '../use-case/use-link-article';

const {
  Link,
  page,
  tags,
  articleList,
  defaultValue,
  update,
  site,
} = useLinkArticle()
</script>

<template>
  <ElDivider v-if="tags.length"/>
  <div v-if="tags.length" id="link-article">
    <span class="title">
      相关文章
      <ElIcon class="icon">
        <Link />
      </ElIcon>
    </span>
    <div class="article-list" :key="defaultValue">
      <ElTabs v-model="defaultValue" size="small" @table-click="update">
        <ElTabPane v-for="(tag, index) in tags" :key="index" :name="tag" :label="tag">
          <div v-for="(article, index) in articleList" :key="index">
            <a :href="`${site.base}${article.filePath}`">{{ article.title }}</a>
          </div>
        </ElTabPane>
      </ElTabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
#link-article {
  border-left: 1px solid var(--vp-c-divider);
  padding-left: 16px;
  font-size: 13px;
  font-weight: 500;

  & .title {
    font-weight: 600;
    display: flex;
    align-items: center;

    & .icon{
      margin-left: 5px;
    }
  }

  & .article-list a {
    color: var(--vp-c-text-2);

    &:hover{
      color: var(--vp-c-brand-1);
    }
  }
}

::v-deep(.el-tabs .el-tabs__item) {
  color: var(--vp-c-text-2);
}

::v-deep(.el-tabs .el-tabs__item.is-active) {
  color: var(--vp-c-brand-1);
}
::v-deep(.el-tabs__active-bar){
  background-color: var(--vp-c-brand-1);
}
</style>