import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* => create', [
    query(':enter', [style({ opacity: 0, left: '10%', right: 0 })], {
      optional: true,
    }),
    group([
      query(
        ':leave',
        [
          animate(
            '0.2s cubic-bezier(0.5, 0, 0.2, 1)',
            style({ opacity: 0, transform: 'translateX(-10%)' })
          ),
        ],
        {
          optional: true,
        }
      ),
      query(
        ':enter',
        [
          animate(
            '0.2s cubic-bezier(0.5, 0, 0.2, 1)',
            style({ opacity: 1, left: 0 })
          ),
        ],
        {
          optional: true,
        }
      ),
    ]),
  ]),
  transition('create => *', [
    query(':enter', [style({ opacity: 0, transform: 'translateX(-10%)' })], {
      optional: true,
    }),
    group([
      query(
        ':leave',
        [
          animate(
            '0.2s cubic-bezier(0.5, 0, 0.2, 1)',
            style({ opacity: 0, left: '10%', right: 0 })
          ),
        ],
        {
          optional: true,
        }
      ),
      query(
        ':enter',
        [
          animate(
            '0.2s cubic-bezier(0.5, 0, 0.2, 1)',
            style({ opacity: 1, transform: 'translateX(0)' })
          ),
        ],
        {
          optional: true,
        }
      ),
    ]),
  ]),
]);

export const pagesTransition = trigger('pagesTransition', [
  transition('* => void', [
    query(':leave', [
      animate('0.1s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 0 })),
    ]),
  ]),
  transition('home <=> saved, home <=> groceries, saved <=> groceries', [
    query(':enter', [style({ opacity: 0, scale: 0.95 })], { optional: true }),
    query(
      ':leave',
      [
        animate(
          '0.1s cubic-bezier(0, 0, 0.2, 1)',
          style({ opacity: 0, scale: 0.95 })
        ),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':enter',
      [
        animate(
          '0.1s cubic-bezier(0, 0, 0.2, 1)',
          style({ opacity: 1, scale: 1 })
        ),
      ],
      {
        optional: true,
      }
    ),
  ]),
]);
