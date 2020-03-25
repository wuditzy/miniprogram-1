// pages/home/home.js
// import request from '../../service/network.js'
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'
Page({
  data: {
    banner: [],
    recommend: [],
    goods: {
      pop: {
        page: 0,
        list: []
      },
      newp: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      },
    },
    tabTitle:['one','two','three'],
    tabCurrent:0
  },

  /**
   * 生命周期函数--监听页面加载--页面加载完成
   */
  onLoad: function(options) {
    //轮播图推荐数据
    this._getMultiData()

    //请求商品数据
    this._getGoodsData('pop')
  },
  _getMultiData(){
    //发送网络请求
    getMultiData().then(res => {
      // console.log(res)
      //取出轮播图和数据
      const banner = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.setData({
        banner,
        recommend
      })
    })
  },
  _getGoodsData(type){
    // 获取页码
    const page=this.data.goods[type].page+1
    getGoodsData(type,page).then(res=>{
      console.log(res)
      // 1取出数据
      // const list=res.data
    })
  },
  //获取tabcontrol的索引
  handleTabControl(event){
    this.setData({
      tabCurrent:event.currentTarget.dataset.index
    })
  }
})