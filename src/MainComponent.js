import React,{Component} from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default class MainComponent extends Component{
    constructor(){
        super()
        this.state={
            userDetails: {
                avatar_url: "",
                login: "",
                name: "",
                company: "",
                location: "",
                bio: "",
                email: ""
            }
        }
    }
    getDetails(){
        fetch("https://api.github.com/users/supreetsingh247")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              userDetails: result
            });
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )  
    }

    getRepositories(){
        fetch("https://api.github.com/users/supreetsingh247/repos")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              repositories: result
            });
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )  
    }

    componentDidMount(){
        this.getDetails()
        this.getRepositories()
    }

    render(){
        return(
            <React.Fragment>
                <div className="desktop-container">
                    <LeftSide userDetails={this.state.userDetails} />
                    <RightSide repositories={this.state.repositories} />
                </div>

            </React.Fragment>
        )
    }
}