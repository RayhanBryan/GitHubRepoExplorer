import React, {useEffect} from 'react';
import {FlatList, View, ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {FETCH_REPOS_REQUEST, SET_QUERY} from '../redux/actions';
import RepositoryItem from '../components/RepositoryItem';
import SearchBar from '../components/SearchBar';

const RepositoryList = () => {
  const dispatch = useDispatch();
  const {repositories, loading, query} = useSelector(state => state.repository);

  useEffect(() => {
    dispatch({type: FETCH_REPOS_REQUEST});
  }, [dispatch]);

  const handleLoadMore = () => {
    if (!loading) dispatch({type: FETCH_REPOS_REQUEST});
  };

  const handleSearch = text => {
    dispatch({type: SET_QUERY, payload: text});
  };

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChange={handleSearch} />
      <FlatList
        data={repositories}
        renderItem={({item}) => <RepositoryItem repo={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <ActivityIndicator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});

export default RepositoryList;
