import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp'

Meteor.startup(() => {
  console.log("salut les nazes");
});

WebApp.connectHandlers.use('/api/test', (req, res, next) => {
  // pour vérifier qu'on passe bien par ici
  console.log('endpoint /api/test');
  res.writeHead(200);
  res.end("response from server");
});