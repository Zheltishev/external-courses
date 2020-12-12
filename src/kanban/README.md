# Kanban - менеджер задач.

## Текущий функционал

- Активное меню в шапке сайта
- Добавление новых задач в блоке Backlog
- Перенос задач из Backlog в Ready
- Перенос задач из Ready в Finish

## Проект

Для сборки проекта используется [webpack] v5

Используемые модули:

- "@babel/core": "^7.12.10",
- "@babel/preset-env": "^7.12.10",
- "babel-loader": "^8.2.2",
- "clean-webpack-plugin": "^3.0.0",
- "copy-webpack-plugin": "^7.0.0",
- "cross-env": "^7.0.3",
- "css-loader": "^5.0.1",
- "file-loader": "^6.2.0",
- "html-loader": "^1.3.2",
- "html-webpack-plugin": "^4.5.0",
- "mini-css-extract-plugin": "^1.3.3",
- "optimize-css-assets-webpack-plugin": "^5.0.4",
- "terser-webpack-plugin": "^5.0.3",
- "webpack": "^5.10.1",
- "webpack-cli": "^4.2.0",
- "webpack-dev-server": "^3.11.0"

## Работа с проектом

Для работы потребуется установка [node.js]

Запуск на локальном сервере

```sh
npm start
```

Работа в режиме разработки

```sh
npm run dev
```

Работа в режиме продакшн

```sh
npm run build
```

[webpack]: https://webpack.js.org/
[node.js]: https://nodejs.org/en/
