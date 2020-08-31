// 存放所有的接口地址
export default {
     baseUrl: 'http://localhost:4000',    //接口网址
     bannerUrl: '/banner',
     //轮播图
     //推荐歌单  /personalized?limit=6
     personalized: "/personalized?limit=6",
     //歌单详情  /playlist/detail?id=24381616
     songList: "/playlist/detail",
     //推荐新音乐  /personalized/newsong
     newSong: "/personalized/newsong",
     //热歌榜  /top/list?idx=1
     toplist: "/top/list?idx=1",
     //热门搜索
     searchhot: "/search/hot",
     //搜索  /search?keywords= 海阔天空
     search: "/search"

}