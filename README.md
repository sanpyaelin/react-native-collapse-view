# react-native-collapse-view


<img src="https://raw.githubusercontent.com/sanpyaelin/react-native-collapse-view/master/images/demo.gif" width="200"> 


## Install package
```bash
$ npm i react-native-collapse-view
```

## Usage

Import the component:
```js
import CollapseView from 'react-native-collapse-view';


<CollapseView 
  renderView={this._renderView}
  renderCollapseView={this._renderCollapseView}
/>
```

Handle Collapse Programmatically:
```js
import CollapseView from 'react-native-collapse-view';

<CollapseView 
  disablePress // you must set this true to disable touchable
  collapse={isCollapse} // true = open | false = close
  renderView={this._renderView}
  renderCollapseView={this._renderCollapseView}
/>
```
## Example

Check full example in the [example](https://github.com/sanpyaelin/react-native-collapse-view/blob/master/example/index.js) folder.

## Properties

Prop | Type | Default
-----|------|---------
collapse | bool | false 
tension| number | 10 
renderView| func |  
renderCollapseView | func | 
disablePress | bool | false

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © 2018 San Pyae Lin
