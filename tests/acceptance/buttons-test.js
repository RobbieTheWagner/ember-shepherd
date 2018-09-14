import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

/**
 * This is in a separate file because it randomly fails when not run on its own
 */
module('Acceptance | Buttons tests', function(hooks) {
  let tour;

  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    tour = this.owner.lookup('service:tour');

    tour.set('confirmCancel', false);
    tour.set('modal', false);
  });

  hooks.afterEach(async function() {
    return await tour.cancel();
  });

  test('Tour next, back, and cancel buttons work', async function(assert) {
    assert.expect(3);

    await visit('/');

    await click('.toggleHelpModal');
    await click(document.querySelector('.shepherd-element[style*="display: block"] .next-button'));
    assert.ok(document.querySelector('.shepherd-element[style*="display: block"] .back-button'), 'Ensure that the back button appears');

    await click(document.querySelector('.shepherd-element[style*="display: block"] .back-button'));
    assert.notOk(document.querySelector('.shepherd-element[style*="display: block"] .back-button'), 'Ensure that the back button disappears');

    await click(document.querySelector('.shepherd-element[style*="display: block"] .cancel-button'));
    assert.notOk(document.querySelector('.shepherd-element [class^=shepherd-button]'), 'Ensure that all buttons are gone, after exit');
  });
});
