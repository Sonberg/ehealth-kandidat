import Ember from 'ember';

export function keyValueInArray(params/*, hash*/) {
  var key = params[0];
  var value = params[1];
  var array = params[2];
console.log(array);

  if (array && key && value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].name == key && array[i].value == value) {
        return true;
      }
    }
  }

  return false;
}

export default Ember.Helper.helper(keyValueInArray);
