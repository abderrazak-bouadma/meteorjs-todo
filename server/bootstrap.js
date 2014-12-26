Todos = new Mongo.Collection("todos");
Lists = new Mongo.Collection("lists");

Meteor.startup(function () {
    if (Todos.find().count() === 0) {

        Todos.insert({
            text : "Learn Meteor",
            done : false
        });

        Todos.insert({
            text : "Learn Java",
            done : true
        });

        Todos.insert({
            text : "Master Meteor",
            done : true
        });
    }


    if( Lists.find().count() === 0) {
        Lists.insert(
            {
                name : "languages",
                selected : "selected"
            }
        );
        Lists.insert(
            {
                name : "Platforms",
                selected : ""
            }
        );
        Lists.insert(
            {
                name : "Tools",
                selected : ""
            }
        );
    }
});