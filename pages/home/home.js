//注册一个页面
Page({
  //这个{}叫做对象的自变量
  data:{
    name:'tian',//属性
    age:18,
    movies:[
      { id: 1, name: '333', age: 33 }
    ],
    counter:0,
    list:[]
  },
  handleBtnClick(){
    // console.log('33')
    //错误方法界面不会刷新
    this.data.counter +=1
    console.log(this.data.counter)


    //用this.setData改变数据
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  },

  //---监听页面生命周期函数
  //页面被加载出来
  onLoad(){
    const _this=this
    wx.request({
      url: 'http://123.207.32.23:8000/recommend',
      success:function(res){
        // this.setData//this--undefined
        _this.setData
      }
      // seccess:(res)=>{//箭头函数中的this是一层一层网上找的
      //   console.log(res,'res')
      // }
    })
  },
  //页面显示出来时
  onshow(){

  },
  //页面初次渲染完成时
  onReady(){

  },
  //页面隐藏时
  onHide(){

  },
  //销毁
  onUnload(){

  },
  //监听其他事件
    //监听页面滚动
    onPageScroll(obj){
      
    },
    //监听页面滚动到底部
    onReachBottom(){
      
    },
    //下拉刷新
    onPullDownRefresh(){

    }
})