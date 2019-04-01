const state = {
  structure: [
    {
      id: 1,
      name: 'Сруктура 1',
      fields: [
        {
          id:1,
          name: 'Поле 1',
          type: 'Строка',
          change: false,
        },
        {
          id:2,
          name: 'Поле 2',
          type: 'Строка',
          change: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Сруктура 2',
      fields: [
        {
          id:1,
          name: 'Поле 1',
          type: 'Строка',
          change: false,
        },
        {
          id:2,
          name: 'Поле 2',
          type: 'Строка',
          change: false,
        },
      ],
    },
  ],
};

const mutations = {
  addStructure(state, data) {
    state.structure.push(data);
  },
  addField(state, [id, data]) {
    const index = state.structure.findIndex(e => e.id === id);
    state.structure[index].fields.push(data);
  },
  changeStructureName(state, [value, id]) {
    const index = state.structure.findIndex(e => e.id === id);
    const data = Object.assign({}, state.structure[index], {name: value});
    state.structure.splice(index, 1, data);
  },
  changeFieldName(state, [value, structureId, fieldId]) {
    const index = state.structure.findIndex(e => e.id === structureId);
    const fieldIndex = state.structure[index].fields.findIndex(e => e.id === fieldId);
    const data = Object.assign({}, state.structure[index].fields[fieldIndex], {name: value})
    state.structure[index].fields.splice(fieldIndex, 1, data);
  },
  toogleChange(state, [value, structureId, fieldId]) {
    const index = state.structure.findIndex(e => e.id === structureId);
    const fieldIndex = state.structure[index].fields.findIndex(e => e.id === fieldId);
    const data = Object.assign({}, state.structure[index].fields[fieldIndex], {change: value})
    state.structure[index].fields.splice(fieldIndex, 1, data);
  },
  closeAllChange(state, id) {
    const index = state.structure.findIndex(e => e.id === id);
    state.structure[index].fields.forEach((item, subIndex) => {
      state.structure[index].fields.splice(subIndex, 1, Object.assign({}, item, {change: false}));
    })
  },
};

const getters = {
  getStructureById: (state) => (id) => {
    return state.structure.find(e => e.id === id);
  },
};

const actions = {
  addStructure({ state, commit }) {
    let id = 1;
    const arr = state.structure.map(e => e.id);
    if (arr.length) {
      id = Math.max( ...arr ) + 1;
    }
    const data = {
      id,
      name: `Сруктура ${id}`,
      fields: [],
    };
    commit('addStructure', data);
  },
  addField({ state, commit }, id) {
    let fieldId = 1;
    const index = state.structure.findIndex(e => e.id === id);
    const arr = state.structure[index].fields.map(e => e.id);
    if (arr.length) {
      fieldId = Math.max( ...arr ) + 1;
    }
    const data = {
      id: fieldId,
      name: `Поле ${fieldId}`,
      type: 'Строка',
      change: false,
    };
    commit('addField', [id, data]);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
