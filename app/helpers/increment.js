import Ember from 'ember';

export function increment(index) {
  let idx = Number(index);
  return idx + 1;
}

export default Ember.Helper.helper(increment);