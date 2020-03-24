const TOKEN='token'
//注册一个小程序示例
App({
  //声明周期函数：会在后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  globalData:{
    token:''
  },
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



    //判断缓存中有没有token，---重新登录
    const token=wx.getStorageSync(TOKEN)
    if(token&&token.length!==0){//已将有token--有的话验证是否过期
      this.check_login(token)
    }else{//没有token进行登录操作
      this.login()
    }
  },
  check_login(token){//验证token过期
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        // console.log(res)
        if(!res.data.errcode){
          this.globalData.token=token
        }else{
          this.login()
        }
      }
    })
  },
  login(){
    wx.login({
      success: (res) => {
        // console.log(res)
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code
          },
          method: 'post',
          success: (res) => {
            console.log(res)
            //取出token
            const token = res.data.token
            //将token保存在globalData中
            this.globalData.token = token
            //进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  // onShow: function (options) {
  //   //小程序界面显示出来的时候，执行的生命周期的函数
  //   // console.log(options)
  // },

  // /**
  //  * 当小程序从前台进入后台，会触发 onHide
  //  */
  // onHide: function () {
  //   // 界面被隐藏时会执行
  // },

  // /**
  //  * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  //  */
  // onError: function (msg) {
  //   //当程序发生一些错误时会执行

  // }
})
