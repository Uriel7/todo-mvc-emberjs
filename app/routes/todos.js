import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('todo');
  },
  actions: {
    createTodo: function(newTitle) {
      //create a todo
      var todo = this.store.createRecord('todo', {
        title: newTitle,
        isCompleted: false
      });

      //clear the "New Todo" text field
      //this.controllerFor('todos').set('newTitle', '');

      todo.save();
    },

    acceptChanges: function(todo){
      if (Ember.isEmpty(todo.get('title'))) {
        this.send('deleteTodo', todo);
      }else{
        todo.save();
      }
    },

    deleteTodo: function(todo) {
      todo.deleteRecord();
    }
  }
});
