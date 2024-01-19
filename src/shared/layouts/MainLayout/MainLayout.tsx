import { FC, ReactElement, memo } from 'react';

import { classNames } from '@/shared/lib';
import { useWindowSize } from '@/shared/lib/hooks/useWindowSize';

import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  sidebar: ReactElement;
  content: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout: FC<MainLayoutProps> = memo((props) => {
  const { className, header, sidebar, content, toolbar } = props;

  const windowSize = useWindowSize();
  const isSmallWindow = windowSize.width < 768;

  return (
    <div className={classNames(cls.mainLayout, [className], {})}>
      <div className={cls.content}>
        {isSmallWindow && <div className={classNames(cls.header, [cls.headerMobile])}>{header}</div>}
        {content}
      </div>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.rightbar}>
        {!isSmallWindow && <div className={cls.header}>{header}</div>}
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
});
