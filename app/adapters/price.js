import RESTAdapter from './application';

export default RESTAdapter.extend({
  urlForCreateRecord() {
    return `http://localhost:4567/stockSummaries/buy/`;
  },
  urlForQuery(id) {
    return `http://localhost:4567/stockSummaries/prices/${id}/`;
  }
});
