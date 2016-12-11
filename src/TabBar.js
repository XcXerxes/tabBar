import React,{Component} from 'react'
import {Link} from 'react-router'

export default class TabBar extends Component{
    constructor(...args){
        super(...args);
        this.state={
            activeIndex:0
        }
    }
    pathChange(idx){
        if(this.state.activeIndex===idx)return;
        this.setState({
            activeIndex:idx
        })
    }
    render(){
        const {list}=this.props;
        const {activeIndex}=this.state;
        return(
            <div className="xc-tabBar">
                {list.map((item,index)=>{
                    return(
                        <Link className="xc-tabBar__item" to={item.path} key={index} onClick={()=>this.pathChange(index)}>
                            <img className="xc-item__img" src={activeIndex===index?item.selectedImg:item.img}/>
                            <span className="xc-item__title" style={{color:activeIndex===index?"#9c3ad3":"#000"}}>{item.title}</span>
                        </Link>
                    )
                })}
            </div>
        )
    }
}