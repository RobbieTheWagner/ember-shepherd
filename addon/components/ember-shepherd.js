import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.get('steps').forEach(function(step) {
        this.get('tour').addStep(step.name, step.options);
      }.bind(this));
      this.get('tour').start();
    });
  }
});
