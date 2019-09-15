import React from 'react'
import { View, Text, Button } from 'react-native'
// import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <View>
      <Text>Home 组件</Text>

      <View style={{ paddingHorizontal: 50, paddingVertical: 80 }}>
        <Button title="去电影页面" onPress={() => this.Actions.movie({ uname: '张三', age: 22 })}></Button>
      </View>
    </View>
  }
}