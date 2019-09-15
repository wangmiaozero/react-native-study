// 这是 App 根组件，主要负责配置路由相关的信息
import React from 'react'

// 导入路由模块
import { Router, Stack, Scene, Actions, Tabs } from 'react-native-router-flux'
// 把 编程式导航的 Actions API，全局挂载给 React 组件
// 在每个组件中，直接访问 this.Actions 就可以实现编程式导航了
React.Component.prototype.Actions = Actions

// Actions.key({参数})

// 设置 全局的 baseURL 
// 测试地址：     http://39.106.32.91:3005
// 上线地址：     https://api.douban.com
React.Component.prototype.baseURL = 'https://api.douban.com'

// 导入项目的首屏页面
import Main from './components/Main'
// 导入电影列表页面
import MovieList from './components/movie/MovieList'
// 导入 电影详情组件页面
import MovieDetail from './components/movie/MovieDetail'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return <Router>
      <Stack>
        <Scene key="main" component={Main} hideNavBar={true} />

        <Tabs
          tabBarPosition="top"  // 设置 Tab 栏 置顶
          lazy={true} // 启用 Scene 的懒加载效果，直到 对应的 路由被激活时，才会 创建对应的组件
        >
          <Scene key="in_theaters" component={MovieList}
            title="正在热映"
            hideNavBar={true}
            mtype="in_theaters" />
          <Scene key="coming_soon" component={MovieList}
            title="即将上映"
            hideNavBar={true}
            mtype="coming_soon" />
          <Scene key="top250" component={MovieList}
            title="Top250"
            hideNavBar={true}
            mtype="top250" />
        </Tabs>

        {/* 电影详情页面的组件 */}
        <Scene key="moviedetail" component={MovieDetail} title="电影详情"
          backButtonTintColor="#fff"
          navigationBarStyle={{ backgroundColor: '#1F96F1', height: 50 }}
          titleStyle={{ color: '#fff', fontSize: 14 }} />

      </Stack>
    </Router>
  }
}