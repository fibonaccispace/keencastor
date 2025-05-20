import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header:{
      kind: "what's kind",
      v1linktext: 'old version of&nbsp;the site',
      description: '. library of coding adventures, interesting tasks, quotes from books, pet projects, images, visualizations, generatives, web-games, interactive elements, mathematical funs, facts about numbers, photos, installations, art objects.',
      placeholder: 'tap here your ideas',
      placeholders: [
        'maths',
        'kaleidoscope',
        'arts',
        'web-games',
        'more decors',
      ].join('/'),
      settings: "settings",  
      filter: "filters",
      filters: {
        all: 'all',
        items: 'items',
        decors: 'decors',
        arts: 'arts',
      },
      lang: "ru",
      theme: "light",
      scrpits: "motion",
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
      tree:{
        title: 'Trees',
        description: 'generation of&nbsp;a&nbsp;random alien tree based on&nbsp;a&nbsp;large genotype. generating one tree may take some time'
      },
      lamp:{
        title: 'Lamp',
        description: 'a&nbsp;game about a&nbsp;light bulb that needs to&nbsp;find a&nbsp;key to&nbsp;open a&nbsp;door. the game consists of&nbsp;5&nbsp;gradually more difficult levels, the game adds new mechanics gradually, but the damn 3rd level is&nbsp;impossible to&nbsp;pass'
      },
      julia:{
        title: 'Julia set',
        description: 'imaginary beauty'
      },
      proceed2d:{
        title: 'Procedural generation',
        description: 'generating terrain by&nbsp;overlaying several noise maps. Perlin noise is&nbsp;not used, i&nbsp;use something else'
      },
      shader:{
        title: 'Shader',
        description: 'a&nbsp;simple shader without using libraries, maybe that`s why it`s so&nbsp;slow'
      },
      blind:{
        title: 'Blind typing',
        description: 'touch typing trainer'
      },
      rps:{
        title: 'Rock, paper, scissors',
        description: 'random fluctuations of&nbsp;the winner with infographics'
      },
      ray:{
        title: 'Raycasting',
        description: 'a&nbsp;method of&nbsp;representing three-dimensional space where rays are cast from the observer`s camera. the rays intersect with objects in&nbsp;the scene, determining their location, angle of&nbsp;incidence, material, texture, and so&nbsp;on'
      },
      markov:{
        title: 'Markov chain',
        description: 'a&nbsp;sequence of&nbsp;random words and sentences achieved by&nbsp;searching for states for each word from the original sentence'
      },
      lsystem:{
        title: 'L-system',
        description: 'recursive tree generation'
      },
      chlandi:{
        title: 'Chladni Patterns',
        description: 'the interference surfaces of&nbsp;the Chladni plates are defined as&nbsp;the positions at&nbsp;which&nbsp;N harmonics are suppressed. rather than limiting it&nbsp;to&nbsp;a&nbsp;line or&nbsp;plane as&nbsp;in&nbsp;the classic Chladni plate experiments, a&nbsp;rich set of&nbsp;surfaces results from the presence of&nbsp;three orthogonal harmonics'
      },
      nca:{
        title: 'Neural cellular automaton',
        description: 'cellular automaton using the methods of&nbsp;convolutional neural networks&nbsp;&mdash; filters and activation functions. the example given uses a&nbsp;3&nbsp;by&nbsp;3&nbsp;filter with an&nbsp;inverted gaussian function'
      },
      proceed3d:{
        title: 'Procedural generation 3D',
        description: 'generation of&nbsp;a&nbsp;pseudo three-dimensional canvas of&nbsp;heights, creating an&nbsp;image of&nbsp;the surface and biomes'
      },
      nuclear:{
        title: 'Nuclear reaction',
        description: 'nuclear reaction that occurs when exposed to&nbsp;one free neutron'
      },
      visual3d:{
        title: '3D visualization',
        description: 'application for displaying 3D&nbsp;data in&nbsp;json format'
      },
    }
  },

  ru: {
    header: {
      kind: "о чем сайт",
      v1linktext: 'предыдущая версия сайта',
      description: '. галерея о&nbsp;кодовых приключениях, интересных задачах, цитатах из&nbsp;книг, мини-проектах, изображениях, визуализациях, генеративном дизайне, веб-играх, интерактивных элементах, банк математических приколов, фактах о&nbsp;числах, фотографиях, инсталляциях и&nbsp;арт-объектах.',
      placeholder: 'предложи свою идею',
      placeholders: [
        'математика',
        'калейдоскоп',
        'художества',
        'игры',
        'декорации',
      ].join('/'),
      settings: "настройки",
      filter: "фильтры",
      filters: {
        all: 'все',
        items: 'проекты',
        decors: 'декорации',
        arts: 'арты',
      },
      lang: "en",
      theme: "светлое",
      scrpits: "моушн",
    },
    items:{
      nn:{
        title: 'Нейронная сеть',
        description: 'простейший перцептрон, способный классифицировать точки двух классов на&nbsp;плоскости. внутри можно переключаться между функциями-активации'
      },
      note:{
        title: 'Заметки',
        description: 'менеджер заметок внутри браузера с&nbsp;функцией сохранения, заметки можно закреплять и&nbsp;удалять, создавать бесконечно доски и&nbsp;их&nbsp;переименовывать'
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
        description: 'просто небольшая дрюка'
      },
      tree:{
        title: 'Деревья',
        description: 'генерация случайного инопланетного дерева или куста на&nbsp;основе большого случайного генотипа. (создание одного дерева может занять некоторое время)'
      },
      lamp:{
        title: 'Лампочка',
        description: 'игра про лампочку, которой нужно найти ключ и&nbsp;открыть дверь. игра состоит из&nbsp;5&nbsp;постепенно усложняющихся уровней, игра постепенно добавляет новые механики, но&nbsp;злоебучий 3-й уровень пройти невозможно'
      },
      julia:{
        title: 'Множество Жулиа',
        description: 'математика, мнимость, красота'
      },

      proceed2d:{
        title: 'Процедурная генерация',
        description: 'cоздание ландшафта путем наложения нескольких шумовых карт. Перлиновский шум не&nbsp;используется'
      },
      shader:{
        title: 'Шэйдер',
        description: 'простой шейдер без использования библиотек, может быть поэтому он&nbsp;такой медленный'
      },
      blind:{
        title: 'Слепопечатание',
        description: 'платформа для тренировки печатания в&nbsp;слепую'
      },
      rps:{
        title: 'Камень, ножницы, бумага',
        description: 'всем знакомая игра на графике'
      },
      ray:{
        title: 'Рэйкастинг',
        description: 'метод трассировки, при котором лучи испускаются из&nbsp;камеры наблюдателя. луч попадая в&nbsp;объект узнает координату и&nbsp;угол попадания, чтобы покрасить пиксель в&nbsp;определенный цвет'
      },
      markov:{
        title: 'Цепь Маркова',
        description: 'последовательность случайных слов и&nbsp;предложений, полученная путем поиска состояний для каждого слова из&nbsp;исходного предложения'
      },
      lsystem:{
        title: 'Л-системы',
        description: 'рекурсивная генерация дерева по заданным параметрам'
      },
      chlandi:{
        title: 'Узоры Хладни',
        description: 'если сыпануть горсть сахарного песка на&nbsp;тонкую квадратную пластину и&nbsp;спустить по&nbsp;кряю этой пластины смычок от&nbsp;скрипки, то&nbsp;частицы на&nbsp;поверхности начнут создавать интерференционные узоры. этот проект как раз, чтобы поиграться с&nbsp;такой пластиной'
      },
      nca:{
        title: 'Нейронный клеточный автомат',
        description: 'клеточный автомат, использующий методы сверточных нейронных сетей&nbsp;&mdash; фильтры и&nbsp;функции-активации.&nbsp;в&nbsp;приведенном примере используется фильтр 3✕3&nbsp;с обратной гауссовой функцией-активации'
      },
      proceed3d:{
        title: 'Процедурная генерация 3Д',
        description: 'генерация псевдотрехмерного холста высот, создающего изображение поверхности и&nbsp;случайных биомов'
      },
      nuclear:{
        title: 'Ядерная реакция',
        description: 'которая происходит при воздействии одного свободного нейтрона'
      },
      visual3d:{
        title: '3Д-визуализатор',
        description: 'приложение для отображения трехмерных данных в&nbsp;джейсон формате'
      },
    }
  }
}

export const i18n = createI18n({
  locale: 'ru',
  messages
})
