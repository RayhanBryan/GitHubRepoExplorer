import {call, put, takeLatest, select} from 'redux-saga/effects';
import {fetchRepositories} from '../api/github';
import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from './actions';

function* fetchReposSaga(action) {
  try {
    // Ambil nilai page dan query dari action.payload
    const {query, page} = action.payload;

    // Lakukan API call untuk mengambil repositori
    const response = yield call(fetchRepositories, query, page);

    // Dispatch aksi sukses jika data diterima
    yield put({type: FETCH_REPOS_SUCCESS, payload: response.items});
  } catch (error) {
    // Dispatch aksi gagal jika terjadi error
    yield put({type: FETCH_REPOS_FAILURE, payload: error.message});
  }
}

export function* watchFetchRepos() {
  // Menggunakan takeLatest untuk menangani hanya request terakhir
  yield takeLatest(FETCH_REPOS_REQUEST, fetchReposSaga);
}
