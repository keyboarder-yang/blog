<script setup>
import { NDivider, NIcon, } from 'naive-ui'
import { onMounted, onUnmounted } from 'vue'
import { useDocHeader } from '../use-case/use-doc-header'
const {
  descRef,
  page,
  User,
  CalendarTimes,
  Edit,
  Clock,
  readTime,
  words,
  getDocHeaderInfo
} = useDocHeader()
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(() => {
  const descElement = document.getElementById('desc')
  if(!descElement){
    document.querySelector('h1').after(descRef.value)
  }
  getDocHeaderInfo()
});
onMounted(() => {
  document.querySelector('h1').after(descRef.value)
  observer.observe(document.body, { childList: true, subtree: true })
})
onUnmounted(() => {
  observer.disconnect();
})
</script>

<template>
  <div id="doc-header">
    <span v-show="words">
      <NIcon class="icon" :component="Edit" />
      字数：{{ words }} 个字
    </span>
    <span v-show="readTime">
      <NIcon class="icon" :component="Clock" />
      阅读：约{{ readTime }} 分钟
    </span>
  </div>
  <div v-show="page.frontmatter?.author || page.frontmatter?.createTime" id="desc" ref="descRef">
    <span v-show="page.frontmatter?.author">
      <NIcon class="icon" :component="User" />
      作者：{{ page.frontmatter?.author }}
    </span>
    <span v-show="page.frontmatter?.createTime">
      <NIcon class="icon" :component="CalendarTimes" />
      创建：{{ page.frontmatter?.createTime }}
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
</style>