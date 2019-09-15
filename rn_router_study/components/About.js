import React from 'react'
import { View, Text, Button } from 'react-native'

// import { Actions } from 'react-native-router-flux'

export default class About extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <View>
      <Text>About 组件</Text>

      <Button title="返回" color="red" onPress={() => this.Actions.pop()}></Button>
    </View>
  }
}