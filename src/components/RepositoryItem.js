import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RepositoryItem = ({repo}) => (
  <View style={styles.container}>
    <Text style={styles.name}>{repo.name}</Text>
    <Text>{repo.description}</Text>
    <Text>⭐ {repo.stargazers_count}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'},
  name: {fontWeight: 'bold'},
});

export default RepositoryItem;
