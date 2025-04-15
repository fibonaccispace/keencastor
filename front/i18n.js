import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    header:{
      kind: "what's kind",
      v1linktext: 'old version of&nbsp;the site',
      description: 'the site about coding adventures, interesting tasks, quotes from books, pet projects, images, visualizations, generatives, web-games, interactive elements, mathematical funs, facts about numbers, photos, installations, art objects.',
      placeholder: 'tap here your ideas',
      placeholders: [
        'drawing machine',
        'birth generator',
        'kaleidoscope',
        'more arts',
        'interesting tasks',
        'photos',
        'web-games',
        'more decors',
        'facts about numbers',
      ].join('/'),
      settings: "settings",  
      lang: "en",
      theme: "light",
      scrpits: "scrpits",
    }
  },
  ru: {
    header: {
      kind: "о чем сайт",
      v1linktext: 'прошлая версия сайта',
      description: 'сайт о&nbsp;кодовых приключениях, интересных задачах, цитатах из&nbsp;книг, мини-проектах, изображениях, визуализациях, генеративном дизайне, веб-играх, интерактивных элементах, банк математических приколов, фактах о&nbsp;числах, фотографиях, инсталляциях и&nbsp;арт-объектах.',
      placeholder: 'напиши свою идею',
      placeholders: [
        'рисование',
        'генератор перерождения',
        'калейдоскоп',
        'больше изображений',
        'задач бы побольше',
        'фоточки',
        'игры',
        'больше декораций',
        'факты о числах',
      ].join('/'),
      settings: "настройки",
      lang: "ру",
      theme: "светлое",
      scrpits: "скрипты",
    }
  }
}

export const i18n = createI18n({
  locale: 'en',
  messages
})
