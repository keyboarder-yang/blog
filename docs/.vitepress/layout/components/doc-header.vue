<script setup>
import { onMounted, onUnmounted, computed, ref } from 'vue'
import { useDocHeader } from '../use-case/use-doc-header'
const {
  descRef,
  page,
  readTime,
  words,
  isShowDocHeader,
  getDocHeaderInfo
} = useDocHeader()
const tags = computed(() => {
  return (page?.value?.frontmatter?.tags) || []
})
const observer = ref(null)
onMounted(() => {
  // 创建一个观察器实例并传入回调函数
  observer.value = new MutationObserver(() => {
    getDocHeaderInfo()
  });
  const h1Element = window.document.querySelector('h1');
  h1Element.style.display = 'inline-block';
  h1Element?.after(descRef.value);
  observer.value.observe(window.document.querySelector('#VPContent .container .content'), { childList: true, subtree: true })
})
onUnmounted(() => {
  observer.value.disconnect();
})
</script>

<template>
  <div v-show="isShowDocHeader" id="desc" ref="descRef">
    <ElPopover
        placement="right-start"
        :width="300"
        trigger="hover"
        popper-class="customPopover"
    >
      <template #reference>
        <ElIcon class="icon" :size="24">
          <ChatLineRound />
        </ElIcon>
      </template>
      <div class="desc_info" v-show="page.frontmatter?.author">
      <ElIcon class="icon">
        <User></User>
      </ElIcon>
      作者：{{ page.frontmatter?.author || '-' }}
    </div>
      <div class="desc_info" v-show="page.frontmatter?.createTime">
      <ElIcon class="icon">
        <Calendar></Calendar>
      </ElIcon>
      创建：{{ page.frontmatter?.createTime || '-' }}
    </div>
      <div class="desc_info" v-show="words">
        <ElIcon class="icon">
          <Edit></Edit>
        </ElIcon>
        字数：{{ words }} 个字
      </div>
      <div class="desc_info" v-show="readTime">
        <ElIcon class="icon">
          <Clock></Clock>
        </ElIcon>
        阅读：约 {{ readTime }} 分钟
      </div>
      <div class="desc_info" v-show="tags.length">
      <ElIcon class="icon">
        <CollectionTag></CollectionTag>
      </ElIcon>
      标签：
      <ElTag v-for="(tag, key) in tags" :key="key" size="small">{{ tag }}</ElTag>
    </div>
      <div class="desc_info" v-show="page.frontmatter?.status!=='done'">
        <ElIcon class="icon">
          <Monitor></Monitor>
        </ElIcon>
        状态：<ElTag size="small" type="danger" style="color: red">开发中</ElTag>
      </div>
    </ElPopover>
  </div>
</template>

<style scoped lang="scss">
#desc{
  display: inline-block;
  padding-left: 3px;
  vertical-align: top;
}
</style>