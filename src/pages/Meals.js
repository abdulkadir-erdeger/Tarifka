import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MealsCard from '../components/Cards/MealsCard';

export default function Meals({navigation, route}) {
  const [veri, setVeri] = useState();
  const x = route.params;
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + x;

  function fetchData() {
    axios
      .get(url)
      .then(response => setVeri(response.data.meals))
      .catch(err => console.log(err.message));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderItemCard = ({item}) => (
    <MealsCard veri={item} onPress={() => goToNavigation(item.idMeal)} />
  );

  function goToNavigation(x) {
    navigation.navigate('DetailsScreen', x);
  }
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList data={veri} renderItem={renderItemCard} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'orange'},
  list: {height: '95%'},
});
