// components/t-tab-control/t-tab-control.js
Component({
    properties:({
    titles:{
      type:Array,
      // value:[33,44,55]
    }
  }),
  data:{
    //获取当前tab
    currentIndex:0
  },
  methods:{
    handleItemClick(event){
      // event.currentTarget.dataset.index
      //修改当前tab
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      })
      // 外部通知内部的点击事件
      this.triggerEvent('itemClick', { index: event.currentTarget.dataset.index, title:event.currentTarget.dataset.index},{})
    }
  }
})