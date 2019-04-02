import React from "react"
import { connect } from "react-redux"

import Show from "./show"
import { getSubsActiveIndex } from "../../../store/tabs/index"

const mapStatetoProps = (state) => { 
    // reducers中的一个
    return state.tabs
}


class Document extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            subTabActiveIndex : this.props.subTabActiveIndex
        }
    }
    handleClick(subActiveIndex){
        this.props.getSubsActiveIndex(subActiveIndex)
    }
    componentWillReceiveProps(){
        console.log("willReceive")
    }
    render(){
        var { subTabActiveIndex ,content} = this.props
        return content ? (
            <div>
                <ul>
                    {
                        content.con ? content.con.map((ele,index) => {
                            return (
                                <li className = {"m-sub-tab " + (subTabActiveIndex === index ? "active" : "")} key = {index} onClick = {this.handleClick.bind(this,index)}>{ele}</li>
                            )
                        }) : "没有内容"
                    }
                
                </ul>
                {/* <Show  content = { typeof subTabActiveIndex === "number" ? content.con[subTabActiveIndex] : "Loading..." }></Show> */}
                <p>
                    { typeof subTabActiveIndex === "number" ? content.con[subTabActiveIndex] : "Loading..."}
                </p>
            </div>
        ) : "Loading..."

    }
}

export default connect(mapStatetoProps,{getSubsActiveIndex})(Document)