import React from "react"
import { connect } from "react-redux"

const mapStatetoProps = (state) => { 
    // reducers中的一个
    return state.tabs
}


class Show extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            haveListData : false,
            content: ""
        }
    }
    render(){
        return(
            <p>
                {this.state.content}
            </p>
        )
    }
}
//生命周期
Object.assign(Show.prototype, {
    componentWillReceiveProps(nextProps) {
        let { haveListData } = this.state
        console.log(nextProps)
        if (nextProps.tabActiveIndex === 0 && nextProps.subTabActiveIndex === 0) {
            if (haveListData) {
            console.log('苹果再次进来时不会请求接口')
            } else {
                console.log('苹果第一次会请求接口')
                this.setState({
                    content: 'Loading...'
                })
                setTimeout(() => {
                    this.setState({
                    content: nextProps.content,
                    haveListData: true
                    })
                }, 1000)
            }
        }
    }
})



export default  connect(mapStatetoProps)(Show)