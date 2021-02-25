import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http'

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.test.onCreated(function testOnCreated() {
  let controller = this;
  let timeout = 5000;

  setTimeout(() => {
    HTTP.call(
      'GET',
      'http://localhost:3000/api/test',
      {},
      (error, response) => { 
        controller.testString.set(response.content);
      }
    );
  }, timeout);
  this.testString = new ReactiveVar('Default value.');
});

Template.test.helpers({
  testString() {
    return Template.instance().testString.get();
  },
});