declare module 'ember-shepherd/services/tour' {
  import Shepherd from 'shepherd.js';
  import Service from '@ember/service';

  export interface TourButton extends Shepherd.Step.StepOptionsButton {
    type: 'next' | 'back' | 'cancel';
  }

  interface RequiredElement {
    selector: string;
    message: string;
    title: string;
  }

  export default interface Tour extends Service {
    classPrefix: string;
    confirmCancel: boolean;
    confirmCancelMessage: string | null;
    defaultStepOptions: Record<string, unknown>;
    errorTitle: string | null;
    exitOnEsc: boolean;
    isActive: boolean;
    keyboardNavigation: boolean;
    messageForUser: string | null;
    modal: boolean;
    modalContainer: HTMLElement;
    requiredElements: RequiredElement[];
    steps: Shepherd.Step[];
    addSteps: (steps: Shepherd.Step.StepOptions[]) => void;
    back: () => void;
    cancel: () => void;
    complete: () => void;
    hide: () => void;
    next: () => void;
    show: (id: string) => void;
    start: () => void;
    _onTourStart: () => void;
    _onTourFinish: (completeOrCancel: string) => void;
    _initialize: () => void;
    _requiredElementsPresent: () => boolean;
  }
}
