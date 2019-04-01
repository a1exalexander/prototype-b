<template>
<main class='container'>
  <aside class='aside'>
    <h1 class='aside__title'>Список структур</h1>
    <ul class="aside__list">
      <li class="aside__item" v-for='item in structure' :key='item.id'>
        <router-link
          class="aside__link"
          :class='{"aside__link--active": routeId === item.id}'
          :to="{ name: 'structure', params: { id: item.id }}"
          >{{ item.name }}
        </router-link>
      </li>
      <button
        class="aside__button"
        @click='addStructure'>Добавить структуру
      </button>
    </ul>
  </aside>
  <div class="container__inner">
    <structure-card v-if='routeId'/>
  </div>
</main>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import StructureCard from '@/components/structure/StructureCard.vue';

export default {
  name: 'Structure',
  components: {
    StructureCard,
  },
  methods: {
    ...mapActions({
      addStructure: 'structure/addStructure',
    }),
  },
  computed: {
    ...mapState({
      structure: state => state.structure.structure,
    }),
    routeId() {
      return Number(this.$route.params.id);
    },
  },
};
</script>
<style lang="scss">
@import '~@/scss/components/aside';
@import '~@/scss/components/container';
</style>
