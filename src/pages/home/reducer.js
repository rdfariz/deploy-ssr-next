const initialState = {
  name: 'Ais'
}

export default function reducer(state = initialState, action) {
  const { type, name } = action
  switch (type) {
    case "SET_NAME":
      return {
        ...state,
        name: name
      }
    default:
      return state
  }
}