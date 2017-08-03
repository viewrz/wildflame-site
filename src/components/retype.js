import React from 'react';

export default class Retype extends React.Component {
  constructor(props) {
    super(props);
    this.currentWordIdx = 0;
    this.state = { text: props.words[this.currentWordIdx] };
  }

  componentDidMount() {
    this.changeWordTimerID = window.setInterval(
      this.eraseWord.bind(this),
      this.props.changeWordInterval
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.changeWordTimerID);
    if (this.eraseTimerID !== undefined)
      window.clearInterval(this.eraseTimerID);
    if (this.typeTimerID !== undefined) window.clearInterval(this.typeTimerID);
  }

  eraseWord() {
    if (this.eraseTimerID !== undefined) return;
    this.eraseTimerID = window.setInterval(() => {
      const newText = this.state.text.slice(0, -1);
      this.setState({ text: newText });
      if (newText.length === 0) {
        window.clearInterval(this.eraseTimerID);
        delete this.eraseTimerID;
        this.typeWord();
      }
    }, this.props.changeWordInterval / this.state.text.length / 4);
  }

  typeWord() {
    if (this.typeTimerID !== undefined) return;
    this.currentWordIdx = (this.currentWordIdx + 1) % this.props.words.length;
    this.typeTimerID = window.setInterval(() => {
      const newText = this.props.words[this.currentWordIdx].slice(
        0,
        this.state.text.length + 1
      );
      if (newText === this.state.text) {
        window.clearInterval(this.typeTimerID);
        delete this.typeTimerID;
      } else {
        this.setState({ text: newText });
      }
    }, this.props.changeWordInterval / this.props.words[this.currentWordIdx].length / 4);
  }

  render() {
    return (
      <span style={{ paddingRight: 2, borderRight: 'solid 1px' }}>
        {this.state.text}
      </span>
    );
  }
}

Retype.defaultProps = {
  words: ['word1', 'word2'],
  changeWordInterval: 2000
};
