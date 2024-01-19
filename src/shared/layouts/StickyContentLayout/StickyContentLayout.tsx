import { FC, memo, ReactElement } from 'react';

import { classNames } from '@/shared/lib';
import { useWindowSize } from '@/shared/lib/hooks/useWindowSize';

import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout: FC<StickyContentLayoutProps> = memo((props) => {
  const { className, left, content, right } = props;

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

  return (
    <>
      {left && <div className={cls.left}>{left}</div>}
      {isMobile && right && <div className={cls.right}>{right}</div>}
      <div className={classNames(cls.stickyContentLayout, [className], {})}>
        <div className={cls.content}>{content}</div>
        {!isMobile && right && <div className={cls.right}>{right}</div>}
      </div>
    </>
  );
});
