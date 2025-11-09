/*3. Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, 
статус отношений и так далее. Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). Подберите 
правильное название для переменной.*/

const userInfo = {
  name: 'Магфират',
  surname: 'Сатывалдаев',
  mail: 'magfirat80@mail.ru',
  job: 'driver',
  position: 'student',
  age: 45,
  country: 'Россия',
  city: 'Астрахань'
}

console.log('Информация о пользователе:', userInfo);

/*4. Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки). 
Добавьте дополнительное свойство - владелец авто, значением которого будет объект, описанный в пункте №3. 
Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)*/

const carInfo = {
  brand: 'Kia',
  model: 'CEED',
  yearOfRelease: '2016',
  color: 'white',
  transmission: 'AT'
}

const driverCard = {...userInfo, ...carInfo};
console.log('Карточка водителя:', driverCard);

/*5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. Она проверяет, есть ли 
в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, если есть - 
прекращает выполнение (ничего не делает)*/

function checkSpeedMax(driverCard) {
  if ('speedMax' in driverCard) {
    return
  } else {
    speedMax = prompt('Введите значение максимальной скорости', '-');
    driverCardWithSpeed = {...driverCard, speedMax}
  }
}

checkSpeedMax(driverCard);
console.log('Карточка водителя со скоростью:', driverCardWithSpeed);

/*6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство 
объекта, которое нужно вывести и выводит его значение.*/

const studentInfo = {
  name: 'Tom',
  surname: 'Jackson',
  specialization: 'lawyer',
  course: 1,
  fakultet: 'juridical',
  formEducation: 'full-time'
}

function showInfoOnRequest(studentInfo, keyIn = prompt('Введите ключ(свойство) объекта', 'key')) {
  console.log(`${keyIn}:`, studentInfo[keyIn])
}

showInfoOnRequest(studentInfo);

/*7. Создать массив, который содержит названия продуктов (просто строки)*/
const namesProducts = ['хлеб', 'макароны', 'мука', 'сахар', 'соль', 'картофель'];
console.log('Названия продуктов:', namesProducts);

/*8. Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, 
цвет обложки, жанр) (3-5 книг). После, используя известный нам метод массив, добавить еще одну книгу в конец 
списка. Можете заменить книги на фильмы, или другую сущность, идею вы поняли.*/

const booksForeign = [
  {name: 'Унесенные ветром', author: 'Маргарет Митчелл', firstPublished: 1936, genre: 'роман'},
  {name: 'Зеленая миля', author: 'Стивен Кинг', firstPublished: 1996, genre: 'роман'},
  {name: 'Собака Баскервилей', author: 'Артур Конан Дойл', firstPublished: 1901, genre: 'детектив'},
  {name: 'Властелин колец', author: 'Джон Р. Р. Толкин', firstPublished: 1955, genre: 'фэнтези'},
  {name: 'Крестный отец', author: 'Марио Пьюзо', firstPublished: 1969, genre: 'роман'}
]

booksForeign.push({name: 'Побег из Шоушенка', author: 'Стивен Кинг', firstPublished: 1982, genre: 'повесть'});

/*9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, 
Марвел и так далее). (Если используете другую, свою сущность - импровизируйте). С помощью известного нам метода 
массива или оператора (рекомендую использовать оператор), объединить эти два массива в один*/

const booksDomestic = [
  {name: 'А зори здесь тихие...', author: 'Борис Васильев', firstPublished: 1969, genre: 'повесть'},
  {name: 'Мастер и Маргарита', author: 'Михаил Булгаков', firstPublished: 1940, genre: 'роман'},
  {name: 'Поселок', author: 'Кир Булычев', firstPublished: 1984, genre: 'научная фантастика'},
  {name: 'В списках не значился', author: 'Борис Васильев', firstPublished: 1974, genre: 'повесть'},
  {name: 'Два капитана', author: 'Вениамин Каверин', firstPublished: 1944, genre: 'роман'}
]

const booksWorld = [...booksForeign, ...booksDomestic];
console.log('Мировая литература:', booksWorld)

/*10. Почитать про метод массива — forEach. Написать функцию, которая принимает массив сущностей с задания №9. 
Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги
 (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. Что я хочу этим сказать: 
 если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).*/

 //  isAfterWar - признак выпуска книги после ВОВ

booksWorld2 = structuredClone(booksWorld);

booksWorld2.forEach(book => {
  if (book.firstPublished > 1945) {
    book.isAfterWar = true
  } else {
    book.isAfterWar = false
  }
  console.log(book)
})
