import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import img1 from './image/banner/satu.png';
import img2 from './image/banner/dua.png';
import img3 from './image/banner/tiga.png';
import img4 from './image/banner/empat.png';

import {SliderBox} from 'react-native-image-slider-box';
var {height, width} = Dimensions.get('window');

export default class Latest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [img1, img2, img3, img4],
    };
  }
  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
    });
  };

  render() {
    return (
      <View onLayout={this.onLayout}>
        <SliderBox
          resizeMode={'contain'}
          images={this.state.images}
          sliderBoxHeight={200}
          dotColor="#fe696b"
          inactiveDotColor="#dddddd"
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 15,
            backgroundColor: '#fe696b',
          }}
          paginationBoxStyle={{
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          paginationBoxVerticalPadding={20}
          autoplay={true}
          circleLoop
          parentWidth={this.state.width}
          ImageComponentStyle={{
            height: width / 3,
            width: width - 15,
            borderRadius: 7,
          }}
          imageLoadingColor="#dddddd"
        />
      </View>
    );
  }
}
