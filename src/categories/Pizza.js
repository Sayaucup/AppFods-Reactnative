import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

import pizza1 from '../image/pizza/pizza-1.png';
import pizza2 from '../image/pizza/pizza-2.png';
import pizza3 from '../image/pizza/pizza-3.png';
import pizza4 from '../image/pizza/pizza-4.png';

var {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    nama: 'Pizza Vegan',
    gambar: pizza1,
    harga: 14,
    desc: 'Description food and detail',
  },
  {
    nama: 'Pizza Bufalisimo',
    gambar: pizza2,
    harga: 14,
    desc: 'Description food and detail',
  },
  {
    nama: 'Pizza Haiwaiana',
    gambar: pizza3,
    harga: 13,
    desc: 'Description food and detail',
  },
  {
    nama: 'Pizza Peperoni',
    gambar: pizza4,
    harga: 16,
    desc: 'Description food and detail',
  },
];

export default class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render_american = ({item}) => {
    const {nama, gambar, harga,desc} = item;
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
        <Text style={{ fontSize: 12 }}>{desc}</Text>
        <Text style={{fontSize: 20, color: 'green'}}>${harga}</Text>
        <TouchableOpacity
          onPress={() => this.AddCart(item)}
          style={{
            padding: 10,
            flexDirection: 'row',
            backgroundColor: '#166868',
            width: width / 2 - 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: '#fff'}}>Add Cart</Text>
          <View style={{width: 10}} />
          <Icon name="ios-add-circle" size={30} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  AddCart(data) {
    const itemcart = {
      food: data,
      quantity: 1,
    };
    AsyncStorage.getItem('cart')
      .then(datacart => {
        if (datacart != null) {
          const cart = JSON.parse(datacart);
          cart.push(itemcart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
          console.log(cart);
        } else {
          const cart = [];
          cart.push(itemcart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
          console.log(cart);
        }
        console.log('succes');
      })
      .catch(error => {
        console.log(error);
      });
  }

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
