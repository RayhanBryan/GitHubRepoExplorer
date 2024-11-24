import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export const fetchRepositories = async (query, page = 1) => {
  try {
    const response = await githubApi.get(`/search/repositories`, {
      params: {
        q: query || 'stars:>1',
        sort: 'stars',
        order: 'desc',
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error.response?.data);
    throw error;
  }
};

export default githubApi;
