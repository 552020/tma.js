/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface ArrowDownCircleFill32Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 32
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const ArrowDownCircleFill32: Component<ArrowDownCircleFill32Props> = (props) => {
  const merged = mergeProps({ size: 32 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14m-13.35 6.623a.9.9 0 0 1-1.3 0l-5-5.218a.9.9 0 1 1 1.3-1.245l3.45 3.6V10a.9.9 0 1 1 1.8 0v9.76l3.45-3.6a.9.9 0 1 1 1.3 1.245z" clip-rule="evenodd"/></svg>
  );
}