import React from 'react';
import {render} from 'react-dom';
import styled from 'styled-components';

import { LinkTabs, TabItem, TabThemes } from '../../build/react-link-tabs.js';

class App extends React.Component {
  constructor(props){
  	super(props);
    this.state = {}
  }

  render() {
    return (<div className="app">
                <LinkTabs tabSize={'60px'} position='20%' fixed={false} align={'left'}>

                  <TabItem theme={TabThemes.github} /> 
                  <TabItem theme={TabThemes.linkedin} /> 
                  <TabItem theme={TabThemes.tumblr} /> 
                  <TabItem theme={TabThemes.pinterest} /> 

                </LinkTabs>
            </div>)
  }

}

render(<App/>, document.getElementById('app'));