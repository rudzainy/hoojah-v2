import OpinionStore from '../stores/opinion-store.react';
import { get } from 'axios';

const OpinionActions = {
  index: () => {
    get('http://localhost:3000/opinions').then((resp) => {
      OpinionStore.setCollection(resp.data);
    });
  }
};

export default OpinionActions;