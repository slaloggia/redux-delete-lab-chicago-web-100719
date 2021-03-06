export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, {name: action.name, id: Math.floor(Math.random() *1000)}] };
    case 'DELETE_BAND':
      let bands = state.bands.filter(band => band.id !== action.id)
      return {bands}
    default:
      return state;
  }
};
