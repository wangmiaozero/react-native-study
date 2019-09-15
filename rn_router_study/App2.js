import React from 'react'
import { View, Text, Image } from 'react-native'

// 1. 导入路由需要的组件
import { Router, Tabs, Scene, Actions } from 'react-native-router-flux'
// 1.2 把 Actions 挂载到 React.Component.prototype 上
React.Component.prototype.Actions = Actions

// 导入 路由相关的页面组件
import Home from './components/Home'
import Movie from './components/Movie'
import About from './components/About'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    // Router 是路由的根容器，所有的路由规则，都必须放到 Router 内部，而且，一个App，只能用一次 Router
    return <Router>
      {/* 表示路由规则的分组，所有的路由规则，必须放到  Stack 内部*/}
      <Tabs tabBarPosition="bottom">
        {/* 路由规则中， key 很重要，不能重复，key 应该是唯一的 */}
        {/* 在路由规则中，出现的第一个路由规则，就是我们的首屏页面 */}
        <Scene key="home" component={Home}
          title="首页" // 设置导航条上 大标题
          hideNavBar={true} // 隐藏导航条
          icon={() => <Image source={require('./images/home-actived.png')} style={{ width: 24, height: 24 }} />} // 设置tab栏的图标
        />
        <Scene key="movie" component={Movie}
          title="电影"
          hideNavBar={true}
          icon={() => <Image source={require('./images/board-actived.png')} style={{ width: 24, height: 24 }} />}
        />
        <Scene key="about" component={About}
          title="关于"
          hideNavBar={true}
          icon={() => <Image source={require('./images/profile-actived.png')} style={{ width: 24, height: 24 }} />}
        />
      </Tabs>
    </Router>
  }
}