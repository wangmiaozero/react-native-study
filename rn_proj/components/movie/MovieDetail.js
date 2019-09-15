import React from 'react'
import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native'

export default class MovieDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      isloading: true, // 表示是否正在加载数据
      minfo: {} // 电影详情页面
    }
  }

  componentWillMount() {
    this.getMovieDetail()
  }

  render() {
    // this.props.id
    // console.warn(JSON.stringify(this.props, null, '    '))
    return <View style={{ flex: 1 }}>
      {
        this.state.isloading ? <ActivityIndicator size="large" /> : <ScrollView style={{ flex: 1, paddingHorizontal: 4 }}>
          <View>
            {/* 注意：网络中的图片必须设置宽高 */}
            <View style={{ paddingVertical: 20, alignItems: 'center' }}>
              <Image source={{ uri: this.state.minfo.images.large }} style={{ width: 200, height: 250 }} />
            </View>

            {/* 电影的描述信息 */}
            <Text style={{ lineHeight: 30 }}>        {this.state.minfo.summary}</Text>
          </View>
        </ScrollView>
      }
    </View>
  }

  // 根据电影 ID 获取电影详情
  getMovieDetail = async () => {
    const res = await fetch(this.baseURL + '/v2/movie/subject/' + this.props.id)
    // 获取真正的电影详情数据
    const data = await res.json()

    // setTimeout(() => { // 上线的时候，把这个延时器 干掉！！！！
    this.setState({
      minfo: data, // 电影详情数据
      isloading: false // 将loading效果隐藏
    })
    // }, 500)
  }
}