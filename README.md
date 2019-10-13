This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Demo](https://barigora.github.io/backendless-test-task/).

## Тестовое задание для позиции JavaScript разработчик

Используя React, React Router и Webpack написать небольшое клиентское приложение, работающее по типу простейшей CMS (content management system).
Приложение, при старте загружает, по заранее известному пути, json файл с описанием табов/закладок, которые необходимо отрисовать в приложении.
Описание таба состоит из идентификатора, заголовка, порядкового номера закладки и пути к javascript файлу, который в себе содержит React компонент необходимый для отрисовки содержимого закладки.


### `tabs.json`

```javascript
[
  {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js'},
  {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js'},
  {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js'}
];

```

### `dummyTable.js`

```javascript
import React from ‘react’

const DummyTable = () => (
  <table><tr><td>Dummy</td><td>Table</td></tr></table>
)

export default DummyTable
```

### Общие требования:

1. При навигации между закладками, текущая закладка должна находить отображение в url приложения.
Например 'localhost/dummyTable' или 'localhost/dummyChart'
2. По умолчанию должна открыться первая закладка.
3. Если в момент старта приложения, в url указана конкретная закладка необходимо сразу ее открыть.
4. Файл модуль закладки должен быть подгружен только когда необходим – имеется в виду что все файлы которые необходимы для “DummyTable ” должны быть подгружены только когда выбран таб “DummyTable”, это должно быть видно в DevConsole браузера во вкладке “Network".
