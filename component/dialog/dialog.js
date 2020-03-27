// component/dialog/dialog.js
// component/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      // 初始值
      value: '请确认提交信息'
    },
    content: {
      type: Array
    },
    confirmText: {
      type: String,
      value: '确定'
    },
    cancelText: {
      type: String,
      value: '取消'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showDialog: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      console.log('我来自组件');
      this.setData({
        showDialog: true
      })
    },
    hide() {
      this.setData({
        showDialog: false
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _cancel() {
      //触发取消回调
      this.triggerEvent("cancel")
    },
    _comfirm() {
      //触发成功回调
      this.triggerEvent("confirm");
    }
  }
})
