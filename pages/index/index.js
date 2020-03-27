//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dialogContent:[] 
  },
  onLoad: function () {
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },
  handleSubmit(e){
    //打开确认框
    const data = this.data
    const dialogContent = [
      {
        label: '资产项目',
        value:'1000'
      },
      {
        label: '收入/支出',
        value: '1000' 
      },
      {
        label: '交易日期',
        value: '2020-06-05'
      },
      {
        label: '金额',
        value: '2000'
      },
      {
        label: '备注详情',
        value: '哼，陈坤坤'
      }
    ];
    this.setData({
      dialogContent: dialogContent
    })
    // 不定时也行的
    setTimeout(() => {
      // 打开弹窗
      this.dialog.show()
    }, 100)

  },
  // 点击了弹出框的取消
  handleCancelDialog() {
    this.dialog.hide()
  },
  // 点击了弹出框的确认
  handleConfirmDialog() {
    this.dialog.hide()
  }
})
