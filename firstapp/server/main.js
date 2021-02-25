import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp'

Meteor.startup(() => {
  console.log("salut les nazes");
});

WebApp.connectHandlers.use('/api/test', (req, res, next) => {
  res.writeHead(200);
  res.end("Nouvelle réponse changée depuis server/main.js");
});