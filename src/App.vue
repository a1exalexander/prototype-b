<template>
  <div id="app" class='app'>
    <navigation class='app__nav'/>
    <router-view class='app__main'/>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>
