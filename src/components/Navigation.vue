<template>
  <nav class='nav'>
    <router-link
      class='nav__link'
      :class='{"nav__link--active": $route.name === "structures" || $route.name === "structure"}'
      to="/structure"
      >Редактор структур</router-link> |
    <router-link
      class='nav__link'
      :class='{"nav__link--active": $route.name === "types"}'
      to="/types"
      >Редатор типов</router-link> |
    <router-link
      class='nav__link'
      :class='{"nav__link--active": $route.name === "rules"}'
      to="/rules"
      >Редатор правил</router-link>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
};
</script>
<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 260px;
  height: 36px;
  background-color: $N6;
  border: 2px solid $N13;
  border-radius: 2px;
  z-index: 2;
  @include flex-row(flex-start, center);
  padding: 0 12px;
  &__link {
    color: $N100;
    padding: 0 12px;
    transition: all ease-in-out 0.2s;
    &--active {
      font-weight: 600;
    }
  }
}
</style>
