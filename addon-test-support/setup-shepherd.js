import disableTourAnimations from 'ember-shepherd/utils/disable-tour-animations';

export default function setupShepherd(hooks = self) {
  hooks.beforeEach(function() {
    if (!this.owner) {
      throw new Error('You must call one of the ember-qunit setupTest(),'
        + ' setupRenderingTest() or setupApplicationTest() methods before'
        + ' calling setupShepherd()');
    }

    disableTourAnimations();
  });
}
