import RESTAdapter from './application';

export default RESTAdapter.extend({
  urlForFindAll() {
    return `http://localhost:4567/stockSummaries/`;
  },
  urlForCreateRecord() {
    return `http://localhost:4567/stockSummaries/create/`;
  }
});
