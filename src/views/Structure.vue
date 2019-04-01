<template>
<main class='my-container'>
  <aside class='aside'>
    <h5 class='aside__title bg-light'>Список структур</h5>
    <ul class="nav flex-column aside__list">
      <li class="nav-item aside__item" v-for='item in structure' :key='item.id'>
        <router-link
          class="nav-link aside__link"
          :class='{"active": routeId === item.id}'
          :to="{ name: 'structure', params: { id: item.id }}"
          >{{ item.name }}
        </router-link>
      </li>
      <button
        class="btn btn-primary aside__button"
        @click='addStructure'>Добавить структуру
      </button>
    </ul>
  </aside>
  <div class="my-container__inner">
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
