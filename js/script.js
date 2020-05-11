// функция с аргументом value при нажатии получает valuе,
// если "мем" то в <p> ответа бота вставляется картинка;
// если "анек" то в <p> ответ бота вставляется анек;
// создание нового блока с аргументом <p> и value,
// создает новый блок "all messages" с сообщением юзера и ответом бота;
var allmsgs = document.querySelector(".all-messages");

var imgMass = [
  "<img src='img/mem-0.jpg'>",
  "<img src='img/mem-1.jpg'>",
  "<img src='img/mem-2.jpg'>",
  "<img src='img/mem-3.jpg'>",
  "<img src='img/mem-4.jpg'>",
  "<img src='img/mem-5.jpg'>",
  "<img src='img/mem-6.jpg'>",
  "<img src='img/mem-7.jpg'>",
  "<img src='img/mem-8.jpg'>",
  "<img src='img/mem-9.jpg'>",
];

var vdsMass = [
  "<video controls width='250'><source src='vds/movie-0.mp4'></video>",
  "<video controls width='250'><source src='vds/movie-1.mp4'></video>",
  "<video><source src='vds/movie-2.mp4'></video>",
  "<video><source src='vds/movie-3.mp4'></video>",
  "<video><source src='vds/movie-4.mp4'></video>"
];

var anekMass = [
  "Клинтон и Трамп пошли участвовать в выборах., но при подсчете голосов все перепутали. В итоге Трамп получил голоса за Клинтон, а Клинтон залупу.",
  "Над моей подругой-феменисткой смеялись полкласса, остальные полкласса занимала она",
  "Дети, умершие при родах, автоматически попадают в Вальхаллу, т.к. они погибли во время СХВАТОК",
  "Нашел еврей деньги. Пересчитал. Не хватает",
  "Как-то в СССР мальчик играет в песочнице, вдруг хуяк совок сломался",
  "Если бы моя бабка знала, сколько денег я сэкономил на её похоронах, то она бы перевернулась в канаве",
  "Заходят как-то аморал, нигилист и циник в бар. А бармен им: <br> — У нас спиртное только с 18",
  "Заходит Навальный в бар, подходит к барной стойке и говорит бармену:  <br> — Плесни мне как обычно.",
  "Ситуация в приюте для собак. <br> — Собаку бы мне, честную, чтоб не обманывала. <br> — Не совсем вас понимаю. Не обманывала? <br> — Ну, мой прошлый, знаете, издавал lie.  <br> — Ааа, - ободрительно кивнула работница приюта, - идите нахуй!",
  "В городе карликов низкая преступность",
  "Попадают как-то немец, голландец и русский на необитаемый остров. русский говорит: – как по-немецки шлюпка? а по-голландски? немец и голландец отвечают: – звідки нам знати. ми через vpn сидимо"
];



var actionBtn = document.querySelectorAll(".btn");
actionBtn.forEach(i => i.addEventListener("click", createUserBlock));

function createUserBlock(){ //функция создания блока юзера
  var value = this.value; //get value from btn
  var divUser = document.createElement('div');

  divUser.className = "user-message";

  var pUser = document.createElement('div');

  pUser.className = "your-message";
  pUser.innerHTML = value;
  divUser.append(pUser); //insert into nyjnoe place
  allmsgs.append(divUser);
  createBotBlock(this); 
}

function createBotBlock(category){
  var randomIndex = Math.floor(Math.random() * 10);
  var what = '';

  switch(category.value){
    case "Привет!":
      document.querySelector(".start").style.display = "none";
      document.querySelector(".actions").style.display = "block";
      break;
    case "В начало":
      document.querySelector(".start").style.display = "none";
      document.querySelector(".actions").style.display = "block";
      document.querySelector(".categories").style.display = "none";
      break;
    case "Давай поболтаем?":
      what = "рандомный факт про твою жирную мамашу";
      botMes(what);
      break;
    case "Хочу посмеяться":
      document.querySelector(".actions").style.display = "none";
      document.querySelector(".categories").style.display = "block";
      what = "Выбирай категорию шутки";
      botMes(what);
      break;
    case "У меня нет настроения, ацтань!":
      what = "Заходи, когда оно появится! Я всегда тебе рад!";
      botMes(what);
      break;
    case "анекдот":
      what = anekMass[randomIndex];
      botMes(what);
      break;
    case "мем":
      what = imgMass[randomIndex];
      botMes(what);
      break;
    case "видео":
      what = vdsMass[randomIndex];
      botMes(what);
      break;
  }
}
function botMes(what){
  var divBot = document.createElement('div');
  divBot.className = "bots-messages";
  var pBot = document.createElement('div');
  pBot.className = "bot-message";
  pBot.innerHTML = what;
  divBot.append(pBot);
  allmsgs.append(divBot);
  divBot.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
