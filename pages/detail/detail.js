Page({
    /**
     * 页面的初始数据
     */
    data: {
        //视频详情信息
        videoDetail: null,
        //其他推荐视频
        otherList: [],
        //评论列表
        commentsList: {}
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //options是从其他页面跳转过来是传递进来的参数

        //获取视频详细信息
        this.getVideoDetail(options.id)
            //获取其他推荐视频
        this.getOtherList(options.id)
            //获取评论列表
        this.getCommentsList(options.id)
    },
    //获取视频详情信息
    getVideoDetail(videoId) {
        var that = this
        wx.request({
            url: `https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id=${videoId}`,
            success(res) {
                if (res.data.code === 0) {
                    that.setData({
                        videoDetail: res.data.data.videoInfo
                    })
                }
            }
        })
    },
    //获取其他推荐视频
    getOtherList(videoId) {
        let that = this
        wx.request({
            url: `https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=&{videoId}`,
            success(res) {
                if (res.data.code === 0) {
                    that.setData({
                        otherList: res.data.data.othersList
                    })
                }
            }
        })
    },
    //获取评论列表
    getCommentsList(videoId) {
        let that = this
        wx.request({
            url: `https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=${videoId}`,
            success(res) {
                if (res.data.code === 0) {
                    that.setData({
                        commentsList: res.data.data.commentData
                    })
                }
            }
        })
    }
})