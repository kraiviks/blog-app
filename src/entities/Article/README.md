## Сущность статьи

### данная сущность является базой для создания статьи

#### Public api

- Components

`ArticleDetails` - компонент с информацией о статье

`ArticleList` - компонент со списком статей

- selectors

`getArticleData` - Селектор для получения информации о текущей открытой статье

`getUserIsEditArticle` - Селектор для проверки на возможность редактирования статьи

`getArticleError` - Селектор для получения ошибки

- slice

`articleReducer` - Редюсер для работы с сущностью

- types

  - `Article` - Тип, описывающий статью
  - `SortType` - Тип, описывающий по каким параметрам возможна сортировка
  - `ArticleType` - Типы статей
  - `ArticleView` - Тип, описывающий варианты отображения(сетка или лист)
  - `ArticleSchema` - Тип, описывающий схему для редюсера