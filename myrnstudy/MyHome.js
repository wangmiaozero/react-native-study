// 这是我的首屏页面所对应的  组件

// 回顾 ： React 中创建组件的步骤
//  1. 无状态组件   function Hello(){ return <div>123</div> }
//  2. 有状态组件   class MyTest extends React.Component { render(){ return <div>ooo</div> } }

// 使用 class 创建组件的步骤：
// 1. 导入 React
// 2. 使用 class 创建类，让这个类，继承自 React.Component
// 3. 使用 ES6 的 export default 把组件暴露出去

import React, { Component } from 'react' // 帮我们创建组件
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
  ScrollView
} from 'react-native' // 提供了 RN 开发所需的基本组件

// 向外暴露一个组件
export default class MyHome extends Component {
  constructor() {
    super()
    this.state = {
      msg: '默认消息123'
    }
  }

  render() {
    // 必须 return 一个合法的 JSX 元素
    // return null
    // 今后，千万必要 写 web 顺手了，上来就使用 HTML 中的标签，这样是不行的；
    // 只能使用 react-native 包中提供的内置组件
    // return <div>123</div>

    // 对于 RN 中，如果放文本，必须 包裹在 Text 组件中
    // 如果想用组件，必须先导入
    return <ScrollView style={{ flex: 1 }}>
      <View style={styles.wrapper}>

        <TouchableHighlight
          onPress={() => this.btnClick()}
          underlayColor="red" // 设置点击时候的底层颜色
          activeOpacity={1} // 设置的是被点击元素的透明度
        >
          <Text>这是一段文本，文本只能放在 Text 组件中！</Text>
        </TouchableHighlight>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.btnClick()}
        >
          <Text>啊， 五环</Text>
        </TouchableOpacity>

        <Text>你比六环少一环</Text>
        <Text>啊，大海</Text>
        <Text>{this.state.msg}</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent" // 取消文本框的底边框
          onChangeText={(val) => this.textChanged(val)}
          // defaultValue="ooo" 文本框的默认值
          // placeholder="请输入"
          // placeholderTextColor="red"
          secureTextEntry={true}
        ></TextInput>

        {/* 按钮 */}
        {/* Button 按钮，必须 设置 onPress 处理函数 */}
        {/* 注意：RN中 的 onPress 就等同于 网页中 的 onClick */}
        <Button title="按钮" onPress={() => this.btnClick()}></Button>


        <TouchableNativeFeedback
          onPress={() => this.btnClick()}
          background={TouchableNativeFeedback.Ripple('red', false)}
        >
          {/* 注意：如果想看到 视觉效果，必须 只能放 View */}
          <View style={{ width: 200, height: 200 }}>
            <Text>这是 TouchableNativeFeedback 组件的触摸效果演示</Text>
          </View>
        </TouchableNativeFeedback>


        {/* Laoding效果 */}
        <ActivityIndicator size="large" color="orange" />


        {/* 引用本地的图片资源 */}
        {/* 注意：图片没有 onPress 事件 */}
        <TouchableHighlight onPress={() => this.btnClick()}>
          <Image source={require('./images/1.jpg')} />
        </TouchableHighlight>

        {/* 引用 网络上的 图片资源 */}
        {/* 如果引用网络上的图片，除了指定 source 之外，还要通过 样式指定 宽 和 高 */}
        <Image source={{ uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3878847766,3988120331&fm=200&gp=0.jpg' }} style={{ width: 150, height: 150 }} />

      </View>
    </ScrollView>
  }

  // 文本框内容改变的事件
  textChanged = (val) => {
    // 输出黄色的警告框
    // console.warn('文本框的数据变化了' + val)
    this.setState({
      msg: val
    })
  }

  // 按钮的点击事件
  btnClick = () => {
    console.warn('ok')
  }
}

// export default MyHome

// 创建自己的样式
const styles = StyleSheet.create({
  txt: {
    // textAlign 只对 Text组件 有效，View 中不能使用
    textAlign: "center"
  },
  wrapper: {
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'lightblue',
    flex: 1,
    paddingHorizontal: 10
  },
  input: {
    width: '100%',
    borderColor: '#999',
    borderWidth: 1,
    padding: 0,
    borderRadius: 4
  }
})