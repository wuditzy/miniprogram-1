// components/my-prop/my-prop.js
Component({
  properties:({
    // title:String//没有默认值
    title:{
      type:String,
      value:'默认',
      observer:function(newValue,oldValue){//监听值的改变
      }
    }
  }),
  externalClasses: ['title-class']
})