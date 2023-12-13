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
  <NDivider/>
  <div id="link-article">
    <span class="title">
      相关文章
      <NIcon :component="Link"/>
    </span>
    <div class="article-list" :key="defaultValue">
      <NTabs :defaultValue="defaultValue" size="small" @update:value="update">
        <NTabPane v-for="(tag, index) in tags" :key="index" :name="tag" :tab="tag">
          <div v-for="(article, index) in articleList" :key="index">
            <a :href="`${site.base}${article.filePath}`">{{ article.title }}</a>
          </div>
        </NTabPane>
      </NTabs>
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
  }

  & .title span {
    display: flex;
    align-items: center;
  }
}
</style>