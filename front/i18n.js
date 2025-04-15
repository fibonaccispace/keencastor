import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header:{
      kind: "what's kind",
      v1linktext: 'old version of&nbsp;the site',
      description: '. the site about coding adventures, interesting tasks, quotes from books, pet projects, images, visualizations, generatives, web-games, interactive elements, mathematical funs, facts about numbers, photos, installations, art objects.',
      placeholder: 'tap here your ideas',
      placeholders: [
        'maths',
        'kaleidoscope',
        'arts',
        'web-games',
        'more decors',
      ].join('/'),
      settings: "settings",  
      lang: "ru",
      theme: "light",
      scrpits: "scrpits",
    },
    items:{
      nn:{
        title: 'Neural network',
        description: 'the simplest perceptron capable of&nbsp;classifying points of&nbsp;two classes on&nbsp;a&nbsp;plane.&nbsp;by&nbsp;the way, you can switch between different activation functions to&nbsp;explore the difference of&nbsp;dependency search'
      },
      note:{
        title: 'Notes',
        description: 'browser note manager with save function, notes can be&nbsp;deleted and pinned, create different boards and rename them'
      },
      board:{
        title: 'Board',
        description: 'a&nbsp;common drawing area where anyone can draw anything and everyone can see&nbsp;it'
      },
      flappy:{
        title: 'Flappy Bird AI',
        description: 'each bird has its own simple neural network with random weights. through natural selection and a&nbsp;genetic algorithm, the most successful birds pass their weights to&nbsp;the next generation with slight mutations, leading to&nbsp;correct behavior and jumping at&nbsp;the right moment'
      },
      maxbolt:{
        title: 'Maxwell-Boltzmann distribution',
        description: 'distribution of&nbsp;the number of&nbsp;molecular speeds in&nbsp;a&nbsp;closed space'
      },
      aurora:{
        title: 'Aurora borealis',
        description: 'just beautiful'
      },
    }
  },
  ru: {
    header: {
      kind: "о чем сайт",
      v1linktext: 'предыдущая версия сайта',
      description: '. сайт о&nbsp;кодовых приключениях, интересных задачах, цитатах из&nbsp;книг, мини-проектах, изображениях, визуализациях, генеративном дизайне, веб-играх, интерактивных элементах, банк математических приколов, фактах о&nbsp;числах, фотографиях, инсталляциях и&nbsp;арт-объектах.',
      placeholder: 'предложи свою идею',
      placeholders: [
        'математика',
        'калейдоскоп',
        'художества',
        'игры',
        'декорации',
      ].join('/'),
      settings: "настройки",
      lang: "en",
      theme: "светлое",
      scrpits: "скрипты",
    },
    items:{
      short:{
        title: 'НАЗВАНИЕ',
        description: 'ОПИСАНИЕ'
      },

      nn:{
        title: 'Нейронная сеть',
        description: 'простейший перцептрон, способный классифицировать точки двух классов на&nbsp;плоскости. внутри можно переключаться между функциями-активации'
      },
      note:{
        title: 'Заметки',
        description: 'менеджер заметок внутри браузера с&nbsp;функцией сохранения, заметки можно закреплять и&nbsp;удалять, создавать бесконечно досок и&nbsp;их&nbsp;переименовывать'
      },
      board:{
        title: 'Доска',
        description: 'общая доска для рисования, где любой может нарисовать что угодно, и&nbsp;все это увидят'
      },
      flappy:{
        title: 'Флэппи Бёрд ИИ',
        description: 'каждая птица со&nbsp;своими мозгами, каждая сама решает&nbsp;&mdash; в&nbsp;какой момент ей&nbsp;прыгать. после гибели всех птиц, наилучшая из&nbsp;них создает новое поколение с&nbsp;небольшими мутациями и&nbsp;одной копией.&nbsp;со&nbsp;временем, благодаря естественному отбору, птицы будут лучше избегать препятствия'
      },
      maxbolt:{
        title: 'Максвелла-Больцмана',
        description: 'распределение количества молекулярных скоростей в&nbsp;замкнутом пространстве'
      },
      aurora:{
        title: 'Северное сияние',
        description: 'просто хуйнюшка'
      },
    }
  }
}

export const i18n = createI18n({
  locale: 'en',
  messages
})
