import { CSSProperties, memo, useMemo } from 'react';

import UserIcon from '../../../assets/icons/user-avatar.svg';
import { Skeleton } from '../../deprecated/Skeleton/Skeleton';
import { AppImage } from '../AppImage/AppImage';
import { Icon } from '../Icon';

import { classNames } from '@/shared/lib';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: string | number;
}

export const Avatar: React.FC<AvatarProps> = memo((props) => {
  const { className, src, size, alt = 'avatar' } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  const fallback = <Skeleton variant='circle' width={size} height={size} />;

  const errorFallback = <Icon Svg={UserIcon} width={size} height={size} className={className} />;

  return (
    <AppImage
      src={src}
      alt={alt}
      className={classNames(cls.avatar, [className], {})}
      style={styles}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
});
