<script setup>
import { onMounted, onUnmounted, computed } from 'vue'
import { useDocHeader } from '../use-case/use-doc-header'
const {
  descRef,
  page,
  readTime,
  words,
  isShowDocHeader,
  getDocHeaderInfo
} = useDocHeader()
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(() => {
  getDocHeaderInfo()
});

const tags = computed(() => {
  return (page?.value?.frontmatter?.tags) || []
})
onMounted(() => {
  window.document.querySelector('h1')?.after(descRef.value)
  observer.observe(window.document.querySelector('#VPContent .container .content'), { childList: true, subtree: true })
})
onUnmounted(() => {
  observer.disconnect();
})
</script>

<template>
  <div v-show="isShowDocHeader" id="doc-header">
    <span v-show="words">
      <ElIcon class="icon">
        <Edit></Edit>
      </ElIcon>
      字数：{{ words }} 个字
    </span>
    <span v-show="readTime">
      <ElIcon class="icon">
        <Clock></Clock>
      </ElIcon>
      阅读：约{{ readTime }} 分钟
    </span>
  </div>
  <div v-show="isShowDocHeader && (page.frontmatter?.author || page.frontmatter?.createTime)" id="desc" ref="descRef" class="hidden-sm-and-down">
    <span v-show="page.frontmatter?.author">
      <ElIcon class="icon">
        <User></User>
      </ElIcon>
      作者：{{ page.frontmatter?.author }}
    </span>
    <span v-show="page.frontmatter?.createTime">
      <ElIcon class="icon">
        <Calendar></Calendar>
      </ElIcon>
      创建：{{ page.frontmatter?.createTime }}
    </span>
    <span v-show="tags.length">
      <ElIcon class="icon">
        <CollectionTag></CollectionTag>
      </ElIcon>
      标签：
      <ElTag v-for="(tag, key) in tags" :key="key" size="small" class="tagItem">{{ tag }}</ElTag>
    </span>
  </div>
</template>

<style scoped lang="scss">
#doc-header, #desc{
  color: var(--vp-c-text-2);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  & span{
    display: flex;
    align-items: center;
    margin-right: 16px;

    & .icon{
      margin-right: 3px;
    }
  }
}
#desc{
  justify-content: start;
}
.tagItem{
  border-radius: 0;
  margin-right: 5px!important;
  color: var(--vp-c-brand-1);
}
</style>