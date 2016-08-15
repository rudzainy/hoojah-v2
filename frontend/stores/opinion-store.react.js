import DefaultStore from './default-store.react';
import assign from 'object-assign';

const OpinionStore = assign({}, DefaultStore.prototype, {
  setSelectedOpinionId: function(opinionId) {
    this._selectedOpinion = opinionId;
    this.emitChange();
  },

  getSelectedOpinionId: function(opinionId) {
    return this._selectedOpinion;
  }
});

export default OpinionStore;