// react-native 中，提供了一些最基本的 组件，比如 显示文本的 组件、显示 图片的组件.....
// react-native 包中，提供的这些组件，就相当于 antd 中的那些 UI 组件；
import { AppRegistry } from 'react-native';
// AppRegistry 用这个 组件，就可以 把 某个 特定的 React 组件，注册为 当前 App 的首屏页面；

// 导入 App 根组件
import App from './App';

// 导入自己的首屏页面
import MyHome from './MyHome'

import FlatListStudy from './FlatListStudy'

// 这是 把 App 根组件，注册为 整个应用程序的首屏页面；
// AppRegistry.registerComponent 方法的作用，就是 来注册首屏页面的
// 参数1： 是项目的名称，这个名称，不要乱改；
// 参数2： 是一个 方法，需要由返回值，返回值应该是一个组件，这个组件，就是我们的首屏页面；
AppRegistry.registerComponent('myrnstudy', () => FlatListStudy);