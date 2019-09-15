import React from 'react'

// 第1步：
import { View, Button, Image } from 'react-native'
// 导入拍照的组件
import ImagePicker from 'react-native-image-picker'
// 拍照选项
var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75, // 设置拍照时候，照片的质量 0 ~ 1
  allowsEditing: true, // 是否允许拍完照片以后立即编辑此照片
  noData: false, // 拍出来的照片，可以是 base 64 格式的； 如果 设置 true，会禁用 base 64 格式的图片，从而提高 大图片的拍照效率
  storageOptions: { // 如果设置了此选项，则 IOS 端拍出的照片会存放到 Documents 目录，在 Android 端会存放到 Pictures 目录，否则，如果不设置 storageOptions 选项，则拍照得到的照片，会被存放到 系统 的临时文件夹中；
    skipBackup: true, // 如果 此项 为 true ，则 IOS 端拍摄的照片，不会被 自动 备份到 iCloud 云端； 注意：此选项只有 IOS 支持，Android 不支持
    path: 'images' // 指定 IOS 端拍出的照片，存放到 Documents/[path指定目录中去]
  }
}

export default class Member extends React.Component {
  constructor() {
    super()
    this.state = {
      imgURL: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2544269114,2104066965&fm=27&gp=0.jpg' // 这是 照片的路径，表示拍照 获得到 的照片路径，会被存储到 这个状态中
    }
  }

  render() {
    return <View style={{ alignItems: 'center', paddingTop: 50 }}>

      {/* 显示照片的 */}
      <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 15 }}></Image>
      {/* 拍照的按钮 */}
      <Button title="拍照" onPress={this.cameraAction}></Button>

    </View>
  }

  // 拍照的方法
  cameraAction = () => {
    // ImagePicker.showImagePicker(obj , callback) 表示 开始拍照， 会在手机上弹出一个 拍照的层
    // 第一个对象，就是 设置 拍照层 中一些参数信息的； 第二个 回调函数，是 拍照完成后，执行的回调；
    ImagePicker.showImagePicker(photoOptions, (response) => {
      console.log('response' + response);
      if (response.didCancel) { // 如果 response.didCancel 为 true，表示用户取消了拍照
        return
      }
      // 证明用户拍好了照片
      this.setState({
        imgURL: response.uri // 获取用户拍摄的照片的路径，并存储到 state 上
      });
    })
  }
}