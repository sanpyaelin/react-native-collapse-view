import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import CollapseView from "react-native-collapse-view";

class Test extends Component {
  _renderView = (collapse) => {
    return(
      <View style={styles.view}>
        <Text>Toggle {collapse? 'on': 'off'}</Text>
      </View>
    )
  }

  _renderTensionView = (collapse) => {
    return(
      <View style={styles.view}>
        <Text>With tension effect</Text>
      </View>
    )
  }

  _renderIconView = (collapse) => {
    return(
      <View style={styles.iconView}>
        <Text>Toggle {collapse? 'on': 'off'}</Text>
        <View>
          {
            collapse?
            <Image source={require('./img/up.png')}/>:
            <Image source={require('./img/down.png')}/>
          }
        </View>
      </View>
    )
  }

  _renderCollapseView = (collapse) => {
    return(
      <View style={styles.collapseView}>
        <Text>{collapse}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
    )
  }

  render() {
    return (
    <View style={styles.container}>
      <CollapseView 
        tension={100}
        renderView={this._renderTensionView}
        renderCollapseView={this._renderCollapseView}
      />
      <CollapseView 
        renderView={this._renderView}
        renderCollapseView={this._renderCollapseView}
      />
      <CollapseView 
        renderView={this._renderIconView}
        renderCollapseView={this._renderCollapseView}
      />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
  },
  view: {
    height:50,
    padding: 20,
    justifyContent:'center',
    backgroundColor:'#ffffff',
  },
  collapseView: {
    padding: 20
  },
  iconView: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#ffffff',
  }
});
export default Test;
