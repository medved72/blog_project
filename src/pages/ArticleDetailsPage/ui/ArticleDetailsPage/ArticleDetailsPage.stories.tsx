import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import ArticleDetailsPage from './ArticleDetailsPage'
import { ROUTES } from 'shared/config/routes'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

generateAppStories(
    'pages/ArticleDetailsPage',
    ArticleDetailsPage,
    [
        {
            key: 'primary',
            args: {},
            decorators: [StoreDecorator({})],
        },
    ],
    {
        parameters: {
            reactRouter: {
                routePath: ROUTES.ARTICLE_DETAILS,
                routeParams: { articleId: '1' },
            },
            mockData: [
                {
                    url: '/comments?articleId=1&_expand=true',
                    method: 'GET',
                    status: 200,
                    response: [
                        {
                            user: { id: '1', username: 'username' },
                            id: '1',
                            text: 'comment text 1',
                        },
                        {
                            user: { id: '1', username: 'username' },
                            id: '2',
                            text: 'comment text 2',
                        },
                    ],
                },
                {
                    url: '/articles/1',
                    method: 'GET',
                    status: 200,
                    response: {
                        id: '1',
                        title: 'Javascript news',
                        subtitle: 'Что нового в JS за 2022 год?',
                        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                        views: 1022,
                        createdAt: '26.02.2022',
                        type: ['IT'],
                        blocks: [
                            {
                                id: '5',
                                type: 'TEXT',
                                title: 'Заголовок этого блока',
                                paragraphs: [
                                    'Программа, которую по традиции называют «Hello, world!», очень проста. ' +
                                        'Она выводит куда-либо фразу «Hello, world!», или другую подобную, ' +
                                        'средствами некоего языка.',
                                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить' +
                                        ' об обычном использовании программ на JavaScript, они загружаются в браузер ' +
                                        'для обеспечения работы веб-страниц. Как правило, код оформляют в виде' +
                                        ' отдельных файлов с расширением .js, которые подключают к веб-страницам, ' +
                                        'но программный код можно включать и непосредственно в код страницы. ' +
                                        'Всё это делается с помощью тега <script>.',
                                ],
                            },
                            {
                                id: '2',
                                type: 'IMAGE',
                                src:
                                    'https://hsto.org/r/w1560/getpro/habr/post_images/' +
                                    'd56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                                title: 'Рисунок 1 - скриншот сайта',
                            },
                            {
                                id: '3',
                                type: 'CODE',
                                code:
                                    "const path = require('path');\n\nconst server " +
                                    '= jsonServer.create();\n\nconst router = jsonServer.' +
                                    "router(path.resolve(__dirname, 'db.json'));\n\nserver" +
                                    '.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
                            },
                            {
                                id: '8',
                                type: 'IMAGE',
                                src:
                                    'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/' +
                                    'ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                                title: 'Рисунок 1 - скриншот сайта',
                            },
                        ],
                    },
                },
            ],
        },
    }
)
