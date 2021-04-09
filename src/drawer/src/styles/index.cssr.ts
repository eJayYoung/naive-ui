import { c, cB, cM, cNotM } from '../../../_utils/cssr'
import slideInFromRightTransition from '../../../_styles/transitions/slide-in-from-right'
import slideInFromLeftTransition from '../../../_styles/transitions/slide-in-from-left'
import slideInFromTopTransition from '../../../_styles/transitions/slide-in-from-top'
import slideInFromBottomTransition from '../../../_styles/transitions/slide-in-from-bottom'
import fadeInTransition from '../../../_styles/transitions/fade-in.cssr'

// vars:
// --line-height
// --color
// --text-color
// --box-shadow
// --bezier
// --bezier-out
// --bezier-in
// --padding
export default c([
  cB('drawer', `
    line-height: var(--line-height);
    overflow: auto;
    position: absolute;
    pointer-events: all;
    box-shadow: var(--box-shadow);
    transition:
      background-color .3s var(--bezier),
      color .3s var(--bezier);
    background-color: var(--color);
    color: var(--text-color);
  `,
  [
    slideInFromRightTransition(),
    slideInFromLeftTransition(),
    slideInFromTopTransition(),
    slideInFromBottomTransition(),
    cM('native-scrollbar', {
      boxSizing: 'border-box',
      padding: 'var(--padding)'
    }),
    cNotM('native-scrollbar', [
      cB('drawer-scroll-content', {
        boxSizing: 'border-box',
        padding: 'var(--padding)'
      })
    ]),
    cM('right-placement', `
      top: 0;
      bottom: 0;
      right: 0;
    `),
    cM('left-placement', `
      top: 0;
      bottom: 0;
      left: 0;
    `),
    cM('top-placement', `
      top: 0;
      left: 0;
      right: 0;
    `),
    cM('bottom-placement', `
      left: 0;
      bottom: 0;
      right: 0;
    `)
  ]),
  c('body', [
    c('>', [
      cB('drawer-container', {
        position: 'fixed'
      })
    ])
  ]),
  cB('drawer-container', `
    position: relative;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
  `, [
    c('> *', {
      pointerEvents: 'all'
    })
  ]),
  cB('drawer-mask', `
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  `, [
    fadeInTransition({
      enterDuration: '0.2s',
      leaveDuration: '0.2s',
      enterCubicBezier: 'var(--bezier-in)',
      leaveCubicBezier: 'var(--bezier-out)'
    })
  ])
])
