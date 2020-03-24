// components/my-mslot/my-mslot.js
Component({
  //让使用者可以给组件传入数据
  properties:{

  },

  //定义组件内部的初始化数据
  data:{

  },

  //组件的配置选项
  // multipleSlots在使用多插槽时，设置true
  options:{
    multipleSlots:true
  },
  //定义组件内部函数
  methods:{

  },

  //外界给组件传入额外的样式
  externalClasses:[],

  //可以监听属性的改变
  observers:{
    counter:function(newValue){

    }
  },


  //组件中监听生命周期函数   1.监听所在页面的生命周期。
  PageLifeTimes:{
    show(){
      //监听组件所在页面显示出来的
    },
    hide(){
      //监听组件所在页面隐藏起来时
    },
    resize(){
      //监听页面尺寸的改变
    }
  },
  //组件中监听生命周期函数 2.也可以监听页面的生命周期
  lifetimes:{
    created(){
      //组件被创建出来时
    },
    attached(){
      //组件被添加到页面
    },
    ready(){
      //组件被渲染出来
    },
    moved(){
      //组件被移动到另一个节点时
    },
    detached(){
      //组件被移除时
    }
  }
})