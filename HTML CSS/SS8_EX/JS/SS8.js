// 1.
const incre = document.getElementById(`btnincre`);
const decre = document.getElementById(`btndecre`);
let inpN = document.getElementById(`inpN`);
console.log(inpN.value);
function Up() {
  inpN.value = Number(inpN.value) + 1;
}
function Down() {
  inpN.value = Number(inpN.value) - 1;
}

// 2.
let inpTime = document.getElementById(`timeN`);
// inpTime.value = 22;
const btnStart = document.getElementById(`btnStart`);
const btnStop = document.getElementById(`btnStop`);
console.dir(btnStart);
console.dir(btnStop);
var time;
let result = document.getElementById(`result`);
result.innerHTML = ``;
btnStart.disabled = false;
btnStop.disabled = true;
btnStart.onclick = function () {
  result.innerHTML = Number(inpTime.value);
  btnStart.disabled = true;
  btnStop.disabled = false;
  time = setInterval(() => {
    if (Number(inpTime.value) > 0) {
      inpTime.value = inpTime.value - 1;
      result.innerHTML = Number(inpTime.value);
    } else if (Number(inpTime.value) === 0) {
      btnStart.disabled = false;
      btnStop.disabled = true;
      clearInterval(time);
    }
  }, 1000);
};
btnStop.onclick = function () {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(time);
};

// 3.
const data = [
  {
    quoteText:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    quoteAuthor: "Thomas Edison",
  },
  {
    quoteText: "You can observe a lot just by watching.",
    quoteAuthor: "Yogi Berra",
  },
  {
    quoteText: "A house divided against itself cannot stand.",
    quoteAuthor: "Abraham Lincoln",
  },
  {
    quoteText: "Difficulties increase the nearer we get to the goal.",
    quoteAuthor: "Johann Wolfgang von Goethe",
  },
  {
    quoteText: "Fate is in your hands and no one elses",
    quoteAuthor: "Byron Pulsifer",
  },
  {
    quoteText: "Be the chief but never the lord.",
    quoteAuthor: "Lao Tzu",
  },
  {
    quoteText: "Nothing happens unless first we dream.",
    quoteAuthor: "Carl Sandburg",
  },
  {
    quoteText: "Well begun is half done.",
    quoteAuthor: "Aristotle",
  },
  {
    quoteText: "Life is a learning experience, only if you learn.",
    quoteAuthor: "Yogi Berra",
  },
  {
    quoteText: "Self-complacency is fatal to progress.",
    quoteAuthor: "Margaret Sangster",
  },
  {
    quoteText: "Peace comes from within. Do not seek it without.",
    quoteAuthor: "Buddha",
  },
  {
    quoteText: "What you give is what you get.",
    quoteAuthor: "Byron Pulsifer",
  },
  {
    quoteText: "We can only learn to love by loving.",
    quoteAuthor: "Iris Murdoch",
  },
  {
    quoteText: "Life is change. Growth is optional. Choose wisely.",
    quoteAuthor: "Karen Clark",
  },
  {
    quoteText: "You'll see it when you believe it.",
    quoteAuthor: "Wayne Dyer",
  },
  {
    quoteText: "Today is the tomorrow we worried about yesterday.",
    quoteAuthor: "",
  },
  {
    quoteText: "It's easier to see the mistakes on someone else's paper.",
    quoteAuthor: "",
  },
  {
    quoteText: "Every man dies. Not every man really lives.",
    quoteAuthor: "",
  },
  {
    quoteText: "To lead people walk behind them.",
    quoteAuthor: "Lao Tzu",
  },
  {
    quoteText: "Having nothing, nothing can he lose.",
    quoteAuthor: "William Shakespeare",
  },
  {
    quoteText: "Trouble is only opportunity in work clothes.",
    quoteAuthor: "Henry J. Kaiser",
  },
  {
    quoteText: "A rolling stone gathers no moss.",
    quoteAuthor: "Publilius Syrus",
  },
  {
    quoteText: "Ideas are the beginning points of all fortunes.",
    quoteAuthor: "Napoleon Hill",
  },
  {
    quoteText: "Everything in life is luck.",
    quoteAuthor: "Donald Trump",
  },
  {
    quoteText: "Doing nothing is better than being busy doing nothing.",
    quoteAuthor: "Lao Tzu",
  },
  {
    quoteText: "Trust yourself. You know more than you think you do.",
    quoteAuthor: "Benjamin Spock",
  },
  {
    quoteText: "Study the past, if you would divine the future.",
    quoteAuthor: "Confucius",
  },
  {
    quoteText: "The day is already blessed, find peace within it.",
    quoteAuthor: "",
  },
  {
    quoteText: "From error to error one discovers the entire truth.",
    quoteAuthor: "Sigmund Freud",
  },
  {
    quoteText: "Well done is better than well said.",
    quoteAuthor: "Benjamin Franklin",
  },
  {
    quoteText: "Bite off more than you can chew, then chew it.",
    quoteAuthor: "Ella Williams",
  },
  {
    quoteText: "Work out your own salvation. Do not depend on others.",
    quoteAuthor: "Buddha",
  },
  {
    quoteText: "One today is worth two tomorrows.",
    quoteAuthor: "Benjamin Franklin",
  },
  {
    quoteText: "Once you choose hope, anythings possible.",
    quoteAuthor: "Christopher Reeve",
  },
  {
    quoteText: "God always takes the simplest way.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quoteText: "One fails forward toward success.",
    quoteAuthor: "Charles Kettering",
  },
  {
    quoteText: "From small beginnings come great things.",
    quoteAuthor: "",
  },
  {
    quoteText: "Learning is a treasure that will follow its owner everywhere",
    quoteAuthor: "Chinese proverb",
  },
  {
    quoteText: "Be as you wish to seem.",
    quoteAuthor: "Socrates",
  },
  {
    quoteText: "The world is always in movement.",
    quoteAuthor: "V. Naipaul",
  },
  {
    quoteText: "Never mistake activity for achievement.",
    quoteAuthor: "John Wooden",
  },
  {
    quoteText: "What worries you masters you.",
    quoteAuthor: "Haddon Robinson",
  },
  {
    quoteText: "One faces the future with ones past.",
    quoteAuthor: "Pearl Buck",
  },
  {
    quoteText: "Goals are the fuel in the furnace of achievement.",
    quoteAuthor: "Brian Tracy",
  },
  {
    quoteText: "Who sows virtue reaps honour.",
    quoteAuthor: "Leonardo da Vinci",
  },
  {
    quoteText: "Be kind whenever possible. It is always possible.",
    quoteAuthor: "Dalai Lama",
  },
  {
    quoteText: "Talk doesn't cook rice.",
    quoteAuthor: "Chinese proverb",
  },
  {
    quoteText: "He is able who thinks he is able.",
    quoteAuthor: "Buddha",
  },
  {
    quoteText: "Be as you wish to seem.",
    quoteAuthor: "Socrates",
  },
  {
    quoteText: "A goal without a plan is just a wish.",
    quoteAuthor: "Larry Elder",
  },
  {
    quoteText: "To succeed, we must first believe that we can.",
    quoteAuthor: "Michael Korda",
  },
  {
    quoteText: "Learn from yesterday, live for today, hope for tomorrow.",
    quoteAuthor: "Albert Einstein",
  },
  {
    quoteText: "A weed is no more than a flower in disguise.",
    quoteAuthor: "James Lowell",
  },
  {
    quoteText: "Do, or do not. There is no try.",
    quoteAuthor: "Yoda",
  },
  {
    quoteText: "All serious daring starts from within.",
    quoteAuthor: "Harriet Beecher Stowe",
  },
  {
    quoteText: "The best teacher is experience learned from failures.",
    quoteAuthor: "Byron Pulsifer",
  },
  {
    quoteText: "Think how hard physics would be if particles could think.",
    quoteAuthor: "Murray Gell-Mann",
  },
  {
    quoteText: "Love is the flower you've got to let grow.",
    quoteAuthor: "John Lennon",
  },
  {
    quoteText: "Don't wait. The time will never be just right.",
    quoteAuthor: "Napoleon Hill",
  },
  {
    quoteText: "One fails forward toward success.",
    quoteAuthor: "Charles Kettering",
  },
  {
    quoteText: "Time is the wisest counsellor of all.",
    quoteAuthor: "Pericles",
  },
  {
    quoteText: "You give before you get.",
    quoteAuthor: "Napoleon Hill",
  },
  {
    quoteText: "Wisdom begins in wonder.",
    quoteAuthor: "Socrates",
  },
  {
    quoteText: "Without courage, wisdom bears no fruit.",
    quoteAuthor: "Baltasar Gracian",
  },
  {
    quoteText: "Change in all things is sweet.",
    quoteAuthor: "Aristotle",
  },
  {
    quoteText: "What you fear is that which requires action to overcome.",
    quoteAuthor: "Byron Pulsifer",
  },
];
let quotetext = document.getElementById(`quotetext`);
let quoteauthor = document.getElementById(`quoteauthor`);
const reload = document.getElementById(`reload`);
reload.onclick = function () {
  random = Math.floor(Math.random() * data.length) + 1;
  quoteauthor.innerHTML = data[random].quoteAuthor;
  quotetext.innerHTML = data[random].quoteText;
};

