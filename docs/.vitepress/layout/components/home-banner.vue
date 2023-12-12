<script setup>
import { useHomeBanner } from "../use-case";
const { title, subTitle, description, inspiring } = useHomeBanner()
</script>

<template>
  <div id="home-banner">
    <div class="banner-content">
      <h1>
        <span class="name">{{ title }}</span>
        <span class="motto">{{ subTitle }}</span>
      </h1>
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
  h1 {
    text-align: center;
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
      bottom: 0;
      font-size: 14px;
      margin-left: 10px;

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