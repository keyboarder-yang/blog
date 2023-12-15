<script setup>
import {useArticleList} from '../use-case/use-article-list';

const { articles } = useArticleList()

import { useData } from 'vitepress';
const { site, page } = useData()

</script>

<template>
  <div v-if="articles.length" id="article-list-container">
    <div class="title">
      相关文章
      <ElIcon class="icon">
        <Link></Link>
      </ElIcon>：
    </div>
    <div class="article-list">
      <div v-for="(article, index) in articles" :key="index">
        <a
            :class="{'active': article.title === page?.title }"
            :href="`${site.base}${article.filePath}`"
            :title="article.title"
        >
          {{index+1}}.{{ article.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#article-list-container{
  & .title{
    font-size: 13px;
    line-height: 28px;
    font-weight: 600;
    letter-spacing: .4px;
    margin: 25px 0 5px 0;
    display: flex;
    align-items: center;
  }
  & .article-list {
    & a{

      &.active{
        color: var(--vp-c-brand-1);
      }
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: inline-block;
      color: var(--vp-c-text-2);

      &:hover{
        color: var(--vp-c-brand-1);
      }
    }
  }
}

</style>