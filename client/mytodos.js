var mockTags = [
    {
        tag_text : "Languages",
        selected : "selected"
    },
    {
        tag_text : "Platforms",
        selected : ""
    },
    {
        tag_text : "Tools",
        selected : ""
    }
];

Template.tag_filter.helpers({
    tags : function () {
        return mockTags;
    }
});

Template.tag_filter.events({
    'click' : function (evt) {
        Meteor.call('greetings','Abderrazak',function(error,result) {
            if (error) {
                console.log('there are some errors : ' + error);
            } else {
                console.log("result : " + result);
            }
        });

    }
});


//
///////////////////////////////// TODOS /////////////////////////////////
Meteor.subscribe("todos");
Todos = new Mongo.Collection("todos");
Template.todos.helpers({
    todos : function () {
        return Todos.find();
    }
});


//
///////////////////////////////// LISTS /////////////////////////////////
Meteor.subscribe("lists");
Lists = new Mongo.Collection("lists");
Template.lists.helpers({
    lists : function () {
        return Lists.find();
    }
});