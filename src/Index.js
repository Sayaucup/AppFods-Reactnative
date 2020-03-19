import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

var {width} = Dimensions.get('window');

import american from './image/categories/american.png';
import burger from './image/categories/burger.png';
import pizza from './image/categories/pizza.png';
import drink from './image/categories/drink.png';

import American from './categories/American';
import Pizza from './categories/Pizza';
import Burger from './categories/Burger';
import Drink from './categories/Drink';

const data = [
  {
    gambar: american,
    text: 'American',
    id: '1',
  },
  {
    gambar: burger,
    text: 'Burger',
    id: '2',
  },
  {
    gambar: pizza,
    text: 'Pizza',
    id: '3',
  },
  {
    gambar: drink,
    text: 'Drink',
    id: '4',
  },
];

import Banner from './Banner';

console.disableYellowBox = true;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }
  categories = () => {
    if (this.state.id === '1') {
      return <American/>
    } else if (this.state.id === '2') {
      return (
        <Burger/>
      );
    } else if (this.state.id === '3') {
      return (
        <Pizza/>
      );
    } else if (this.state.id === '4') {
      return (
        <Drink/>
      );
    }
  };

  render_categories = ({item}) => {
    const {gambar, text} = item;
    return (
      <TouchableOpacity
        style={styles.divCategorie}
        onPress={() => this.setState({id: item.id})}>
        <Image
          style={{width: 100, height: 80}}
          resizeMode="contain"
          source={gambar}
        />
        <Text style={{fontWeight: 'bold', fontSize: 22}}>{text}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#0E4D4D" />
        <View
          style={{
            backgroundColor: '#166868',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#f2f2f2'}}>
            Example Shop
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 10}}>
            <Banner />
          </View>
          <View
            style={{
              width: width,
              borderRadius: 20,
              paddingVertical: 20,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={data}
              renderItem={this.render_categories}
              keyExtractor={item => item.toString()}
            />
          </View>
          <View>{this.categories()}</View>
        </ScrollView>
      </View>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  divCategorie: {
    backgroundColor: '#F2F2F2',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
});
