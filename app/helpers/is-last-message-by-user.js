import Ember from 'ember';

export function isLastMessageByUser(params/*, hash*/) {
  var messages = params[0],
      message = params[1],
      index = params[2];

      if(index == -1) {
        return false;
      }

      if (messages && message && index) {
        if (index === 0) {
          return false;
        }

        if (messages.content[index-1]._data.user && message.get("user") == messages.content[index-1]._data.user) {
          return true;
        }
      }

      return false;
}

export default Ember.Helper.helper(isLastMessageByUser);
