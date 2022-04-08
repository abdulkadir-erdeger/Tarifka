import {View, Text, StatusBar, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CategoryCard from '../components/Cards/CategoryCard';

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export default function Categories({navigation}) {
  const [veri, setVeri] = useState();

  const renderItemCard = ({item}) => (
    <CategoryCard
      veri={item}
      onPress={() => goToNavigation(item.strCategory)}
    />
  );

  function goToNavigation(x) {
    navigation.navigate('MealsScreen', x);
  }

  function fetchData() {
    axios
      .get(url)
      .then(response => setVeri(response.data.categories))
      .catch(err => console.log(err.message));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
