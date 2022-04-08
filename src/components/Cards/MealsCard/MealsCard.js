import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './MealsCard.styles';

export default function MealsCard({veri, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: veri.strMealThumb}} />
        <View style={styles.container2}>
          <Text style={styles.text}>{veri.strMeal}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
