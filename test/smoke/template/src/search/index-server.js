'use strict';

const React = require('react');
const logo = require('./assets/user-face.png');
require('./search.less');
const { a } = require('./tree-shaking');

class Search extends React.Component {
  constructor () {
    super(...arguments);

    this.state = {
      Text: null
    };
  }

  loadComponent () {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default
      });
    })
  }

  render () {
    const atxt = a()
    const { Text } = this.state;
    return <div className="search-text">
      { Text ? <Text /> : null }
      { atxt } SearchTexteee<img src={ logo } onClick={ this.loadComponent.bind(this) }/>
    </div>;
  }
}

module.exports = <Search />;