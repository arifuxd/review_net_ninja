import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({navigation, route}) => {
  return (
    <View style={globalStyles.container}>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text>
    </View>
  );
};


export default ReviewDetails;

