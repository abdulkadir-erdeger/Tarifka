import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    width: '95%',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    borderTopStartRadius: 60,
    borderBottomStartRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eceff1',
  },
  image: {width: 70, height: 70, resizeMode: 'contain'},
  text: {fontSize: 20, color: 'black', paddingStart: 10},
});
