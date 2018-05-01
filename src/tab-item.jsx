import React from 'react';
import styled from 'styled-components';
import TabThemes from './tab-themes.js';

const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${props => props.width};
    height: ${props => props.height};
    position: absolute;
    left: inherit;
    right: inherit;
    top: ${props => props.position};

    color: white;
    cursor: pointer;
    background-color: ${props => props.color};

    transition: width .2s;

    &:hover {
        width: ${props => (props.width.replace(/[^-\d\.]/g, '') * 1.30) + 'px'};
        transition: .2s;
    }
`

class TabItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    var theme = this.props.theme;
    if (theme !== undefined){

      const SvgIcon = theme.svg;
      return (<Link href={this.props.href || theme.href} 
                    color={this.props.color || theme.bgColor }
                    position={this.props.position} 
                    height={this.props.height}
                    width={this.props.width}
                    hoverWidth={this.props.hoverWidth}
                    target={this.props.newTab ? "_blank" : ''} > 
                
                <SvgIcon size={ '60%' } color={theme.iconColor} />

              </Link>);

    } else {

      return (<Link href={this.props.href} 
                    position={this.props.position} 
                    color={this.props.color || 0x000000}> 

                { this.props.children }

              </Link>);

    }

  }

}

TabItem.defaultProps = {
  newTab: true
};


export default TabItem;