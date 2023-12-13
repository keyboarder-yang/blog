<script setup>
import { useHomeBanner } from "../use-case";
const { title, subTitle, description, inspiring } = useHomeBanner()
</script>

<template>
  <div id="home-banner">
    <div class="banner-content animate__animated animate__bounce">
      <div class="logo hidden-sm-and-up">
        <ElAvatar :size="100" shape="square" fit="fill" src="/blog/logo.png" />
      </div>
      <div class="name">{{ title }}</div>
      <div class="motto">{{ subTitle }}</div>
      <div class="inspiring-wrapper">
        {{ inspiring[0] }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home-banner{
  height: calc(100vh - var(--vp-nav-height));
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  .banner-content {
    margin-top: - 100px;
    .logo {
      margin-bottom: 100px;
    }
    .name {
      transition: all 0.25s ease-in-out 0.04s;
      transform: translateY(0px);
      opacity: 1;
      font-weight: bold;
      margin: 0 auto;
      font-size: 36px;
    }

    .motto {
      position: relative;
      text-align: right;
      bottom: 0;
      font-size: 16px;
      margin: 20px 0;

      &::before {
        content: '- ';
      }
    }
  }
  .inspiring-wrapper {
    margin: 16px 0;
    height: 24px;
    width: auto;

    div {
      cursor: pointer;
      text-align: center;
      font-size: 20px;
      line-height: 1.6;
      user-select: none;
    }
  }
}
</style>