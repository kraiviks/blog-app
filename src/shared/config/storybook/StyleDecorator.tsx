import { Story } from '@storybook/react';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import '@/app/styles/index.scss';

export const StyleDecorator = (StoryComponent: Story) => (
  <div style={{ padding: 20 }}>
    <StoryComponent />
  </div>
);
