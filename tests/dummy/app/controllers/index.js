import Ember from 'ember';

const {computed, on, Object: Obj} = Ember;

export default Ember.Controller.extend({
  MessageObject: Obj.extend({ type: null, message: null}),
  messages: [
    // { type: "info", message: "this is an info message"},
    // { type: "info", message: "this is another info message"},
    // { type: "warning", message: "this is an warning message"},
    // { type: "error", message: "this is an error message"},
    // { type: "danger", message: "this is an danger message"}
  ],

  initMessaged: on('init', function () {
    this.messages.pushObject(this.MessageObject.create({ type: "info", message: "this is an info message"}));
    this.messages.pushObject(this.MessageObject.create({ type: "info", message: "this is another info message"}));
    this.messages.pushObject(this.MessageObject.create({ type: "warning", message: "this is an warning message"}));
    this.messages.pushObject(this.MessageObject.create({ type: "danger", message: "this is an danger message"}));
    this.messages.pushObject(this.MessageObject.create({ type: "error", message: "this is an error message"}));
    this.messages.pushObject(this.MessageObject.create({ type: "danger", message: "this is another danger message"}));
    this.messages.pushObject(this.MessageObject.create({ type: "error", message: "this is another error message"}));
    this.messages.pushObject(this.MessageObject.create({ type: "warning", message: "this is another warning message"}));
  })
});
