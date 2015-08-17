Meteor.publish('messages', function (partnerId) {
    if (!partnerId) {
        return Messages.find({
            $or: [{
                author: this.userId
            }, {
                chatPartner: this.userId
            }]
        });
    }
    return [
        Messages.find({
            chatPartner: {
                $in: [
                    partnerId, this.userId
                ]
            },
            author: {
                $in: [
                    partnerId, this.userId
                ]
            }
        }),
        Meteor.users.find({
            _id: {
                $in: [
                    partnerId, this.userId
                ]
            }
        })
    ];
});
