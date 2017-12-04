Meteor.publish('recipes', function(){
    return Recipes.find({
        author: this.userId
    });
});

Meteor.publish('cardRecipe', function(id){
    check(id, String);
    return Recipes.find({_id: id});
    });