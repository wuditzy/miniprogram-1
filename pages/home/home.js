import request from '../../service/network.js'
//注册一个页面
Page({
  //这个{}叫做对象的自变量
  data:{
    name:'tian',//属性
    age:18,
    movies:[
      2,5,6,777
      // { id: 1, name: '333', age: 33 }
    ],
    counter:0,
    list:[],
    counter:0,
    title:'hahha'
  },
  handleItemClick(event){
    console.log(event)
    console.log(event.currentTarget.dataset)

  },
  //代码跳转页面
  handlePushDetail(){
    wx.navigateTo({
      url: '/pages/scroll/scroll?name=333',
    })
  },
  //事件冒泡事件捕获---------------------------------------------------
  handleCaptureView1(){
    console.log('handleCaptureView1')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  },
  //---------------------------------------------------
  handleIncrement(event){
    console.log(event)
    // console.log('333')
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleIncrementcpn(){
    // 最终的目的就是修改my-style中的counter
    //1获取组件对象
    // const my_sel=this.selectComponent('class/id')
    const my_sel = this.selectComponent('#sel-id')
    // console.log(999)
    //2通过setData修改组件数据（不合理）
    // my_sel.setData({
    //   counter:my_sel.data.counter
    // })
    //通过方法暴露出来的接口来改变data
    my_sel.incrementCounter(10)

  },
  tabControlClick(event){
    console.log(event)
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
  handleShowToast(){
    wx.showToast({
      title:'shhsh'
    })
  },
  //---监听页面生命周期函数
  //页面被加载出来
  onLoad(){
    const _this=this
    // 1.发送get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   // method:'post',//请求方式--默认get
    //   // header,
    //   data:{//get
    //     type:'sell',
    //     page:1
    //   },
    //   success:function(res){
    //     // this.setData//this--undefined
    //     _this.setData
    //   }
    //   // seccess:(res)=>{//箭头函数中的this是一层一层网上找的
    //   //   console.log(res,'res')
    //   // }
    // })
    // 2.post并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method:'post',//请求方式--默认get
      // header,
      data: {
        name: 'sell',
        age: 1
      },
      success: function (res) {
        // this.setData//this--undefined
        _this.setData
      },
      file:function(err){

      },
      complete:function(){
        //接口请求结束
      }
      // seccess:(res)=>{//箭头函数中的this是一层一层网上找的
      //   console.log(res,'res')
      // }
    })
    //封装：1.降低网路请求和wx.request的耦合度
        // 2.古老的调用方式---axios通过promise里的then---使用promise进行使用
        // axios.get('',options).then(res=>{}).catch(err=>{})



    //通过疯转的request调用
    // promise最大的好处就是防止出现回调地狱
    request({
      url:'',

    }).then(res=>{

    }).catch(err=>{

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