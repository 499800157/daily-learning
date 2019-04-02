import React from "react"
import { connect } from "react-redux"
import "./index.css"

import { getTabsActiveIndex, getSubsActiveIndex} from "../../store/tabs/index"
import Subs from "./Subs/index"

// 数据
import { tabs } from "./data"

const mapStatetoProps = (state) => { 
    // reducers中的一个
    return state.tabs
}


class Tabs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    handleClick(tabActiveIndex) {
        this.props.getTabsActiveIndex(tabActiveIndex)
        this.props.getSubsActiveIndex(0)
    }
    handleAuto(){
        this.props.getTabsActiveIndex(Math.floor(Math.random()*1.9))
        this.props.getSubsActiveIndex(Math.floor(Math.random()*2.9))
    }
    render(){
        let { tabActiveIndex } = this.props
        const { tabName , tabContent} = tabs
        return (
            <div>
                <button onClick = {this.handleAuto.bind(this)}>自动切换</button>
                <ul>
                    {
                        tabName ? tabName.map( (ele,index) => {
                            return (
                                <li className = {"m-tab " + (tabActiveIndex === index ? "active" : "")} key = { index } onClick = {this.handleClick.bind(this,index)}>{ele.name}</li>
                            )
                        }) : "暂无内容"
                    }
                </ul>
                <ul>
                    {
                        typeof tabActiveIndex === "number" ?  (
                            <li><Subs content = {tabContent[tabActiveIndex]}></Subs></li>
                        )  : "暂无内容" 
                    }
                </ul>
            </div>
        )
    }
}


export default connect(mapStatetoProps,{getTabsActiveIndex,getSubsActiveIndex})(Tabs)