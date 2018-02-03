import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { _Data } from '../model/Data';
import { Style } from './AppStyle';
import _View from '../view/View';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [_Data[1]], refresh: true, counter: 1 };
    this.onPress = this.onPress.bind(this);
  }

  onPress(target, counter) {
    let _newData = this.state.data;
    let _counter = this.state.counter;
    if (counter) {
      _newData = _newData.slice(0, counter);
      _counter = counter;
    }
    _newData.push(_Data[target]);
    this.setState({ data: _newData, refresh: !this.state.refresh, counter: _counter + 1 });
  }

  render() {
    return (
      <View style={Style.container}>
        <FlatList style={Style.flatList}
          data={this.state.data}
          extraData={this.state.refresh}
          renderItem={({ item }) => <_View item={item} counter={this.state.counter} onPress={this.onPress} />}
          keyExtractor={item => item.id} />
      </View>
    );
  }
}
