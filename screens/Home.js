import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../styles/global';
const Home = ({navigation}) => {
  
  const [reviews, setReviews] = useState([
    {title : 'This is Very Good Course Actually', rating : 5, body : 'lorem ipsum', key : '1'},
    {title : 'Best Course in the universe', rating : 4, body : 'lorem ipsum', key : '2'},
    {title : 'The Mentor is very friendly', rating : 3, body : 'lorem ipsum', key : '3'},
    {title : 'When the matter is react JS, This is fantastic', rating : 2, body : 'lorem ipsum', key : '4'},
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
      data = {reviews}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
          <Text style={globalStyles.titleText}>{item.title}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  );
};


export default Home;

