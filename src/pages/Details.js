import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Details({route}) {
  const [veri, setVeri] = useState([]);

  const x = route.params;
  const url = `${'https://www.themealdb.com/api/json/v1/1/lookup.php?i='}${x}`;

  function fetchData() {
    axios
      .get(url)
      .then(response => setVeri(response.data.meals[0]))
      .catch(err => console.log(err.message));
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function goToLink(url) {
    await Linking.openURL(url);
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: veri.strMealThumb}} />
      <View style={styles.headerContainer}>
        <Text style={styles.mealText}>{veri.strMeal}</Text>
        <Text style={styles.areaText}>{veri.strArea}</Text>
      </View>
      <Text style={styles.insturctionsText}>{veri.strInstructions}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goToLink(veri.strYoutube)}>
        <Text style={styles.buttonText}>Watch On Youtube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {borderBottomWidth: 1, borderBottomColor: 'grey'},
  mealText: {
    fontSize: 30,
    color: '#a52a2a',
    fontWeight: 'bold',
    paddingStart: 5,
  },
  areaText: {
    fontSize: 20,
    color: '#a52a2a',
    paddingBottom: 5,
    paddingStart: 5,
    fontWeight: 'bold',
  },
  image: {height: 200, resizeMode: 'cover'},
  button: {
    backgroundColor: 'red',
    margin: 10,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {color: 'white', fontSize: 18},
  insturctionsText: {padding: 5, color: 'black'},
});
