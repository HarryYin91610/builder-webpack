'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import logo from './assets/user-face.png'
import './search.less';
import { a } from './tree-shaking';

class Search extends React.Component {
  constructor () {
    super(...arguments);

    this.state = {
      Text: null
    };
  }

  loadComponent () {
    // import('./text.js').then((Text) => {
    //   this.setState({
    //     Text: Text.default
    //   });
    // })
  }

  render () {
    const atxt = a()
    const { Text } = this.state;
    return <div className="search-text">
      { Text ? <Text /> : null }
      { atxt } SearchText<img src={ logo } onClick={ this.loadComponent.bind(this) }/>
    </div>;
  }
}

ReactDom.render(
  <Search />,
  document.getElementById('root')
)