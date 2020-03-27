// component/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  behavior:[],
  properties: {
    myProperty:{ //属性名
      type:String,
      value:''    
    },
    myProperty2:String //简化的定义方式
  },

  /**
   * 组件的初始数据
   *  ssh-keygen -t rsa -C "819508408@qq.com"
   * git@github.com:zhuxiaofang1234/wechatTest.git
   */
  data: { 
    //私有数据，可用于模板渲染

  },
  lifetimes: {   //生命周期函数，可以为函数，或在一个methods段中定义的方法名
    created:function(){
      //在组件实例刚刚被创建时执行
    },
    attached:function(){
      //在组件实例进入页面节点树时执行
    },
    ready:function(){
      //在组件在视图层布局完成后执行
    },
    moved:function(){
      //在组件实例被移动到节点树另一个位置时执行
    },
    detached:function(){
      //在组件实例被从页面节点树移除时执行
    },
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      //组件所在的页面被展示时执行
     },
    hide: function () {
      //组件所在的页面被隐藏时执行
     },
    resize: function () {
      //组件所在的页面尺寸变化时执行
     },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    //内部方法建议以下划线开头
    _myPrivateMethod:function(){
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange: function (newVal, oldVal) {

    }

  }
})