// 4.
const timeSheetData = [
  {
    Project: `Learn front-end`,
    Task: `Learn HTML`,
    TimeSpent: 6,
  },
  {
    Project: `Learn front-end`,
    Task: `Learn CSS`,
    TimeSpent: 8,
  },
  {
    Project: `Learn front-end`,
    Task: `Learn JS Variables and Data Types`,
    TimeSpent: 6,
  },
  {
    Project: `Learn git`,
    Task: `Learn git basics`,
    TimeSpent: 2,
  },
];

const tbody = document.getElementById(`tbody`);
const thead = document.getElementById(`thead`);
thead.innerHTML += `<th>Actions</th>`;
for (let i = 0; i < timeSheetData.length; i++) {
  tbody.innerHTML += `<tr>
  <td>${timeSheetData[i].Project}</td>
  <td>${timeSheetData[i].Task}</td>
  <td>${timeSheetData[i].TimeSpent}</td>
  <td><button type="submit" class="btnRemove">x</button><button type="submit" class="btnUpdate">u</button></td>
</tr>`;
}

const inpProject = document.getElementById(`inpProject`);
const inpTask = document.getElementById(`inpTask`);
const inpTimespent = document.getElementById(`inpTimespent`);

btnAdd = document.getElementById(`btnAdd`);
btnRemove = document.getElementsByClassName(`btnRemove`);
btnUpdate = document.getElementsByClassName(`btnUpdate`);
// remove();

btnAdd.onclick = function () {
  tbody.innerHTML += `<tr>
  <td>${inpProject.value}</td>
  <td>${inpTask.value}</td>
  <td>${inpTimespent.value}</td>
  <td><button type="submit" class="btnRemove">x</button><button type="submit" class="btnUpdate">u</button></td>
</tr>`;
  inpProject.value = ``;
  inpTask.value = ``;
  inpTimespent.value = ``;
  removebtn();
}

function removebtn() {
  for(const btn of btnRemove){
    btn.addEvenlistener(`click`,function () {
      var row = btn.parentNode.parentNode;
      row.parentNode.removeChild(row);
    });
  }
}