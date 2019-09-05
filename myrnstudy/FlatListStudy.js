import React from 'react'
import { View, Text, FlatList } from 'react-native'

export default class FlatListStudy extends React.Component {
  constructor() {
    super()
    this.state = {
      mylist1: [
        { id: 1, name: '小黄', age: 20 },
        { id: 2, name: '小黑', age: 22 },
        { id: 3, name: '小白', age: 24 },
        { id: 4, name: '小绿', age: 26 },
        { id: 5, name: '大绿', age: 46 },
        { id: 6, name: '老绿', age: 56 }
      ],
      c: 0
    }
  }

  render() {
    return <View>

      {/* 官方的案例演示 */}
      {/* <FlatList
        data={[{ key: 'a' }, { key: 'b' }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      /> */}

      <FlatList
        data={this.state.mylist1} // 要渲染的数据
        // renderItem 是来渲染每一项的，指定了每一项 要被渲染成 什么样子
        renderItem={({ item, index }) => <View>
          <Text style={{ lineHeight: 150 }}>编号：{item.id} --- 姓名：{item.name} --- 年龄：{item.age}</Text>
        </View>}
        keyExtractor={(item, index) => item.id + ''} // 表示 自定义key
        ItemSeparatorComponent={() => <View style={{ borderTopColor: 'red', borderTopWidth: 1 }}></View>}  // 行间分割线，要定义成一个 箭头函数，同时 ，return 一个 元素 当作 分割线
        onEndReachedThreshold={0.2} // 指定 什么距离下，触发 加载更多事件，这个值 是一个百分比，表示列表可见长度的 比值 距离
        onEndReached={() => this.loadMore()} // 用来指定，当距离底部不足某个值的时候， 要触发的函数
      />

    </View>
  }

  loadMore = () => {
    if (this.state.c >= 1) {
      return;
    }
    // 定义一个空数组, 模拟 下一页的数据
    const arr = []
    for (let i = 0; i < 6; i++) {
      // { id: 6, name: '老绿', age: 56 }
      arr.push({ id: parseInt(Math.random() * 10000), name: '随机', age: 40 })
    }

    // 把 获取到的新数据，和老数据做拼接
    this.setState({
      mylist1: this.state.mylist1.concat(arr),
      c: 1
    })
  }
}