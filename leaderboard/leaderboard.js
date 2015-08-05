PlayersList = new Mongo.Collection('players');

console.log('Hello World');

if(Meteor.isClient){
  Template.leaderboard.helpers({
      'player': function(){
        return PlayersList.find()
      }, 

      'playerCount': function(){
        return 'Right now there are ' + PlayersList.find().count() + ' players.'
      }

  });
  }
    

