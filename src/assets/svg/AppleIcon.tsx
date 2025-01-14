// SPDX-License-Identifier: ice License 1.0

import {COLORS} from '@constants/colors';
import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';
import {rem} from 'rn-units';

export const AppleIcon = (props: SvgProps) => (
  <Svg
    width={rem(36)}
    height={rem(36)}
    viewBox="0 0 36 36"
    fill="none"
    {...props}>
    <Path
      d="M23.11 6.886A6.935 6.935 0 0 0 24.794 1.8a6.978 6.978 0 0 0-2.619.746 6.86 6.86 0 0 0-2.119 1.686 6.372 6.372 0 0 0-1.303 2.281c-.27.841-.36 1.727-.266 2.604 1.655.142 3.47-.882 4.623-2.23ZM31.5 24.838a17.762 17.762 0 0 1-2.171 4.535c-1.379 1.97-2.828 3.85-4.974 3.904-2.145.055-2.907-1.22-5.37-1.22-2.295 0-3.073 1.166-5.108 1.24-2.116.089-3.705-2.024-5.099-4.003-2.758-3.939-4.858-11.04-2.046-15.726a7.807 7.807 0 0 1 2.816-2.84 7.988 7.988 0 0 1 3.878-1.1c2.085-.064 4.046 1.36 5.269 1.36 1.223 0 3.51-1.714 6.082-1.478a7.626 7.626 0 0 1 3.318.9 7.476 7.476 0 0 1 2.563 2.256c-.14.08-3.555 2.02-3.51 5.85a6.719 6.719 0 0 0 1.189 3.817 6.907 6.907 0 0 0 3.163 2.505Z"
      fill={props.color ?? COLORS.black}
    />
  </Svg>
);
