import React from 'react';
import classNames from 'classnames';
import OpinionStore from '../stores/opinion-store.react';

export default class Opinion extends React.Component {
  static get propTypes() {
    return {
         id: React.PropTypes.string.isRequired,
       text: React.PropTypes.string.isRequired,
      side1: React.PropTypes.string.isRequired,
      side2: React.PropTypes.string.isRequired
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
              id: this.props.id,
            text: this.props.text,
           side1: this.props.side1,
           side2: this.props.side2
    };

    this.onChange = this.onChange.bind(this);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  onChange() {
    this.setState({
      isSelected: this.state.id === OpinionStore.getSelectedOpinionId()
    });
  }

  componentDidMount() {
      OpinionStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
      OpinionStore.removeChangeListener(this.onChange);
  }

  handleClickEvent(e) {
    OpinionStore.setSelectedOpinionId(this.state.id);
  }

  render() {
    let classes = {
      user: true,
      selected: this.state.isSelected
    };

    return (
      <li id={this.state.id} className={classNames(classes)}>
        {this.state.text}
      </li>
    )
  }
}