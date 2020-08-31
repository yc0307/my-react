import React from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
//this config is same as idangrous swiper
const config = {
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
        hideOnClick: true,
        clickable: true,
    },
    on: {
        slideChange: function () {
            // console.log(this.activeIndex);
        },
    },
};

class Mytj extends React.Component {
    swiperRef = null
    constructor() {
        super()
        this.state={
            bannerarr:[],
            newmusicarr:[],
            bdarr:[]
        }
    }
    goNext = () => {//use `this.swiperRef.swiper` to get the instance of Swiper
        this.swiperRef.swiper.slideNext();
    }
    componentDidMount(){
        // console.log(this.$api.bannerUrl)
        this.$axios.get(this.$api.bannerUrl)
        .then(res=>{
            // console.log(res.data,"res")
            this.setState({
                bannerarr:res.data.banners
            })
        })

        this.$axios.get(this.$api.newSong)
        .then(res=>{
            console.log(res.data.result,"1111")
            this.setState({
                newmusicarr:res.data.result
            })
        })

        this.$axios.get(this.$api.personalized)
        .then(res=>{
            console.log(res.data.result,"222")
            this.setState({
                bdarr:res.data.result
            })
        })

      
    }
    fn() {
        //    this.props.history.push('/hot')

        // replace不能存储到浏览器历史记录中
        this.props.history.replace('/hot')
        // 返回历史记录中的上一页
        //    this.props.history.go(-1)

    }
    fn1() {
        // this.props.history.push('/login')
        this.props.history.push({ pathname: '/login' })
    }
    render() {
        return (
            <div>
                <div className="banner">
                <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={config} className="your-classname banner">
                    <div className="swiper-wrapper">
                        {/* <div className="swiper-slide">slider1</div>
                        <div className="swiper-slide">slider2</div>
                        <div className="swiper-slide">slider3</div> */}
                        {
                            this.state.bannerarr.map((item,index)=>{
                                return <div className="swiper-slide" key={index}>
                                    <img src={item.imageUrl} />
                                </div>
                            })
                        }
                    </div>
                    {/* <!--左箭头--> */}
                    <div className="swiper-button-prev"></div>
                    {/* <!--右箭头--> */}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </AwesomeSwiper>
                </div>


                <button onClick={this.fn.bind(this)}>跳转到热歌榜</button>
                <button onClick={this.fn1.bind(this)}>跳转到登录</button>
<hr/>
                {
                    this.state.newmusicarr.map(item=>{
                      return   (<li key={item.id}>
                          {item.name}
                          <br/>
                          {
                             item.song.artists.map((v,ind)=>{
                           let sep=item.song.artists.length>1 && ind !=item.song.artists.length-1?<i>/</i>:""
                             return (
                             <span key={v.id}>{v.name}{sep}</span>)
                             })
                          }
                              
                         -{item.name}
                      </li>)
                    })
                }

            </div>
        )
    }
}
export default Mytj;