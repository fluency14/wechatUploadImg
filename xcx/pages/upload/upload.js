//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    imgurl:'',
    uploadBaseurl:'http://localhost:3000/'
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  //上传图片
  uploadFile:function(){
    var that=this;
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://localhost:3000/upload', 
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            //do something
            // console.log(res)
            that.setData({ imgurl: that.data.uploadBaseurl+res.data})
          }
        })
      }
    })
  }
})
