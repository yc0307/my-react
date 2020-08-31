import React from 'react'
import './hot.css'
import Img1 from '../../assets/img/list_sprite.png'



class Hot extends React.Component {
    constructor() {
        super()
        this.state = {
            updateTime:"",   //热歌榜日期  updateTime
            coverImg:"",    //最上面的图片
            name:'',
            songs:[]
        }
        
    }
    componentDidMount(){
       let url=this.props.match.params.id?this.$api.songList+'?id='+this.props.match.params.id:this.$api.toplist;
        this.$axios.get(url)
        .then(res=>{
            console.log(res.data)
            let date=new Date(res.data.playlist.updateTime);
            let month=date.getMonth()+1>9?date.getMonth()+1:'0'+date.getMonth()+1
            let day=date.getDate()>9?date.getDate():'0'+date.getDate();
            this.setState({
                coverImg:res.data.playlist.coverImgUrl,
                name:res.data.playlist.name,
                songs:res.data.playlist.tracks,
                updateTime:`${month}月${day}日`

            })
        })
    }
    
    
    render() {
        let picitem;
        let backbtn;
        if(this.props.match.params.id){
            picitem=(
              <div className="banner">
                  <img src={this.state.coverImg} />
              </div>
            )
        }else{
            backbtn=(<div>
                45656
            </div>)
        }
        return (
            <div>
               <div className="mask" style={{background:'url('+this.state.coverImg+')'}}>
                   {picitem}
                   {/* <img src="../../assets/img/list_sprite.png"/> */}
                   <img src={require('../../assets/img/list_sprite.png')}/>
               </div>
               <img src={Img1}/>
               {backbtn}
            </div>
        )
    }
   
}
export default Hot;