<script setup>
import DefaultTheme from 'vitepress/theme';
import HomeBanner from "./components/home-banner.vue";
import DocHeader from './components/doc-header.vue';
import ArticleList from './components/article-list.vue';
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <!--  Start doc  -->
    <template #doc-top></template>
    <template #doc-bottom></template>
    <template #doc-footer-before></template>
    <template #doc-before>
      <DocHeader />
    </template>
    <template #doc-after></template>
    <template #sidebar-nav-before></template>
    <template #sidebar-nav-after></template>
    <template #aside-top></template>
    <template #aside-bottom></template>
    <template #aside-outline-before></template>
    <template #aside-outline-after>
      <ArticleList />
    </template>
    <template #aside-ads-before></template>
    <template #aside-ads-after></template>
    <!--  End doc  -->

    <!-- Start home -->
    <template #home-hero-before>
      <HomeBanner />
    </template>
    <template #home-hero-info></template>
    <template #home-hero-image></template>
    <template #home-hero-after></template>
    <template #home-features-before></template>
    <template #home-features-after></template>
    <!--  End home  -->

    <!--  Start page  -->
    <template #page-top></template>
    <template #page-bottom></template>
    <!--  End page  -->

    <!--  Start 404  -->
    <template #not-found></template>
    <!--  End 404  -->
    <!--  Start always  -->
    <template #layout-top></template>
    <template #layout-bottom></template>
    <template #nav-bar-title-before></template>
    <template #nav-bar-title-after></template>
    <template #nav-bar-content-before></template>
    <template #nav-bar-content-after></template>
    <template #nav-screen-content-before></template>
    <template #nav-screen-content-after></template>
    <!--  End always  -->
  </Layout>
</template>