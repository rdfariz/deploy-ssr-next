const initialState = {
  name: 'Ais',
  karya: []
}

export default function reducer(state = initialState, action) {
  const { type, name, karya } = action
  switch (type) {
    case "SET_NAME":
      return {
        ...state,
        name: name
      }
    case 'SET_KARYA':
      return {
        ...state,
        karya
      }
    default:
      return state
  }
}