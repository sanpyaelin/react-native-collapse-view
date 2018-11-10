import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";

const propTypes = {
  renderView: PropTypes.func.isRequired,
  renderCollapseView: PropTypes.func.isRequired,
  collapse: PropTypes.bool,
  tension: PropTypes.number,
  disablePress: PropTypes.bool
}
const defaultProps = {
  collapse: false,
  tension: 10,
  disablePress: false,
};

class CollapseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: this.props.collapse,
      animation: new Animated.Value(),
    };
  }

  collapse = () => {
    const { startpoint, endpoint, animation, collapse } = this.state;
    let startAnim = collapse? endpoint + startpoint : startpoint;
    let endAnim = collapse? startpoint : startpoint + endpoint;
    this.setState({
      collapse: !this.state.collapse
    })
    
    animation.setValue(startAnim);
    Animated.spring(
      this.state.animation,
      {
        toValue: endAnim,
        tension: this.props.tension,
      }
    ).start();
  }

  startpoint = (layout) => {
    if(!this.state.collapse) this.setState({animation: new Animated.Value(layout.nativeEvent.layout.height)});
    this.setState({
      startpoint: layout.nativeEvent.layout.height
    })
  }

  endpoint = (layout) => {
    if(this.state.collapse) this.setState({animation: new Animated.Value(layout.nativeEvent.layout.height)});
    this.setState({
      endpoint: layout.nativeEvent.layout.height,
    })
  }

  componentWillReceiveProps(nextprops) {
    const {collapse} = this.props

    if (collapse !== nextprops.collapse) {
      this.collapse()
    }
  }

  render() {
    const { collapse, animation } = this.state;
    const {disablePress} = this.props
    return (
      <Animated.View style={{height: animation, backgroundColor:'transparent', overflow: 'hidden'}}>
        <TouchableOpacity disabled={disablePress} activeOpacity={1} onPress={this.collapse} onLayout={this.startpoint}>
          {this.props.renderView(collapse)}
        </TouchableOpacity>
        <View onLayout={this.endpoint}>
          {this.props.renderCollapseView(collapse)}
        </View>
      </Animated.View>
    );
  }
}

CollapseView.propTypes = propTypes;
CollapseView.defaultProps = defaultProps;
export default CollapseView;