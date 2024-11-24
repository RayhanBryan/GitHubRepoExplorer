import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  SET_QUERY,
} from './actions';

const initialState = {
  repositories: [],
  loading: false,
  error: null,
  page: 1,
  query: '',
};

export const repositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repositories: [...state.repositories, ...action.payload],
        page: state.page + 1,
      };
    case FETCH_REPOS_FAILURE:
      return {...state, loading: false, error: action.payload};
    case SET_QUERY:
      return {...state, query: action.payload, repositories: [], page: 1};
    default:
      return state;
  }
};
