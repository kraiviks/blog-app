import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RatingCardProps } from '../RatingCard/RatingCard';

import { classNames } from '@/shared/lib';
import { useWindowSize } from '@/shared/lib/hooks/useWindowSize';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';

export const RatingCardDeprecated: FC<RatingCardProps> = memo((props) => {
  const { className, title, feedbackTitle, hasFeedback, onAccept, onCancel, rate = 0, ...otherProps } = props;
  const { t } = useTranslation();

  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

  const onSelectHandler = useCallback(
    (selectedStarCount: number) => {
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarCount);
      }
      setStarsCount(selectedStarCount);
    },
    [hasFeedback, onAccept]
  );

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const modalContent = (
    <>
      <TextDeprecated title={feedbackTitle} tagname='h3' />
      <InputDeprecated
        value={feedback}
        onChange={setFeedback}
        placeholder={t('your_feedback')}
        data-testid='RatingCard.Input'
      />
    </>
  );

  return (
    <CardDeprecated className={classNames('', [className], {})} {...otherProps}>
      <VStack gap={'8'} max>
        <TextDeprecated title={starsCount ? t('thanks_for_rating') : title} tagname='h3' />
        <StarRating size={40} onSelect={onSelectHandler} selectedStars={rate} />
      </VStack>
      {!isMobile && (
        <Modal isOpen={isModalOpen} onClose={cancelHandler} lazy>
          <VStack max gap='32'>
            {modalContent}
            <HStack max gap='16' justify='end'>
              <ButtonDeprecated variant='ontlinedRed' onClick={cancelHandler} data-testid='RatingCard.Cancel'>
                {t('cancel')}
              </ButtonDeprecated>
              <ButtonDeprecated variant='outlined' onClick={acceptHandler} data-testid='RatingCard.Accept'>
                {t('Send')}
              </ButtonDeprecated>
            </HStack>
          </VStack>
        </Modal>
      )}
      {isMobile && (
        <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
          <VStack max gap='16'>
            {modalContent}
            <ButtonDeprecated size='extraLarge' variant='outlined' fullWidth onClick={acceptHandler}>
              {t('Send')}
            </ButtonDeprecated>
          </VStack>
        </Drawer>
      )}
    </CardDeprecated>
  );
});
