import React from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import NavMenu from './components/NavMenu/NavMenu';
import MainContent from './components/MainContent/MainContent';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends React.Component {
  state = {
  	sidePanelOpen: false
  };

  sidePanelToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidePanelOpen: !prevState.sidePanelOpen};
    });
  };

  render() {
  	return (
	    <div className="App">
	      <Header />
	      <Sidebar sidePanelToggleClickHandler={this.sidePanelToggleClickHandler} open={this.state.sidePanelOpen} />
        <NavMenu open={this.state.sidePanelOpen} click={this.sidePanelToggleClickHandler} />
        <MainContent />
        <Backdrop sidePanelToggleClickHandler={this.sidePanelToggleClickHandler} open={this.state.sidePanelOpen} />
        <Footer />
	    </div>
	  );
  }
}

export default App;
