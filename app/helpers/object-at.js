import Ember from 'ember';

export function objectAt(params/*, hash*/) {
  console.log(params[1]);
  return params[0][params[1]];
}

export default Ember.Helper.helper(objectAt);
