import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const createPageTransition = trigger('createPageTransition', [
  transition('0 => void', [
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate(
      '0.2s cubic-bezier(0.5, 0, 0.2, 1)',
      style({ opacity: 0, transform: 'translateX(-10%)' })
    ),
  ]),
  transition('void => 0', [
    style({ opacity: 0, transform: 'translateX(-10%)' }),
    animate(
      '0.2s cubic-bezier(0.5, 0, 0.2, 1)',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition('void => 1', [
    style({ opacity: 0, transform: 'translateX(10%)' }),
    animate(
      '0.2s cubic-bezier(0.5, 0, 0.2, 1)',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition('1 => void', [
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate(
      '0.2s cubic-bezier(0.5, 0, 0.2, 1)',
      style({ opacity: 0, transform: 'translateX(10%)' })
    ),
  ]),
]);
