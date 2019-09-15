import React from 'react'
import { View, Text, Button } from 'react-native'

// import { Actions } from 'react-native-router-flux'

export default class Movie extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    // 在 RN 中 console.log() 不起作用
    // console.warn(this.props)
    // console.warn(JSON.stringify(this.props, null, '    '))


    return <View>
      <Text>Movie 组件 -- 用户名：{this.props.uname} -- 年龄：{this.props.age}</Text>

      <View style={{ paddingHorizontal: 50, paddingVertical: 80 }}>
        <Button title="去关于页面" onPress={() => this.Actions.about()}></Button>
      </View>

      {/* Actions.pop() 表示后退一个路由历史记录 */}
      <Button title="返回" color="red" onPress={() => this.Actions.pop()}></Button>
    </View>
  }
}