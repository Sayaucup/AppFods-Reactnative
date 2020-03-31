import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Food from './Tabs/Food';
import Cart from './Tabs/Cart';
var {width} = Dimensions.get('window');

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: '1',
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.tabs == '1' ? <Food /> : <Cart />}
        <View style={styles.bottomTab}>
          <TouchableOpacity
            style={styles.itemTab}
            onPress={() => this.setState({tabs: 1})}>
            <Icon
              name="md-restaurant"
              size={30}
              color={this.state.tabs == 1 ? '#166868' : 'gray'}
            />
            <Text
              style={{
                fontSize: 13,
                color: this.state.tabs == 1 ? '#166868' : 'gray',
              }}>
              Food
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemTab}
            onPress={() => this.setState({tabs: 2})}>
            <Icon
              name="md-basket"
              size={30}
              color={this.state.tabs == 2 ? '#166868' : 'gray'}
            />
            <Text
              style={{
                fontSize: 13,
                color: this.state.tabs == 2 ? '#166868' : 'gray',
              }}>
              Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomTab: {
    height: 60,
    width: width,
    flexDirection: 'row',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  itemTab: {
    width: width / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
