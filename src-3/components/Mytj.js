import React from 'react'
import AwesomeSwiper from 'react-awesome-swiper';

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
class Mytj extends React.Component{
    swiperRef = null
    constructor() {
        super()
        this.state={
            bannerarr:[]
        }
    }
    goNext = () => {//use `this.swiperRef.swiper` to get the instance of Swiper
        this.swiperRef.swiper.slideNext();
    }
    componentDidMount(){
        this.$axios.get(this.$api.bannerUrl)
        .then(res=>{
            console.log(res.data.list,"res")
            this.setState({
                bannerarr:res.data.list
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
    render(){
        return(
            <div>
               <div className="banner">
                <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={config} className="your-classname banner">
                    <div className="swiper-wrapper">
                        {/* <div className="swiper-slide">slider1</div>
                        <div className="swiper-slide">slider2</div>
                        <div className="swiper-slide">slider3</div> */}
                        {
                            this.state.bannerarr.map(item=>{
                                return <div className="swiper-slide" key={item.id}>
                                    <img src={this.$api.baseUrl+item.img} />
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
            </div>
        )
    }
}
export default Mytj