import { type StepOptionsButton } from 'shepherd.js';
import type TourService from '../services/tour';
export type EmberShepherdButton = StepOptionsButton & {
    type?: 'back' | 'cancel' | 'next';
};
/**
 * Creates a button of the specified type, with the given classes and text
 *
 * @function makeButton
 * @param {object} [button] Description here
 * @param {string} [button.type] The type of button cancel, back, or next
 * @param {classes} [button.classes] Classes to apply to the button
 * @param {string} [button.text] The text for the button
 * @param {action} [button.action] The action to call
 * @private
 * @return {{action: *, classes: *, text: *}} Description here
 */
export declare function makeButton(this: TourService, button: EmberShepherdButton): EmberShepherdButton;
//# sourceMappingURL=buttons.d.ts.map