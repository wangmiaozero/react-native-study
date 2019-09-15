# RN 项目开发流程

## 初始化项目并允许到手机上进行开发调试
1. 运行 `react-native init rn_proj` 初始化项目结构
2. 运行 `react-native run-android` 把项目部署到手机上调试
3. 把运行于手机上的 项目，配置一下 `Packager Server` 从而保证能够正常的刷新最新的代码

## 配置 路由相关的 信息
1. 运行 `yarn add react-native-router-flux` 安装路由模块
2. 在项目的根组件中，导入 路由模块，并得到需要的路由 组件
3. 创建路由规则的嵌套关系

## 通过 路由规则 指定项目首屏页面
1. `App.js` 主要是路由的配置组件，其中，把 编程式导航 API `Actions` 挂载给了 `React.Component.prototype.Actions`
2. 在 `App.js` 中 还创建了 路由规则：
  ```
  render() {
    return <Router>
      <Stack>
        <Scene key="main" component={Main} hideNavBar={true} />
      </Stack>
    </Router>
  }
  ```
3. 在项目中，新建一个 文件夹 `components` 用来存放 所有的组件页面；
4. 在 `components` 中，新建 一个 `Main.js` 的组件文件，这个 `Main.js` 就是项目的首屏页面；

## 配置 主页中 TabBar 效果
1. 运行 `yarn add react-native-tab-navigator` 安装 模块
2. 在 `Main.js` 设置 Tab 栏效果
3. 设置的步骤，请参考 笔记、官方文档、上课的代码
4. 需要设置 Tab 栏的 文本、对应渲染的组件、点击切换被选中的 Tab 栏、 Tab 栏的图标

## 设置 Tab 栏 的 Icon 图标
1. 安装 给大家 下发 的笔记，按步骤配置 Icon 图标