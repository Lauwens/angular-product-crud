import {
  trigger,
  sequence,
  animate,
  transition,
  style,
  state,
} from '@angular/animations';

export const tableRowAnimation = trigger('tableRowAnimation', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translateX(-550px)',
      'box-shadow': 'none',
    })
  ),
  transition('* => void', [animate('.5s ease')]),
]);
