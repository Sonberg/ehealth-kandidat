import Ember from 'ember';

export function timeAgo(params/*, hash*/) {
  moment.locale("sv");
  var date =  moment(params[0]);
  return date.fromNow();
  
}

export default Ember.Helper.helper(timeAgo);
