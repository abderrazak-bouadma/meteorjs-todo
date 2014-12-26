/**
 * Created by merzoug on 10/22/14.
 */
Meteor.methods({
    greetings : function(theName){
        return 'thanks ' + theName + ' you\'re a good boy !';
    }
});