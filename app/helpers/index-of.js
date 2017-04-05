import Ember from 'ember';

export function indexOf(params/*, hash*/) {
  var value = params[0];
  var array = params[1];
  
  return array.indexOf(value);
}

export default Ember.Helper.helper(indexOf);
