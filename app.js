//注册一个小程序示例
App({
  //声明周期函数：会在后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //初始化完成
    console.log('333')
    //
    //一般用来获取用户信息
    // wx.getUserInfo({//异步，数据拿到之后再进行回调
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //小程序界面显示出来的时候，执行的生命周期的函数
    // console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    // 界面被隐藏时会执行
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    //当程序发生一些错误时会执行

  }
})
