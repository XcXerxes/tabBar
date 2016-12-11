import React,{Component} from 'react'
import TabBar from './TabBar'
import "../public/css/tabBar.css"
export default class App extends Component{
    constructor(...args){
        super(...args);
        this.state={
            list:[
                {
                    img:"public/img/home.png",
                    selectedImg:"public/img/home_active.png",
                    title:"首页",
                    path:"/"
                },
                {
                    img:"public/img/set.png",
                    selectedImg:"public/img/set_active.png",
                    title:"设置",
                    path:"set"
                },
                {
                    img:"public/img/msg.png",
                    selectedImg:"public/img/msg_active.png",
                    title:"消息",
                    path:"msg"
                }
            ]
        }
    }
    render(){
        return(
            <div className="app">
                <TabBar list={this.state.list} />
                {this.props.children}
            </div>
        )
    }
}