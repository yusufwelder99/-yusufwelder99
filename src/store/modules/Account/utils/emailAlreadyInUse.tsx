// SPDX-License-Identifier: ice License 1.0

import {Images} from '@images';
import {navigate} from '@navigation/utils';
import {t} from '@translations/i18n';

export const emailAlreadyInUse = () => {
  let resultResolve: () => void;
  const resultPromise = new Promise<void>(r => (resultResolve = r));

  navigate({
    name: 'PopUp',
    params: {
      imageProps: {source: Images.popUp.registrationUpdate},
      title: t('pop_up.email_in_use_title'),
      message: `${t('pop_up.email_in_use_text_part1')}\n\n${t(
        'pop_up.email_in_use_text_part2',
      )}`,
      buttons: [
        {
          text: t('button.continue'),
        },
      ],
      onDismiss: () => resultResolve(),
    },
  });

  return resultPromise;
};
