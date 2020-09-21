import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import NavMenu from './components/NavMenu/NavMenu';
import MainContent from './components/MainContent/MainContent';
import Backdrop from './components/Backdrop/Backdrop';
import {projectObjs} from './resources/projectObjs';

import './App.css';

/***************************************************************************************************
The state tracks whether the navigation menu is open (initially set to closed),
  which projects are displayed in the Projects component,
  and the contents of the search bar in the Projects component (used to filter projects)
***************************************************************************************************/
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidePanelOpen: false,
      projectObjs: projectObjs,
      searchfield: ''
    };
  }

/***************************************************************************************************
sidePanelToggleClickHandler sets the state of sidePanelOpen property.
  This function is passed to the Sidebar, NavMenu, and Backdrop components
***************************************************************************************************/
  sidePanelToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidePanelOpen: !prevState.sidePanelOpen};
    });
  }

/***************************************************************************************************
onSearchChange sets the state of the searchfield (from the SearchBox component)
***************************************************************************************************/
  onSearchChange = event => {
   this.setState({searchfield: event.target.value});
  }

  render() {
/***************************************************************************************************
filteredProjects uses a filter method in order to display only the projects that match
  the user's input in the SearchBox component
***************************************************************************************************/
    const filteredProjects = this.state.projectObjs.filter(projects => {
      return (
        projects.title.toLowerCase().includes(this.state.searchfield.toLowerCase()) // filter by project title
        ||
        projects.tags.join("").toLowerCase().includes(this.state.searchfield.toLowerCase()) // filter by project tags
      );
    });

  	return (
	    <div className="App">
	      <Sidebar sidePanelToggleClickHandler={this.sidePanelToggleClickHandler} open={this.state.sidePanelOpen} />
        <NavMenu open={this.state.sidePanelOpen} click={this.sidePanelToggleClickHandler} />
        <MainContent searchChange={this.onSearchChange} projectObjs={filteredProjects} />
        <Backdrop sidePanelToggleClickHandler={this.sidePanelToggleClickHandler} open={this.state.sidePanelOpen} />
	    </div>
	  );
  }
}

export default App;
