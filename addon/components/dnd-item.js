import Ember from 'ember';
import layout from '../templates/components/dnd-item';

const {Logger} = Ember;

export default Ember.Component.extend({
  layout: layout,
  // list: null,
  actions: {
    rearrangeList(droppedObject, options) {
      const list = this.get('list'),
        targetIdx = list.indexOf(options.target.item),
        originIdx = list.indexOf(droppedObject);
      Logger.debug('list -> ', list.length);
      Logger.debug('from -> ', originIdx, ' to ', targetIdx);
      Logger.debug('index? ', options.target.index);
      if(targetIdx < originIdx) {
        //moving up
        list.removeObject(droppedObject);
        list.insertAt(targetIdx, droppedObject);
      } else if (targetIdx > originIdx){
        //moving down
        list.removeObject(droppedObject);
        list.insertAt(targetIdx, droppedObject);
      } //else do nothing
    }
  }
});

/*
0 - A                           0 - A  -> move it up                                .
1 - B                           1 - B                                 .
2 - C->take C show placeholder  2 - _                                                         .
3 - D                           3 - D                              .
4 - E                           4 - E                               .

*/
