<template>
  <div class='card' @dblclick.self='closeAll'>
    <header
      class='card__header'
      @dblclick.self="fieldName = false">
      <h5
        @dblclick="fieldName = true"
        class='card__title card-header'
        v-if='!fieldName'>{{ item.name }}</h5>
      <input
        type="text"
        class="card__title form-control form-control-lg"
        v-else
        @keyup.enter="fieldName = false"
        :value='item.name'
        @input='changeStructureName([$event.target.value, item.id])'>
    </header>
    <div class="card-body card__body" @dblclick='fieldName = false' @dblclick.self='closeAll'>
      <table class="table table-bordered card__table">
        <tbody>
          <tr
            class="card__table-row"
            v-for='field in item.fields'
            :key='field.id'>
            <td class="card__table-cell card__table-cell--left"
              ><span
                v-if='!field.change'
                @dblclick="toogleChange([true, item.id, field.id])"
                >{{ field.name }}
              </span>
              <input
                class='card__input form-control form-control-sm'
                type="text"
                v-else
                @keyup.enter="toogleChange([false, item.id, field.id])"
                :value='field.name'
                @input='changeFieldName([$event.target.value, item.id, field.id])'>
            </td>
            <td
              class="card__table-cell"
              >
              <span
                v-if='dropTypesId !== field.id'
                @dblclick="toggleDropTypes(field.id)"
                >тип {{ field.type }}</span>
              <select
                class="card__select form-control form-control-sm"
                @change="toggleDropTypes(null)"
                v-else
                v-model="field.type">
                <option
                  class='card__option'
                  v-for="(item, index) in types"
                  :key="index">{{ item }}
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        class="card__button btn btn-light"
        @click='addField(item.id)'>Добавить поле
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'StructureCard',
  data() {
    return {
      fieldName: false,
      dropTypesId: '',
    };
  },
  methods: {
    ...mapActions({
      addField: 'structure/addField',
    }),
    ...mapMutations({
      changeStructureName: 'structure/changeStructureName',
      toogleChange: 'structure/toogleChange',
      changeFieldName: 'structure/changeFieldName',
      closeAllChange: 'structure/closeAllChange',
    }),
    closeAll() {
      this.closeAllChange(this.routeId);
      this.fieldName = false;
      this.dropTypesId = null;
    },
    toggleDropTypes(id) {
      this.dropTypesId = id;
    },
  },
  computed: {
    ...mapState({
      types: state => state.types.types,
    }),
    item() {
      return this.$store.getters['structure/getStructureById'](this.routeId);
    },
    routeId() {
      return Number(this.$route.params.id);
    },
  },
};
</script>
<style lang="scss">
@import '~@/scss/components/card';
</style>
