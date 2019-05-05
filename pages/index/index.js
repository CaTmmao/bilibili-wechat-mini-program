Page({
    /**
     * 页面的初始数据
     */
    data: {
        //首页导航数据
        navList: [],
        //首页导航菜单当前active索引
        currentIndex: 0,
        //轮播图数据
        swiperList: [],
        //视频列表
        videosList: [],
        //下划线css属性
        lineLeft: 0,
        //下划线css属性
        lineWidth: 0
    },
    //获取首页导航数据
    getNavList() {
        let that = this
        wx.request({
            url: "https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList",
            success(res) {
                if (res.data.code === 0) {
                    that.setData({
                        navList: res.data.data.navList
                    })
                }
                //导航数据获取完毕后给【首页】选项初始化一个下划线
                that.activeUnderline('0')
            }
        })
    },
    //给当前active的导航选项添加下划线(参数是当前active选项的索引，从0开始)
    activeUnderline(index) {
        let that = this
            //获取当前导航选项的位置信息
        wx.createSelectorQuery().select(`#nav${index}`).boundingClientRect((res) => {
            that.setData({
                lineWidth: parseInt(res.width),
                lineLeft: parseInt(res.left)
            })
        }).exec()
    },
    //导航菜单点击事件
    tapTab(e) {
        //给active的菜单选项设置下划线
        this.activeUnderline(e.target.dataset.index)

        this.setData({
            //dataset里的index是wxml中自己添加的data-index的index属性
            currentIndex: e.target.dataset.index
        })
    },
    //页面滑动事件
    swiperTab(e) {
        //给active的菜单选项设置下划线
        this.activeUnderline(e.detail.current)

        this.setData({
            currentIndex: e.detail.current
        });
    },
    //获取首页轮播图数据
    getSwiperList() {
        let that = this
        wx.request({
            url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
            success(res) {
                if (res.data.code === 0) {
                    that.setData({
                        swiperList: res.data.data.swiperList
                    })
                }
            }
        })
    },
    //获取视频列表
    getVideosList() {
        let that = this
        wx.request({
            url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
            success(res) {
                if (res.data.code === 0) {
                    that.setData({
                        videosList: res.data.data.videosList
                    })
                }
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //获取导航栏数据
        this.getNavList()
            //获取首页轮播图数据
        this.getSwiperList()
            //获取视频列表
        this.getVideosList()
    }
})