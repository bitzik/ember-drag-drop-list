import Ember from 'ember';

import Droppable from 'ember-drag-drop/mixins/droppable';
// import DraggableObjectTarget from 'ember-drag-drop/components/draggable-object-target';

// import DraggableObjectTarget from 'ember-drag-drop-list/components/draggable-object-target';

import layout from '../templates/components/dnd-item';

const {computed, Logger, observer, on} = Ember;

export default Ember.Component.extend(Droppable, {
  // {
  layout: layout,
  itemIdx: computed('item', 'list', function () {
    return this.get('list').indexOf(this.get('item'));
  }),
  draggingObject: computed('list.@each.isDraggingObject', function () {
    let draggingObject;
    const list = this.get('list');
    draggingObject = list.findBy('isDraggingObject', true);
    Logger.debug('draggingObject -> ', draggingObject);
    return draggingObject;
  }),
  dragIdx: computed('list', 'draggingObject', function () {
    const list = this.get('list'),
      draggingObject = this.get('draggingObject'),
      dragIdx = list.indexOf(draggingObject);
    Logger.debug('dragIdx -> ', dragIdx);
    return dragIdx;
  }),
  isMovingUp: computed('itemIdx', 'dragIdx', 'isDragOver', function () {
    return this.get('isDragOver') && this.get('dragIdx') !== -1 &&
      this.get('itemIdx') < this.get('dragIdx');
  }),
  isMovingDown: computed('itemIdx', 'dragIdx', 'isDragOver', function () {
    return this.get('isDragOver') && this.get('dragIdx') !== -1 &&
      this.get('itemIdx') > this.get('dragIdx');
  }),

  // list: null,
  // draggingObjectObs: observer('isDraggingObject', function () {
  //   Logger.debug('isDraggingObject? -> ', this.get('isDraggingObject'));
  // }).on('init'),
  handlePayload(payload) {
    const obj = this.get('coordinator').getObject(payload,{target: this});
    Logger.debug('handlePayload obj -> ', obj);
    this.send('rearrangeList',obj,{target: this});
  },
  handleDrop(event) {
    const dataTransfer = event.dataTransfer,
      payload = dataTransfer.getData("Text");
    Logger.debug('handleDrop -> ', payload);
    this.handlePayload(payload);
  },
  acceptDrop(event) {
    Logger.debug('acceptDrop -> ', event);
    this.handleDrop(event);
  },
  onDragEnter: on('dragEnter', function () {
    Logger.debug('dragEnter!');
    this.set('isDragOver', true);
  }),
  // onDragLeave: on('dragLeave', function () {
  //   this.set('isDragOver', false);
  // }),
  noMoreDrag: on('dragStop', 'drop', 'dragLeave', function (event) {
    Logger.debug('noMoreDrag -> ', event);
    this.set('isDragOver', false);
  }),
  // dragOver(event) {
  //   Logger.debug('dragOver -> ', event);
  //   const payload = event.dataTransfer.getData("Text");
  //   Logger.debug('payload ->', payload);
  //   Logger.debug('coordinator -> ', this.get('coordinator'));
  //   const  obj = this.get('coordinator').getObject(payload, {target: this});
  //
  //   const dragIdx = this.get('list').indexOf(obj);
  //   this.set('dragIdx', dragIdx);
  // },
  actions: {
    acceptForDrop() {
      const hashId = this.get('coordinator.clickedId');
      Logger.debug('acceptForDrop -> ', hashId);
      this.handlePayload(hashId);
    },
    rearrangeList(droppedObject, options) {
      const list = this.get('list'),
        targetIdx = this.get('itemIdx'),
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
