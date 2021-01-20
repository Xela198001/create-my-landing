import React from 'react';
import IconMobile from './img/icons/iconMobile';
import IconText from './img/icons/iconClipboard';
import IconWatch from './img/icons/iconWatch';
import IconSettings from './img/icons/iconSettings';

const items = [
  {
    id: 1,
    text: "Адаптивная версия сайта",
    desc: "Сайт будет хорошо отображаться на смартфонах и планшетах.",
    svg: <IconMobile />,
  },
  {
    id: 2,
    text: "Написание текстов, подбор изображений",
    desc:
      "Продающий текст напишет наш маркетолог. Изображения подберет наш дизайнер",
    svg: <IconText />,
  },
  {
    id: 3,
    text: "Разработка за 10 рабочих дней",
    desc: "Столько нужно нам времени, чтобы сделать Вам сайт.",
    svg: <IconWatch />,
  },
  {
    id: 4,
    text: "Возможнность корректировки",
    desc: "Плюс 7 дней на внесение правок и корректиовок",
    svg: <IconSettings />,
  },
];

export default items;