// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handlePushDetail(){
    wx.navigateBack({
      // delta:2//返回层级
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //1.获取首页的页面对象

    //getCurrentPages指的是当前所有活跃的页面对象
    const pages=getCurrentPages()
    console.log(pages)
    const home=pages[pages.length-2]

    //2.调用页面对象setData
    home.setData({
      title:'hehheh'
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})