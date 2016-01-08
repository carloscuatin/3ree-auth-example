import * as types from '../constants/actionTypes'

// State Shape
// ===========
const initialState = {
  resourcesById: {},
  isFetching: false
}

// Private Sub-Reducers
// ====================
function resourcesById(state = {}, action) {
  switch(action.type) {
    case types.ADD_RESOURCE_SUCCESS:
      const { resource } = action
      return {
        ...state,
        [resource.id]: resource
      }

    default:
      return state
  }
}

// Public Reducer
// ==============
export default function resources(state = initialState, action) {
  switch (action.type) {
    case types.ADD_RESOURCE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case types.ADD_RESOURCE_SUCCESS:
      return {
        resourcesById: resourcesById(state.resourcesById, action),
        isFetching: false
      }

    case types.ADD_RESOURCE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })

    default:
      return state
  }
}
