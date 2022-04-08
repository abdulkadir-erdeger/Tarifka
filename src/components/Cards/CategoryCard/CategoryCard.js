import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CategoryCard.styles';

export default function CategoryCard({veri, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: veri.strCategoryThumb}} />
        <Text style={styles.text}>{veri.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
}
