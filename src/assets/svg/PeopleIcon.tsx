// SPDX-License-Identifier: ice License 1.0

import {COLORS} from '@constants/colors';
import * as React from 'react';
import Svg, {Mask, Path, SvgProps} from 'react-native-svg';
import {rem} from 'rn-units';

export const PeopleIcon = ({
  color = COLORS.periwinkleGray,
  ...props
}: SvgProps) => (
  <Svg
    width={rem(13)}
    height={rem(13)}
    fill="none"
    viewBox="0 0 13 13"
    {...props}>
    <Path
      d="M7.556 3.25a2.275 2.275 0 1 1-4.55 0 2.275 2.275 0 0 1 4.55 0Z"
      stroke={color}
      strokeWidth={1.137}
    />
    <Mask id="a" fill="#fff">
      <Path d="M8.125 5.689c0 .223.182.408.404.376a2.844 2.844 0 0 0 0-5.63c-.222-.032-.404.153-.404.376 0 .224.183.402.403.446a2.033 2.033 0 0 1 0 3.986c-.22.044-.403.222-.403.446Z" />
    </Mask>
    <Path
      d="m10.136 5.26 1.149 1.15-1.15-1.15Zm.022-2.01h1.625-1.625Zm-.595 1.438 1.149 1.149-1.15-1.15Zm-1.035.555.321 1.593-.321-1.593Zm0 .822.232 1.608-.231-1.608Zm-.23-1.609c.26-.037.501-.157.689-.344l2.298 2.298A4.47 4.47 0 0 1 8.76 7.673l-.462-3.217Zm.689-.344c.228-.229.357-.539.357-.862h3.25c0 1.185-.471 2.322-1.31 3.16L8.988 4.112Zm.357-.862c0-.323-.129-.633-.357-.862L11.285.09a4.469 4.469 0 0 1 1.309 3.16h-3.25Zm-.357-.862a1.219 1.219 0 0 0-.689-.344l.462-3.217A4.47 4.47 0 0 1 11.285.09L8.987 2.388ZM8.849-.336c.7.142 1.35.486 1.863 1L8.414 2.96a.408.408 0 0 0-.208-.111l.643-3.186Zm1.863 1a3.658 3.658 0 0 1 1.071 2.586h-3.25a.408.408 0 0 0-.12-.289L10.713.663Zm1.071 2.586c0 .97-.385 1.9-1.071 2.587L8.414 3.539a.408.408 0 0 0 .12-.289h3.25Zm-1.071 2.587a3.658 3.658 0 0 1-1.863.999L8.206 3.65a.408.408 0 0 0 .208-.111l2.298 2.298Zm-1.863.999c.342-.07.901-.413.901-1.147H6.5c0-1.183.925-1.881 1.706-2.039l.643 3.186ZM8.3 2.044C9.212 2.174 9.75 1.41 9.75.81H6.5c0-1.047.902-2.18 2.26-1.984l-.462 3.217ZM9.75.81a1.15 1.15 0 0 0-.9-1.147L8.205 2.85C7.426 2.692 6.5 1.994 6.5.81h3.25Zm-.99 6.862C7.402 7.868 6.5 6.736 6.5 5.69h3.25c0-.6-.537-1.364-1.452-1.233l.462 3.217Z"
      fill={color}
      mask="url(#a)"
    />
    <Path
      d="M1.625 11.781V9.75c0-.813.813-2.031 2.438-2.031H6.5c1.625 0 2.438 1.218 2.438 2.031v2.031M9.75 7.719c1.625 0 2.438 1.218 2.438 2.031v2.031"
      stroke={color}
      strokeWidth={1.137}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
