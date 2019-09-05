/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, // 根据不同的平台，选择不同的操作
  StyleSheet, // 使用这个组件，可以创建样式表， RN 中，样式比较特殊，必须使用 StyleSheet 组件来进行创建
  Text,
  View
} from 'react-native';

// 这个特性用的不多
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 创建了 App 组件
export default class App extends Component {
  render() {
    // 这里的 （） 是语法要求，如果 return 和 jsx 不再同一行，则 必须用  () 包裹
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to 黑马程序员!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    )
  }
}

// 通过 StyleSheet.create 可以得到一个 样式对象
// 在 调用 create 的时候，可以传递一个 样式的配置对象 { } 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
