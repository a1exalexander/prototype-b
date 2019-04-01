<template>
  <ul class='nav nav-tabs bg-light my-nav'>
    <li class="nav-item">
      <router-link
        class='nav-link my-nav__link'
        :class='{"active": $route.name === "structures" || $route.name === "structure"}'
        to="/structure"
        >Редактор структур</router-link>
    </li>
    <li class="nav-item">
      <router-link
        class='nav-link my-nav__link'
        :class='{"active": $route.name === "types"}'
        to="/types"
        >Редатор типов</router-link>
    </li>
    <li class="nav-item">
      <router-link
        class='nav-link my-nav__link'
        :class='{"active": $route.name === "rules"}'
        to="/rules"
        >Редатор правил</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Navigation',
};
</script>
<style lang="scss">
.my-nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 46px;
  left: 300px;
  z-index: 2;
  @include flex-row(flex-start, center);
  padding: 4px 12px 0 12px !important;
}
</style>
