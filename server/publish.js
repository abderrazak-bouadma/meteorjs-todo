Meteor.publish("todos", function () {
    return Todos.find();
});

Meteor.publish("lists", function () {
    return Lists.find();
});
