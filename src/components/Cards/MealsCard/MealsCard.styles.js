import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {borderRadius: 30, margin: 10},
  container2: {
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.6,
    bottom: 0,
    padding: 4,
  },

  image: {height: 160, borderRadius: 30},
  text: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingRight: 20,
  },
});
