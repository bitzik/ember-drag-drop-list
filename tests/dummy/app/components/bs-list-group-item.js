import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: [
    ':list-group-item',
    'isSuccess:list-group-item-success',
    'isWarning:list-group-item-warning',
    'isInfo:list-group-item-info',
    'isDanger:list-group-item-danger'
  ],

  isSuccess: computed.equal('item.type', 'success'),
  isWarning: computed.equal('item.type', 'warning'),
  isInfo: computed.equal('item.type', 'info'),
  isDanger: computed.equal('item.type', 'danger'),

});
