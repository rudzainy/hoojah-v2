import React from 'react';
import _ from 'lodash';
import OpinionActions from '../actions/opinion-actions.react';
import OpinionStore from '../stores/opinion-store.react';

export default class OpinionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    };

    this.onChange = this.onChange.bind(this);

    OpinionActions.index();
  }

  componentDidMount() {
    OpinionStore.addChangeListener(this.onChange);
  }

  componentWillUnount() {
    OpinionStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({ collection: OpinionStore.getCollection() });
  }

  render() {
    return (
      <div className='opinionBoard'>
        <div className='opinionList'>
          { this.state.collection.map((data) => (
            <Opinion id={data.id}
                   text={data.text}
                  side1={data.side1}
                  side2={data.side2}
            ></Opinion>
          ))}
        </div>
      </div>
    )
  }
}