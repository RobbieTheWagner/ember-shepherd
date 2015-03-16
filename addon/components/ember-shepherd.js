import Ember from 'ember';

export default Ember.Component.extend({
  previousStep: function() {
    if (this.get('back')) {
      this.get('tour').back();
      this.set('back', false);
      this.createHighlightOverlay(this.get('tour').getCurrentStep());
    }
  }.observes('back'),
  nextStep: function() {
    if (this.get('next')) {
      this.get('tour').next();
      this.set('next', false);
      this.createHighlightOverlay(this.get('tour').getCurrentStep());
    }
  }.observes('next'),
  createHighlightOverlay: function(step) {
    Ember.$('#highlightOverlay').remove();
    var elementPosition = this.getElementPosition(Ember.$(step.options.attachTo.split(' ')[0])[0]);
    Ember.$('body').append('<div id="highlightOverlay"></div>');
    Ember.$('#highlightOverlay').css('position', 'absolute');
    Ember.$('#highlightOverlay').css('left', elementPosition.left);
    Ember.$('#highlightOverlay').css('top', elementPosition.top);
    Ember.$('#highlightOverlay').css('width', elementPosition.width);
    Ember.$('#highlightOverlay').css('height', elementPosition.height);
  },
  startTour: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      if (this.get('start')) {
        this.get('tour').start();
      }
    });
  }.observes('start'),
  /**
   * Taken from introjs https://github.com/usablica/intro.js/blob/master/intro.js#L1092-1124
   * Get an element position on the page
   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
   *
   * @api private
   * @method _getOffset
   * @param {Object} element
   * @returns {*} Element's position info
   */
  getElementPosition: function(element) {
    var elementPosition = {};

    //set width
    elementPosition.width = element.offsetWidth;

    //set height
    elementPosition.height = element.offsetHeight;

    //calculate element top and left
    var _x = 0;
    var _y = 0;
    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
      _x += element.offsetLeft;
      _y += element.offsetTop;
      element = element.offsetParent;
    }
    //set top
    elementPosition.top = _y;
    //set left
    elementPosition.left = _x;

    return elementPosition;
  }
});
