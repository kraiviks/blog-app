import { RouteProps } from 'react-router-dom';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Role } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: Role[];
};
