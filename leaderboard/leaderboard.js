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

  Template.leaderboard.events({
    'click .player': function(){
      var playerID = this._id;
      Session.set('selectedPlayer', playerID);
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
    }

  });
  }
    

