import {
  USERS_REQUEST,
  USERS_RECEIVE,
  ADDING_NEW_USER,
  ADD_NEW_USER,
  EDITING_USER,
  EDIT_USER,
  CANCEL_USER,
  DELETE_USER,
} from '../constants';

const initialState = {
  users: [],
  isLoading: false,
  hasData: false,
  isEdit: false,
  isCreate: false,
  id: null,
};

export default function usersReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case USERS_RECEIVE: {
      return {
        ...state,
        users: payload,
        isLoading: false,
        hasData: true,
      };
    }

    case ADDING_NEW_USER:
      return {
        ...state,
        isCreate: true,
      };
    case ADD_NEW_USER:
      return {
        ...state,
        isCreate: false,
      };

    case EDITING_USER:
      return {
        ...state,
        id: payload,
        isEdit: true,
      };
    case EDIT_USER:
      return {
        ...state,
        isEdit: false,
      };

    case CANCEL_USER:
      return {
        ...state,
        isCreate: false,
        isEdit: false,
      };

    case DELETE_USER:
      return {
        ...state,
        isCreate: false,
        isEdit: false,
      };

    default:
      return state;
  }
}
