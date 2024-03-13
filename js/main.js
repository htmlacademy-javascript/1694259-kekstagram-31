const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Лореляй Берс',
  'Эрментруд Петцваль',
  'Миронега Гирш',
  'Динамий Янг',
  'Дуиллий Габор',
  'Вениамин Дрейк',
  'Санди Делиль',
  'Тулл Кремер',
  'Абриана Козлова',
  'Элис Липпс',
  'Лисипп Барнз',
  'Франциска Бишоп',
  'Орфей Паш',
  'Меммий Рамзауэр',
  'Эгджерт Аксенов',
  'Ортвин Гейслер',
  'Антигона Фанте',
  'Джата Елисеева',
  'Ирмтруд Бринель',
  'Тамара Харрисон',
  'Глушата Шакир',
  'Гам Морита',
  'Ахлф Хамада',
  'Ортрун Имбриани',
  'Фридерайк Маршак'
];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generateCommentId = createRandomIdFromRangeGenerator(1, 10000);

const createComment = () => {
  const generatedAvatarId = getRandomInteger(1, 6);
  const generatedMessage = MESSAGES[getRandomInteger(0, MESSAGES.length - 1)];
  const generatedName = NAMES[getRandomInteger(0, MESSAGES.length - 1)];
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${generatedAvatarId}.svg`,
    message: generatedMessage,
    name: generatedName
  };
};

const generatePhotoID = createRandomIdFromRangeGenerator(1, 25);
const generateImgID = createRandomIdFromRangeGenerator(1, 25);

const createPhotoDescription = () => {
  const generatedLikesAmount = getRandomInteger(15, 200);

  return {
    id : generatePhotoID(),
    url : `{photos/${generateImgID()}.jpg`,
    description : DESCRIPTION,
    likes: generatedLikesAmount,
    comments : Array.from({length: getRandomInteger(1, 30)}, createComment)
  };

};


const PhotoDescriptions = Array.from({length: 25}, createPhotoDescription);
