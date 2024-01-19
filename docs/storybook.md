## Storybook

У проекті для кожного компонента описуються сценарії використання (сторі-кейси). Запити на сервер імітуються за допомогою storybook-addon-mock.

Файл із сценаріями створюється поруч із компонентом з розширенням .stories.tsx

Запустити Storybook можна за допомогою команди:

- `npm run storybook`

Докладніше про [Storybook](https://storybook.js.org/)

Приклад:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
```
