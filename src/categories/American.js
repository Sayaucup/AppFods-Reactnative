import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import american1 from '../image/american/beef-grill.png';
import american2 from '../image/american/chicken-grill.png';
import american3 from '../image/american/chicken-romesco.png';
import american4 from '../image/american/salmon-romesco.png';

var {width} = Dimensions.get('window');

const data = [
  {
    nama: 'Beef Grill',
    gambar: american1,
    harga: '$24',
  },
  {
    nama: 'Chicken Grill',
    gambar: american2,
    harga: '$22',
  },
  {
    nama: 'Chicken Romesco',
    gambar: american3,
    harga: '$21',
  },
  {
    nama: 'Salmon Romesco',
    gambar: american4,
    harga: '$25',
  },
];

export default class American extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render_american = ({item}) => {
    const {nama, gambar, harga} = item;
    return (
      <TouchableOpacity style={styles.divFood}>
        <Image style={styles.imageFood} resizeMode="contain" source={gambar} />
        <View
          style={{
            height: width / 2 - 20 - 90,
            backgroundColor: 'transparent',
            width: width / 2 - 20 - 10,
          }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
          {nama}
        </Text>
        <Text style={{fontSize: 12}}>Description food</Text>
        <Text style={{fontSize: 20, color: 'green'}}>{harga}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={this.render_american}
          keyExtractor={item => item.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageFood: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45,
  },
  divFood: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'white',
  },
});
