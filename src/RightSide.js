import React,{Component} from 'react'

export default class RightSide extends Component{

    render(){
    let repoList = <li>Not populated yet</li>
    let repos = this.props.repositories;
    console.log(repos)
    let repoArray = []
    if(repos){
        for (var key in repos) {
            if (repos.hasOwnProperty(key)) {
              console.log(repos[key].name);
              repoArray.push(repos[key]);
            }
          }
          repoList  = repoArray.map((value, index) =>
          <li className="repo-list-item" key={index}>
              <h3 className="repo-name"><a href={value.html_url}>{value.name}</a></h3>
              <p className="repo-description gh-grey-text">{value.description}</p>
          </li>
        );
    }

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
                <div id="filters-bar">
                    <input id="repo-search" className="gh-btn" type="text"/>
                    <select className="gh-btn sku-btn repo-filter" name="" id="">
                        <option value="">Type</option>
                    </select>
                    <select className="gh-btn sku-btn repo-filter" name="" id="">
                        <option value="">Language</option>
                    </select>
                    <button id="new-repo" className="gh-btn">New</button>
                </div>
                <div id="projects-container">
                    <ul>
                        {repoList}
                    </ul>
                </div>
            </div>
        )
    }
}