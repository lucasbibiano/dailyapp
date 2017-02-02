import React, { Component } from 'react';
import './SeeMore.css'

class SeeMore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  expand() {
    this.setState({ collapsed: false });
  }

  collapse() {
    this.setState({ collapsed: true });
  }

  text() {
    if (this.props.text === "") {
      return (this.props.defaultText ? <i>this.props.defaultText</i> : "")
    };

    if (this.state.collapsed) {
      return this.props.text.substring(0, 50) + "...";
    } else {
      return this.props.text;
    }
  }

  showCollapser() {
    return this.props.text.length > 50;
  }

  displayComponent() {
    return this.props.text !== "" && !this.props.defaultText;
  }

  render() {
    return this.displayComponent() &&
    (
      <div className={this.props.className}>
        {this.text()}

        {this.showCollapser() &&
          <span className="collapser">
            {this.state.collapsed && <a onClick={this.expand.bind(this)}>More</a>}
            {!this.state.collapsed && <a onClick={this.collapse.bind(this)}>Less</a>}
          </span>
        }
      </div>
    );
  }
}

export default SeeMore;