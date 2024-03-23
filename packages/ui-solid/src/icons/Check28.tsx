/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Check28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Check28: Component<Check28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M24.664 6.21a.99.99 0 0 1 .024 1.399L11.387 21.392a.99.99 0 0 1-1.423 0L3.312 14.5a.99.99 0 1 1 1.423-1.373l5.94 6.153 12.59-13.045a.99.99 0 0 1 1.399-.025" clip-rule="evenodd"/></svg>
  );
}