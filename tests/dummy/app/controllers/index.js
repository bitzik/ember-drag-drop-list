import Ember from 'ember';

// const {computed, Logger, Object: Obj} = Ember;

export default Ember.Controller.extend({
  messages: [
    { type: "info", message: "this is an info message"},
    { type: "info", message: "this is another info message"},
    { type: "warning", message: "this is an warning message"},
    { type: "error", message: "this is an error message"},
    { type: "danger", message: "this is an danger message"},
    { type: "danger", message: "this is another danger message"},
    { type: "error", message: "this is another error message"},
    { type: "warning", message: "this is another warning message"}
  ]
});
