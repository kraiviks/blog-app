import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettingsByKey } from '@/entities/User';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useWindowSize } from '@/shared/lib/hooks/useWindowSize';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/redesigned/Text';

export const ArticleGreeting: FC = memo(() => {
  const { t } = useTranslation('articles');
  const articlePageHasBeenOpen = useJsonSettingsByKey('articlePageHasBeenOpen');
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!articlePageHasBeenOpen) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ articlePageHasBeenOpen: true }));
    }
  }, [articlePageHasBeenOpen, dispatch]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

  const text = (
    <ToggleFeature
      name='isAppRedesigned'
      off={<TextDeprecated title={t('Welcome to article page')} text={t('articleGreetingMessage')} />}
      on={<Text title={t('Welcome to article page')} text={t('articleGreetingMessage')} />}
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});
