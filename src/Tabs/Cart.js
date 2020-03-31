import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

var {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('cart').then(cart => {
      if (cart != null) {
        const cartfood = JSON.parse(cart);
        this.setState({dataCart: cartfood});
      }
    });
  }
  changeQuantity(i, type) {
    const dataCar = this.state.dataCart;
    let dataCart = dataCar[i].quantity;

    if (type) {
      dataCart = dataCart + 1;
      dataCar[i].quantity = dataCart;
      this.setState({dataCart: dataCar});
      console.log('tambah');
    } else if (type == false && dataCart >= 2) {
      dataCart = dataCart - 1;
      dataCar[i].quantity = dataCart;
      this.setState({dataCart: dataCar});
      console.log('kurang');
    } else if (type == false && dataCart == 1) {
      dataCar.splice(i, 1);
      this.setState({dataCart: dataCar});
      console.log('apus');
    }
  }
  onTotal() {
    var total = 0;
    const cart = this.state.dataCart;

    for (var i = 0; i < cart.length; i++) {
      total = total + cart[i].food.harga * cart[i].quantity;
    }
    return total;
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 20}} />
        <Text style={{fontSize: 30, color: '#166868', fontWeight: 'bold'}}>
          Cart
        </Text>

        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.dataCart.map((item, i) => {
              return (
                <View
                  style={{
                    width: width - 20,
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderColor: '#ccc',
                    paddingBottom: 10,
                    margin: 10,
                  }}>
                  <Image
                    source={item.food.gambar}
                    resizeMode={'contain'}
                    style={{height: width / 3, width: width / 3}}
                  />
                  <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <View>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        {item.food.nama}
                      </Text>
                      <Text>{item.food.desc}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#166868',
                          fontSize: 20,
                        }}>
                        ${item.food.harga*item.quantity}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                          onPress={() => this.changeQuantity(i, false)}>
                          <Icon
                            name="ios-remove-circle"
                            size={30}
                            color="#166868"
                          />
                        </TouchableOpacity>
                        <Text
                          style={{paddingHorizontal: 5, fontWeight: 'bold'}}>
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => this.changeQuantity(i, true)}>
                          <Icon
                            name="ios-add-circle"
                            size={30}
                            color="#166868"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={{height: 10}} />
        <Text
          style={{
            paddingVertical: 5,
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'flex-end',
            right: 20,
            color: '#166868',
          }}>
          Total : ${this.onTotal()}
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#166868',
            width: width - 40,
            alignItems: 'center',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
            CHECHOUT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Cart;
