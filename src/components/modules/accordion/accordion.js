/**
 * @file Functionality of the accordion module.
 */

const Accordion = {

  /**
   * Attach click events to accordion header for
   */
  init: () => {
    'use strict';

    const accordionToggles = document.querySelectorAll('.js-accordion .js-toggle');

    for (const accordionToggle of accordionToggles) {
      accordionToggle.addEventListener('click', e => {
        const toggle = e.target;

        toggle.ariaExpanded = !JSON.parse(toggle.ariaExpanded);
        toggle.closest('.js-accordion-item').classList.toggle('is-expanded');
      });
    }
  }
};

Accordion.init();
