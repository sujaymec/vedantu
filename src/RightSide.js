import React,{Component} from 'react'

export default class RightSide extends Component{
    render(){
        return(
            <div id="right-side">
                <div id="options-bar">
                    <ul className="gh-grey-text">
                        <li>Overview</li>
                        <li className="active">Repositories <span className="badge">11</span></li>
                        <li>Stars <span className="badge">5</span></li>
                        <li>Followers <span className="badge">2</span></li>
                        <li>Following <span className="badge">2</span></li>
                    </ul>
                </div>
                <div id="filters-bar"></div>
                <div id="projects-container"></div>
            </div>
        )
    }
}