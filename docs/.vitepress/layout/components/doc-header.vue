<script setup>
import { NDivider, NIcon, } from 'naive-ui'
import { onMounted, onUnmounted } from 'vue'
import { useDocHeader } from '../use-case/use-doc-header'
const {
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
  getDocHeaderInfo()
});
onMounted(() => {
  observer.observe(document.body, { childList: true, subtree: true })
})
onUnmounted(() => {
  observer.disconnect();
})
</script>

<template>
  <div id="doc-header">
    <span>
      <NIcon class="icon" :component="User" />
      作者：{{ page.frontmatter?.author }}
    </span>
    <span>
      <NIcon class="icon" :component="CalendarTimes" />
      创建：{{ page.frontmatter?.createTime }}
    </span>
    <span>
      <NIcon class="icon" :component="Edit" />
      字数：{{ words }} 个字
    </span>
    <span>
      <NIcon class="icon" :component="Clock" />
      阅读：约{{ readTime }} 分钟
    </span>
  </div>
</template>

<style scoped lang="scss">
#doc-header{
  color: var(--vp-c-text-2);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);

  & span{
    display: flex;
    align-items: center;
    margin-right: 16px;

    & .icon{
      margin-right: 3px;
    }
  }
}
</style>