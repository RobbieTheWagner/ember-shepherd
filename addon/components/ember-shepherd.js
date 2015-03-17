/* globals Shepherd */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  didInsertElement: function() {
    var tour = new Shepherd.Tour({
      defaults: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      }
    });
    var steps = [
      {
        id: 'test',
        options: {
          text: 'Testing step',
          attachTo: '.test-element bottom',
          buttons: [
            {
              text: 'Next',
              action: function() {
                this.set('next', true);
              }.bind(this)
            }
          ],
          showCancelLink: true
        }
      },
      {
        id: 'test2',
        options: {
          text: 'Testing step 2',
          attachTo: '.test-element2 bottom',
          buttons: [
            {
              text: 'Previous',
              action: function() {
                this.set('back', true);
              }.bind(this)
            },
            {
              text: 'Next',
              action: function() {
                this.set('next', true);
              }.bind(this)
            }
          ],
          showCancelLink: true
        }
      }
    ];
    steps.forEach(function(step) {
      var tourStep = tour.addStep(step.id, step.options);
      tourStep.on('show', function(currentStep) {
        if (this.get('useShadowBox')) {
          this.createHighlightOverlay(currentStep.step);
        }
      }.bind(this));
      tourStep.on('complete', function() {
        //debugger
      }.bind(this));

    }.bind(this));
    tour.on('start', function() {
      $('body').append('<div id="shepherdOverlay"> </div>');
    }.bind(this));
    tour.on('complete', function() {
      $('#shepherdOverlay').remove();
      $('#highlightOverlay').remove();
    }.bind(this));
    tour.on('cancel', function() {
      $('#shepherdOverlay').remove();
      $('#highlightOverlay').remove();
    }.bind(this));
    this.set('tour', tour);
  },
  previousStep: function() {
    if (this.get('back')) {
      this.get('tour').back();
      this.set('back', false);
    }
  }.observes('back'),
  nextStep: function() {
    if (this.get('next')) {
      this.get('tour').next();
      this.set('next', false);
    }
  }.observes('next'),
  createHighlightOverlay: function(step) {
    $('#highlightOverlay').remove();
    var currentElement = Ember.$(step.options.attachTo.split(' ')[0])[0];
    var elementPosition = this.getElementPosition(currentElement);
    var highlightElement = $(currentElement).clone();
    highlightElement.attr('id', 'highlightOverlay');
    highlightElement.css('position', 'absolute');
    highlightElement.css('left', elementPosition.left);
    highlightElement.css('top', elementPosition.top);
    highlightElement.css('width', elementPosition.width);
    highlightElement.css('height', elementPosition.height);

    $('body').append(highlightElement);
    /*var computedStyle = window.getComputedStyle(currentElement).cssText;
     $('#highlightOverlay').cssText = computedStyle;

     $('#highlightOverlay').html($(currentElement).html());
     highlightElement.cssText = computedStyle;
     highlightElement.appendTo('#highlightOverlay');*/
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
