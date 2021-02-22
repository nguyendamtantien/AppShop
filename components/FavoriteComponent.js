import React, { Component } from 'react';
import { FlatList, Text, Alert } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Loading from './LoadingComponent';
import Swipeout from 'react-native-swipeout';
import { baseUrl } from '../shared/baseUrl';
// redux
import { deleteFavorite } from '../redux/ActionCreators';
import { connect } from 'react-redux';
//animtion 
import * as Animatable from 'react-native-animatable';
const mapStateToProps = state => {
  return {
    products: state.products,
    favorites: state.favorites
  }
};
const mapDispatchToProps = dispatch => ({
    deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
  });
  

class Favorites extends Component {
  render() {
    if (this.props.products.isLoading) {
      return (<Loading />);
    } else if (this.props.products.errMess) {
      return (<Text>{this.props.products.errMess}</Text>);
    } else {
      const products = this.props.products.products.filter((dish) => this.props.favorites.some((el) => el === dish.id));
      return (
        <FlatList data={products}
          renderItem={({ item, index }) => this.renderMenuItem(item, index)}
          keyExtractor={item => item.id.toString()} />
      );
    }
  }
  renderMenuItem(item, index) {
    const { navigate } = this.props.navigation;
    const rightButton = [
        {
          text: 'Delete', type: 'delete',
          onPress: () => {
            Alert.alert(
              'Delete Favorite?',
              'Are you sure you wish to delete the favorite dish ' + item.name + '?',
              [
                { text: 'Cancel', onPress: () => { /* nothing */ } },
                { text: 'OK', onPress: () => this.props.deleteFavorite(item.id) }
              ],
              { cancelable: false }
            );
          }
        }
      ];
    // const rightButton = [
    //     { text: 'Delete', type: 'delete', onPress: () => this.props.deleteFavorite(item.id) }
    //   ];
    return (
      <Swipeout right={rightButton} autoClose={true}>
          <Animatable.View animation="fadeInRightBig" duration={2000}>
            <ListItem key={index} onPress={() => navigate('Dishdetail', { dishId: item.id })}>
                <Avatar source={{ uri: baseUrl + item.image }} />
                <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
          </Animatable.View>
      </Swipeout>
      
    );
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);