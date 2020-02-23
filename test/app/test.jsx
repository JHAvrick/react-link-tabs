import React from 'react';
import {render} from 'react-dom';
import styled from 'styled-components';

import { LinkTabs, TabItem, TabThemes } from '../../build/react-link-tabs.js';

const Header = styled.h1`

`;

class App extends React.Component {
  constructor(props){
  	super(props);
    this.state = {}
  }

  render() {
    return (<div className="app">
              <Header> React Link-Tabs </Header>
              

                <LinkTabs tabSize={'60px'} position='20%' fixed={true} align={'left'}>

                  <TabItem theme={TabThemes.github} href={'https://github.com/JHAvrick/react-link-tabs'} /> 
                  <TabItem theme={TabThemes.linkedin} />
                  <TabItem theme={TabThemes.twitter} />
                  <TabItem theme={TabThemes.facebook} />
                  <TabItem theme={TabThemes.tumblr} /> 
                  <TabItem theme={TabThemes.pinterest} /> 

                </LinkTabs>
            </div>)
  }

}

render(<App/>, document.getElementById('app'));