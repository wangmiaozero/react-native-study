import React from 'react'
import { View, Text, ActivityIndicator, FlatList, Image, TouchableNativeFeedback } from 'react-native'

export default class MovieList extends React.Component {
  constructor() {
    super()
    this.state = {
      isloading: true, // 默认正在请求数据，需要显示 loading 效果
      nowPage: 1, // 当前所在的页码值
      pageSize: 10, // 每页显示多少条数据
      mlist: [], // 请求回来的电影列表
      isover: false, // 表示数据是否加载完毕了，默认 false 表示没有加载完毕
      total: 0, // 当前分类下，总共有多少条电影
    }
  }

  // 组件将要挂载
  componentWillMount() {
    this.getMovieListByMType()
  }

  render() {
    return <View>
      {
        this.state.isloading ? <ActivityIndicator size="large" /> : <View>
          <FlatList
            data={this.state.mlist} // 要渲染的数据
            renderItem={({ item, index }) => this.renderMovieItem(item)} // 渲染每个Item项
            keyExtractor={(item) => item.id + ''} // 自定义每一项的 key 属性
            ItemSeparatorComponent={() => <View style={{ borderTopColor: '#ccc', borderTopWidth: 1, marginHorizontal: 10 }}></View>} // 渲染行间分割线
            onEndReachedThreshold={0.3} // 当距离列表底部，不足 列表 可见长度的 0.3 的时候，尝试加载下一页数据
            onEndReached={() => this.getNextPage()} // 当触底的时候，要调用的函数
            ListFooterComponent={() => this.state.isover ? null : <ActivityIndicator />} // 在列表底部渲染一个 loading 指示器
          />
        </View>
      }
    </View>
  }

  // 根据 电影类型获取 电影列表
  getMovieListByMType = async () => {
    // 在 移动端 App 开发中，不涉及到 跨域的问题，因此，可以直接使用 fetch 来请求数据
    // count 是每页显示多少条数据
    // start 表示 请求数据时候的 索引偏移量 计算公式  (page - 1) * pageSize
    const start = (this.state.nowPage - 1) * this.state.pageSize

    // 发起数据请求
    const res = await fetch(this.baseURL + `/v2/movie/${this.props.mtype}?start=${start}&count=${this.state.pageSize}`)
    // 拿到数据
    const data = await res.json()
    // console.warn(data)

    // setTimeout(() => { // 这一个 延时器，在项目上线的之后，要干掉
    this.setState({
      mlist: this.state.mlist.concat(data.subjects), // 电影列表数据, 由于是分页加载的数据，所以，应该 使用数组的 concat 做拼接；
      isloading: false,
      total: data.total
    })
    // }, 1000)
  }

  // 渲染电影Item
  renderMovieItem = (item) => {
    // View 没有 onPress 点击事件
    // 只有 Touchable 系列的组件，才有对应的 onPress 事件
    return <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackground()}
      onPress={() => this.Actions.moviedetail({ id: item.id, title: item.title })}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <Image source={{ uri: item.images.small }} style={{ width: 120, height: 160, marginRight: 4 }} />
        <View style={{ justifyContent: 'space-around' }}>
          <Text>电影名称：{item.title}</Text>
          <Text>电影类型：{item.genres.join('，')}</Text>
          <Text>上映年份：{item.year}年</Text>
          <Text>豆瓣评分：{item.rating.average}分</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  }

  // 获取下一页数据
  getNextPage = () => {
    // 在发起下一页数据请求之前，先判断，还有没有下一页
    // 如果有下一页： 继续走后续代码流程
    // 如果没有下一页： 把 isover 重置为 true , 同时，直接 return 从而 终止 后续代码的执行；
    // 如何才能直到没有下一页了呢？
    // 公式    nowPage * pageSize >= totalCount   就证明没有下一页了
    // totalCount = 28    pageSize = 10    nowPage = 1
    // totalCount = 30    pageSize = 10    nowPage = 1
    if (this.state.nowPage * this.state.pageSize >= this.state.total) {
      this.setState({
        isover: true // 表示数据加载完了，需要 把  loading 指示器 移除
      })
      return
    }



    // 分析思路：
    // 1. 先让 页码值 + 1
    // 2. 再次调用 this.getMovieListByMType()

    this.setState({
      nowPage: this.state.nowPage + 1 // 页码值 +1
    }, function () {
      this.getMovieListByMType()
    })
  }
}