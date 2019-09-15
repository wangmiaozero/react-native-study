import React from 'react'
import { View, Text, Image } from 'react-native'

// 导入 Tab 栏
import TabNavigator from 'react-native-tab-navigator'

// 导入 对应的 tab 栏 页面组件
import Home from './components/tabs/Home'
import Movie from './components/tabs/Movie'
import User from './components/tabs/User'

// 导入 字体图标 的 组件
import Icon from 'react-native-vector-icons/Ionicons'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedTabName: 'home' // 默认让 home 被选中
    }
  }

  render() {
    return <View style={{ flex: 1 }}>

      <TabNavigator>

        {/* 首页 */}
        <TabNavigator.Item
          title="首页"
          selected={this.state.selectedTabName === 'home'}
          onPress={() => this.setState({ selectedTabName: 'home' })}
          // renderIcon={() => <Image source={require('./images/home-actived.png')} style={{ width: 24, height: 24 }} />}
          // renderSelectedIcon={() => <Image source={require('./images/profile-actived.png')} style={{ width: 24, height: 24 }} />}

          renderIcon={() => <Icon name="md-home" size={22} color="#900" />}
          renderSelectedIcon={() => <Icon name="md-home" size={22} color="#0078D7" />}
        >
          <Home></Home>
        </TabNavigator.Item>

        {/* 电影 */}
        <TabNavigator.Item
          title="电影"
          badgeText="0"
          selected={this.state.selectedTabName === 'movie'}
          onPress={() => this.setState({ selectedTabName: 'movie' })}

          renderIcon={() => <Icon name="md-videocam" size={22} color="#900" />}
          renderSelectedIcon={() => <Icon name="md-videocam" size={22} color="#0078D7" />}
        >
          <Movie></Movie>
        </TabNavigator.Item>

        {/* 用户 */}
        <TabNavigator.Item
          title="会员"
          selected={this.state.selectedTabName === 'user'}
          onPress={() => this.setState({ selectedTabName: 'user' })}

          renderIcon={() => <Icon name="md-contact" size={22} color="#900" />}
          renderSelectedIcon={() => <Icon name="md-contact" size={22} color="#0078D7" />}
        >
          <User></User>
        </TabNavigator.Item>

      </TabNavigator>

    </View>
  }
}