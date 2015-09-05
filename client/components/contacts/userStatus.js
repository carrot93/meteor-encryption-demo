
Template.userStatus.helpers({
  status: function () {
    var self = this;
    //for chat toolbar
    if(!this.status){
      var chat = Chats.findOne({
          _id: FlowRouter.getParam('chatId')
      });
      if(!chat){
          return;
      }
      var partners = _.filter(chat.partners, function(partner) {
          return partner !== Meteor.userId();
      });
      partners = _.map(partners, function (partnerId) {
          var user = Meteor.users.findOne({_id: partnerId});
          if(user){
            self = user;
          }
      });
    }
    
    if(self.status.online){
      return "status-circle-online";
    }else{
      return "status-circle-offline";
    }
  }
});
