import React,{Component} from 'react'

export default class RightSide extends Component{
    render(){
        return(
            <div id="right-side">
                <div id="options-bar">Options bar</div>
                <div id="filters-bar">Filter bar</div>
                <div id="projects-container">The projects list</div>
            </div>
        )
    }
}