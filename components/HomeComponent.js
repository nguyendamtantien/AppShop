import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Card, Image } from 'react-native-elements';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
// redux
import { connect } from 'react-redux';
//animtion 
import * as Animatable from 'react-native-animatable';
const mapStateToProps = state => {
  return {
    products: state.products,
    promotions: state.promotions,
    leaders: state.leaders
  }
};
class RenderItem extends Component {
  render() {
    const item = this.props.item;
    if (this.props.isLoading) {
      return (<Loading />);
    } else if (this.props.errMess) {
      return (<Text>{this.props.errMess}</Text>);
    } else {
      const item = this.props.item;
      if (item != null) {
        return (
          <Card>
            <Text style={styles.itemName}>{item.name}</Text>
            <Image source={{ uri: baseUrl + item.image }} style={{ width: '100%', height: 100, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
            </Image>
            <Text style={{ margin: 10 }}>{item.description}</Text>
            <Text style={styles.itemPrice}>{item.price}$</Text>
          </Card>
        );
      }
      return (<View />);
    } 
  }
}

class Home extends Component {
  
  render() {
    const product = this.props.products.products.filter((product) => product.featured === true)[0];
    const promo = this.props.promotions.promotions.filter((promo) => promo.featured === true)[0];
    const leader = this.props.leaders.leaders.filter((leader) => leader.featured === true)[0];
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <RenderItem item={product}
        isLoading={this.props.products.isLoading}
        errMess={this.props.products.errMess} /></Animatable.View>
        <Animatable.View animation="fadeInRight" duration={2000} delay={1000}>
          <RenderItem item={promo}
        isLoading={this.props.promotions.isLoading}
        errMess={this.props.promotions.errMess} /></Animatable.View>
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
          <RenderItem item={leader}
        isLoading={this.props.leaders.isLoading}
        errMess={this.props.leaders.errMess} /></Animatable.View>
        
      </ScrollView>
    );
  }
}
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 20,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
    alignItems: 'center',
  },
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
});