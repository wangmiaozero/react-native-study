import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

// 导入 轮播图 组件
import Swiper from 'react-native-swiper'

// 创建 样式表 对象
const styles = StyleSheet.create({
  gridList: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gridItem: {
    width: '33.3%',
    alignItems: 'center',
    paddingVertical: 20
  },
  gridImg: {
    width: 60,
    height: 60,
    marginBottom: 10
  },
  GridTxt: {
    fontSize: 12
  }
})

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>

        {/* 轮播图 区域 */}
        <View style={{ height: 160 }}>
          <Swiper
            showsButtons={false}  // 展示 左右 按钮
            autoplay={true}  // 自动轮播
            showsPagination={true} // 分页指示器
            autoplayTimeout={3} // 轮播的间隔时间
          >
            <Image source={{ uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg' }} style={{ width: '100%', height: '100%' }} resizeMode="stretch" />
            <Image source={{ uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg' }} style={{ width: '100%', height: '100%' }} resizeMode="stretch" />
            <Image source={{ uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg' }} style={{ width: '100%', height: '100%' }} resizeMode="stretch" />
          </Swiper>
        </View>

        {/* 六宫格区域 */}
        <View style={styles.gridList}>
          {/* 六宫格的 Item 项 */}
          <View style={styles.gridItem}>
            <Image style={styles.gridImg} source={require('../../images/menu1.png')} />
            <Text>新闻资讯</Text>
          </View>

          {/* 六宫格的 Item 项 */}
          <View style={styles.gridItem}>
            <Image style={styles.gridImg} source={require('../../images/menu2.png')} />
            <Text>图片分享</Text>
          </View>

          {/* 六宫格的 Item 项 */}
          <View style={styles.gridItem}>
            <Image style={styles.gridImg} source={require('../../images/menu3.png')} />
            <Text>商品购买</Text>
          </View>

          {/* 六宫格的 Item 项 */}
          <View style={styles.gridItem}>
            <Image style={styles.gridImg} source={require('../../images/menu4.png')} />
            <Text>视频专区</Text>
          </View>

          {/* 六宫格的 Item 项 */}
          <TouchableOpacity style={styles.gridItem} onPress={() => this.Actions.in_theaters()}>
            <View>
              <Image style={styles.gridImg} source={require('../../images/menu5.png')} />
              <Text>热映电影</Text>
            </View>
          </TouchableOpacity>

          {/* 六宫格的 Item 项 */}
          <View style={styles.gridItem}>
            <Image style={styles.gridImg} source={require('../../images/menu6.png')} />
            <Text>联系我们</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  }
}