// функция с аргументом value при нажатии получает valuе,
// если "мем" то в <p> ответа бота вставляется картинка;
// если "анек" то в <p> ответ бота вставляется анек;
// создание нового блока с аргументом <p> и value,
// создает новый блок "all messages" с сообщением юзера и ответом бота;

var startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", startMsg);

function startMsg ()
{
  var value = this.value;
  var allmsgs = document.querySelector(".all-messages");
  var divUser = document.createElement('div');
    divUser.className = "user-message";
  var pUser = document.createElement('p');
    pUser.className = "your-message";
    pUser.innerHTML = value;
    divUser.append(pUser);
    allmsgs.append(divUser);
  var divBot = document.createElement('div');
    divBot.className = "bots-messages";
  var pBot = document.createElement('p');
    pBot.className = "bot-message";
    pBot.innerHTML = "Что будем делать?";
    divBot.append(pBot);
    allmsgs.append(divBot);
  var startBtnForm = document.querySelector(".start");
    startBtnForm.style.display = "none";
  var actionsForm = document.querySelector(".actions");
    actionsForm.style.display = "block";
}

var actionBtn = document.querySelectorAll(".action-btn");
actionBtn.forEach(i => i.addEventListener("click", actionMsg));

function actionMsg()
{
  var actionsForm = document.querySelector(".actions");

  var value = this.value;
  var allmsgs = document.querySelector(".all-messages");
  var divUser = document.createElement('div');
    divUser.className = "user-message";
  var pUser = document.createElement('p');
    pUser.className = "your-message";
    pUser.innerHTML = value;
    divUser.append(pUser);
    allmsgs.append(divUser);
  var divBot = document.createElement('div');
    divBot.className = "bots-messages";
  var pBot = document.createElement('p');
    pBot.className = "bot-message";
    if(value == "Хочу посмеяться") {
      pBot.innerHTML = "Выбирай категорию шутки";
    var categoriesBtnForm = document.querySelector(".categories");
      categoriesBtnForm.style.display = "block";
    }
      
    if(value == "У меня нет настроения, ацтань!")
      pBot.innerHTML = "Заходи, когда оно появится";
  divBot.append(pBot);
  allmsgs.append(divBot);
  
  actionsForm.style.display = "none";
  
}


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
  "<video><source src='vds/movie-0.mp4'></video>",
  "<video><source src='vds/movie-1.mp4'></video>",
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

var categoryBtn = document.querySelectorAll(".category-btn");
categoryBtn.forEach(i => i.addEventListener("click", category));

function category ()
{
  var randomIndex = Math.floor(Math.random() * 10);

  var value = this.value;

  var allmsgs = document.querySelector(".all-messages");
  var divUser = document.createElement('div');
    divUser.className = "user-message";
  var pUser = document.createElement('p');
    pUser.className = "your-message";
    pUser.innerHTML = value;
    divUser.append(pUser);
  allmsgs.append(divUser);

  var divBot = document.createElement('div');
    divBot.className = "bots-messages";
  var pBot = document.createElement('p');
    pBot.className = "bot-message";

// АНЕКДОТ АНЕКДОТ АНЕКДОТ АНЕКДОТ АНЕКДОТ АНЕКДОТ АНЕКДОТ
// =====================================================
  if (value == "анекдот") {
    pBot.innerHTML = anekMass[randomIndex];
  }

// МЕМ МЕМ МЕМ МЕМ МЕМ МЕМ МЕМ МЕМ МЕМ 
// =====================================================
  if (value == "мем") {
    pBot.innerHTML = imgMass[randomIndex];
  }

// ВИДЕО ВИДЕО ВИДЕО ВИДЕО ВИДЕО ВИДЕО ВИДЕО ВИДЕО
// =====================================================
  if (value == "видео") {
    pBot.innerHTML = vdsMass[randomIndex]
  }

  divBot.append(pBot);
  allmsgs.append(divBot);

  
}