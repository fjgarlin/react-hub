import { createStore } from 'redux'

const startingState = {
  repositories: [
    {
      id: 1,
      name: 'jackfranklin/react-remote-data',
      stars: 34,
    },
    {
      id: 2,
      name: 'ReactTraining/react-router',
      stars: 25000,
    },
    {
      id: 3,
      name: 'facebook/react',
      stars: 80000,
    },
  ],
  hiddenIds: [],
}

const reducer = (state = startingState, action) => {
  switch (action.type) {
    case 'HIDE_REPOSITORY':
      return {
        ...state,
        hiddenIds: [...state.hiddenIds, action.id],
      }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
