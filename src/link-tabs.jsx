import React from 'react';
import styled from 'styled-components';

class LinkTabs extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const children = this.props.children;

    var childIndex = 0;
    var childItems = React.Children.map(children, (child) => {

      let tabSize = this.props.tabSize != null
                      ? this.props.tabSize.replace(/[^-\d\.]/g, '')
                      : 60;

      let childHeight = childIndex * tabSize;
      let hoverWidth = this.props.hoverWidth || '80px';
      let pos = `calc( ${this.props.position} + ${childHeight}px )`;

      childIndex++;
      return React.cloneElement(child, {  
                                          position: pos, 
                                          height: this.props.tabSize,
                                          width: this.props.tabSize,
                                          hoverWidth: hoverWidth
                                        });

    });

  return (<div style={{ 
                        position: this.props.fixed ? 'fixed' : 'static',
                        height: '100%',
                        left: this.props.align !== 'right' ? '0px' : 'auto',
                        right: this.props.align === 'right' ? '0px' : 'auto'
                      }}> 
            
            
            
            { childItems }
          </div> );
  }

}

export default LinkTabs;