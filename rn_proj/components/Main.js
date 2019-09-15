// 项目主页【首屏页面】
import React from 'react'
import { View, Text } from 'react-native'

// 导入 TabBar 相关的模块
import TabNavigator from 'react-native-tab-navigator'

// 导入 Tab 栏 所需的 三个 页面组件
import Home from './tabs/Home'
import Cart from './tabs/Cart'
import Member from './tabs/Member'

// 导入 字体图标
import Icon from 'react-native-vector-icons/Ionicons'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedTabName: 'home' // 默认 设置 首页被选中
    }
  }

  render() {
    return <View style={{ flex: 1 }}>

      {/* 配置 TabBar */}
      <TabNavigator>

        {/* 首页 */}
        <TabNavigator.Item
          title="首页"
          selected={this.state.selectedTabName === 'home'}
          onPress={() => this.setState({ selectedTabName: 'home' })}
          renderIcon={() => <Icon name="md-home" size={22} color="#900" />}
          renderSelectedIcon={() => <Icon name="md-home" size={22} color="#0078D7" />}
        >
          <Home></Home>
        </TabNavigator.Item>

        {/* 购物车 */}
        <TabNavigator.Item
          title="购物车"
          badgeText="0"
          selected={this.state.selectedTabName === 'cart'}
          onPress={() => this.setState({ selectedTabName: 'cart' })}
          renderIcon={() => <Icon name="md-cart" size={22} color="#900" />}
          renderSelectedIcon={() => <Icon name="md-cart" size={22} color="#0078D7" />}
        >
          <Cart></Cart>
        </TabNavigator.Item>

        {/* 会员 */}
        <TabNavigator.Item
          title="会员"
          selected={this.state.selectedTabName === 'member'}
          onPress={() => this.setState({ selectedTabName: 'member' })}
          renderIcon={() => <Icon name="md-contact" size={22} color="#900" />}
          renderSelectedIcon={() => <Icon name="md-contact" size={22} color="#0078D7" />}
        >
          <Member></Member>
        </TabNavigator.Item>

      </TabNavigator>

    </View>
  }
}