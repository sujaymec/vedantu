import React,{Component} from 'react'

export default class LeftSide extends Component{
    render(){
        return(
            <div id="left-side">
                <img src={this.props.userDetails.avatar_url} alt="" />
                <h2 id="user-name">{this.props.userDetails.name}</h2>
                <h3 id="user-id">{this.props.userDetails.login}</h3>
                <p id="user-bio">{this.props.userDetails.bio}</p>
                <button id="edit-bio">Edit Bio</button>
                <hr/>
                <p className="contains-icon people">{this.props.userDetails.login}</p>
                <p className="contains-icon map">{this.props.userDetails.login}</p>
                <p className="contains-icon mail">{this.props.userDetails.login}</p>
            </div>
        )
    }
}