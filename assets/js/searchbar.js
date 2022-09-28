"use strict";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const {
      value
    } = e.target;
    this.setState({
      inputValue: value
    });
  }

  render() {
    const {
      inputValue
    } = this.state;
    return /*#__PURE__*/React.createElement("div", {
      className: "input-wrapper"
    }, /*#__PURE__*/React.createElement("input", {
      onChange: this.onInputChange,
      placeholder: " Search by skill tags..",
      value: inputValue,
      id: "search-input",
      spellCheck: false
    }), /*#__PURE__*/React.createElement("span", {
      className: "input-highlight"
    }, inputValue.replace(/ /g, "\u00a0")));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));

