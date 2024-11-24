import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const SearchBar = ({value, onChange}) => (
  <TextInput
    style={styles.input}
    placeholder="Search repositories..."
    value={value}
    onChangeText={onChange}
  />
);

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
  },
});

export default SearchBar;
