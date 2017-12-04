Template.RecipeCard.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('cardRecipe', id);
    });
});

Template.RecipeCard.helpers({
    recipe: ()=> {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    }
});