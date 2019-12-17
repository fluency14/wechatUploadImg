//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    imgurl:'',
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  //下载图片
  downloadImage:function(){
    var that=this;
    wx.downloadFile({
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544071088214&di=dc8daa7653780c358f4bf70119933fae&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181027%2Faeb0c54b533a49c695a274f5480112e4.jpeg',
      success(res) {
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
          that.setData({ imgurl: res.tempFilePath});
          // console.log(res.tempFilePath)
        }
      }
    })
  }
})
