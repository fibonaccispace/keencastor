keencastor - документация

Регистрация новых компонентов - глобальная, любой новый компонент вносится в main.js

Добавление нового декоратора:
- в decors.json внести объект с полем component и его значением 'ИмяDecor'
- в main.js внести import BlackDecor from './components/decors/BlackDecor.vue'
- в main.js внести app.component('Decoration', Decoration)

Добавление нового проекта:
- в items.json внести объект, описание должно быть на английском (shortname – используется в качестве ключа далее)
- в i18n.js описание на двух языках

Добавление нового арта:
- добавить изображение в /public/images/arts/
- в arts.json добавить путь и имя автора