import React from 'react';
import OpinionsList from './opinions-list';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <div className='container'>
          <div className='title'>All Opinions</div>
          <OpinionsList/>
        </div>
      </div>
    );
  }
}