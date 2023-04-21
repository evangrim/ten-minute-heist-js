//NEXT STEPS
/*
Add event listener to capture ID of card
Send ID of card to getPosition (or whatever)
position player token at position
*/

//C A R D S
//ALIASES
//Empty attributes
const noDesc = "",
noSuit = "";
//Card sets
const light = "light",
dark = "dark",
crescent = "crescent",
full = "full";
//Location states
const facedown = "facedown",
faceup = "faceup",
hole = "hole",
tower = "tower",
public = "public",
tableau = "tableau";
//Elements of markup

//Action tokens (as components of card actions)

//OPTIONS
let numberPlayers = 4;
let selectedCardset = full;

const heistGameCards = [
  {
    name: "Orion's Bestiary",
    numbers: [3],
    suits: ["t"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Flamel's Formulas",
    numbers: [4],
    suits: ["t"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Book of Spells",
    numbers: [5],
    suits: ["t"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "The Eye of Vala",
    numbers: [3],
    suits: ["j"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Heart of Eternity",
    numbers: [4],
    suits: ["j"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Stone of the Kings",
    numbers: [5],
    suits: ["j"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Sunstone Phoenix Feather",
    numbers: [3],
    suits: ["f"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Gibbon's Paw",
    numbers: [4],
    suits: ["f"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Dragon Skull",
    numbers: [5],
    suits: ["f"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Sprig of the Dawn Tree",
    numbers: [3],
    suits: ["a"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "The Angelic Compass",
    numbers: [4],
    suits: ["a"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Silver Idol of Hun-Batz",
    numbers: [5],
    suits: ["a"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Love Potion #8",
    numbers: [3],
    suits: ["p"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Potion of Strength",
    numbers: [4],
    suits: ["p"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Greater Potion of Healing",
    numbers: [5],
    suits: ["p"],
    curses: 0,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Infernal Tarot",
    numbers: [2],
    suits: ["w"],
    curses: 1,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Celestial Tarot",
    numbers: [2],
    suits: ["w"],
    curses: 1,
    set: "light",
    shortDesc: "", description:  noDesc
  },
  {
    name: "The Stars of the Night Sky",
    numbers: [3],
    suits: ["t"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Araby, the Golden Age",
    numbers: [4],
    suits: ["t"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Tales of Valeria",
    numbers: [5],
    suits: ["t"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Grimoire of Ancients",
    numbers: [6],
    suits: ["t"],
    curses: 1,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Necro­­­­­­­nomicon", //There is a shy hyphen here
    numbers: [7],
    suits: ["t"],
    curses: 1,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Prismatic Pyramid",
    numbers: [3],
    suits: ["j"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Ruby Slippers",
    numbers: [4],
    suits: ["j"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "The Five Rings",
    numbers: [5],
    suits: ["j"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Millenium Rose Diamond",
    numbers: [6],
    suits: ["j"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "The Seven Aspects of Unity",
    numbers: [7],
    suits: ["j"],
    curses: 1,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Wings of Fae",
    numbers: [3],
    suits: ["f"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Achilles' Calcaneus",
    numbers: [4],
    suits: ["f"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Tiktaalik Fin",
    numbers: [5],
    suits: ["f"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Unicorn Horn",
    numbers: [6],
    suits: ["f"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Basilisk Fang",
    numbers: [7],
    suits: ["f"],
    curses: 1,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Canopic Jar of Nur",
    numbers: [3],
    suits: ["a"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Aladdin's Lamp",
    numbers: [4],
    suits: ["a"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Mechanical Owl",
    numbers: [5],
    suits: ["a"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "The Scrying Bowl",
    numbers: [6],
    suits: ["a"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Mirror of Sorrows",
    numbers: [7],
    suits: ["a"],
    curses: 1,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Sleeping Tincture",
    numbers: [3],
    suits: ["p"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Paracelsus Spragyric",
    numbers: [4],
    suits: ["p"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Quietus Concotion",
    numbers: [5],
    suits: ["p"],
    curses: 0,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Dr. Jekyll's Draught",
    numbers: [6],
    suits: ["p"],
    curses: 1,
    set: "dark",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Distillation of Prescience",
    numbers: [1],
    suits: ["w"],
    curses: 1,
    set: "crescent",
    shortDesc: "Peek at Hole: other's.", 
    description:  "Look at another player's face-down card.",
    immediate: function() {}
  },
  {
    name: "Philosopher's Stone",
    numbers: [3],
    suits: ["w"],
    curses: 2,
    set: "crescent",
    shortDesc: "", description:  noDesc
  },
  {
    name: "Boots of Sealth",
    numbers: [3],
    suits: [noSuit],
    curses: 1,
    set: "crescent",
    shortDesc: "+1 Prestige", 
    description:  "Gain 1 Prestige at the end of the game.",
    endgame: function() {}
  },
  {
    name: "Codex of Truth",
    numbers: [4],
    suits: ["t", "j"],
    curses: 1,
    set: "crescent",
    shortDesc: "Reveal Hole card: own.", 
    description:  "You must reveal your face down card to the other players.",
    immediate: function() {}
  },
  {
    name: "Purloiner's Pouch",
    numbers: [4],
    suits: [noSuit],
    curses: 1,
    set: "crescent",
    shortDesc: "+1 Prestige", 
    description:  "Gain 1 Prestige at the end of the game.",
    endgame: function() {}
  },
  {
    name: "Blade of Umbra",
    numbers: [5],
    suits: [noSuit],
    curses: 1,
    set: "crescent",
    shortDesc: "+1 Prestige", 
    description:  "Gain 1 Prestige at the end of the game.",
    endgame: function() {}
  },
  {
    name: "Bone Crown",
    numbers: [5],
    suits: [noSuit],
    curses: 1,
    set: "crescent",
    shortDesc: "Others: discard 1: Haul.",
    description: "Starting to your left, all players must discard 1 face-up non-Curse card from their Haul, if possible.",
    immediate: function() {}
  },
  {
    name: "Vampire's Blood",
    numbers: [5],
    suits: ["p"],
    curses: 1,
    set: "crescent",
    shortDesc: "Swap: 1 Haul / 1 Tower.", 
    description: "You may swap one of your face-up non-Curse cards with one non-Curse card from the tower.",
    immediate: function() {}
  },
  {
    name: "Sand of Illusion",
    numbers: [0],
    suits: [noSuit],
    curses: 1,
    set: "full",
    shortDesc: "Copy 1: Haul.", 
    description: "Duplicate any non-Curse face-up 3, 4, or 5 card in your Haul.",
    immediate: function() {}
  },
  {
    name: "Amulet of Nae",
    numbers: [0],
    suits: [noSuit],
    curses: 2,
    set: "full",
    shortDesc: "Discard 1: Tower. Give this.", 
    description: "Discard any card in the Tower, then give this card to an opponent.",
    immediate: function() {}
  },
  {
    name: "Forged Certificate",
    numbers: [0],
    suits: [noSuit],
    curses: 1,
    set: "full",
    shortDesc: "+2 Prestige", 
    description:  "Gain 2 Prestige at the end of the game.",
    endgame: function() {}
  },
  {
    name: "Thief's Portal Cloak",
    numbers: [0],
    suits: [noSuit],
    curses: 1,
    set: "full",
    shortDesc: "Take 1: Tower.",
    description:  "You may take any card from the Tower.",
    immediate: function() {}
  },
  {
    name: "Serpent's Hourglass",
    numbers: [1],
    suits: ["w"],
    curses: 1,
    set: "full",
    shortDesc: this.description,
    description: "Take another turn.",
    immediate: function() {}
  },
  {
    name: "Haunted Nesting Dolls",
    numbers: [3, 4, 5],
    suits: [noSuit],
    curses: 1,
    set: "full",
    shortDesc: "", description:  ""
  },
  {
    name: "Radiant Hansa",
    numbers: [5],
    suits: [noSuit],
    curses: 0,
    set: "full",
    shortDesc: "-2 Curses", 
    description:  "Your Curse total is reduced by 2.",
    immediate: function() {}
  },
  {
    name: "Radiant Hansa",
    numbers: [6],
    suits: ["t", "j"],
    curses: 1,
    set: "full",
    shortDesc: "Discard 1: Haul.", 
    description:  "You must discard one non-Curse card from your Haul.",
    immediate: function() {}
  }
];

var elements = {
  tower: document.getElementById("tower"),
  players: document.getElementById("players"),
  status: document.getElementById("status")
};

var game = {
  board: [],
  players: [],
  playerTurn: 0,
  turnState: {},
  awards: {
    get tallies(){
      return [].concat(this.suits, this.numbers, 'curses');
    },
    suits: ["p", "f", "a", "j", "t"],
    numbers: ['five', 'four', 'three'],
    other: ['cursesMost", cursesFewest', 'exitLast', 'exitSecond', 'exitFirst', 'p', 'f', 'a', 'j', 't', 'five', 'four', 'three'],
    cursesMost: -3,
    cursesFewest: 1,
    exitLast: -1,
    exitSecond: 1,
    exitFirst: 2,
    p: 3,
    f: 4,
    a: 4,
    j: 5,
    t: 6,
    five: 3,
    four: 4,
    three: 3,
  },
  exited: [],
  numbers: {
    five: 5,
    four: 4,
    three: 3,
  },
  status: {
    _gameOver: false,
    set over(bool) {
      if (typeof bool == Boolean && bool) {
        game._gameOver = true;
      }
    },
    _needsInput: false,
    set needsInput(bool) {
      if (bool == true) {
        addClass(elements.tower, "receptive");
        game._needsInput = true;
      } else {
        removeClass(elements.tower, "receptive");
        game._needsInput = false;
      }
    }
  },
  turn: 0,
  get receptive() {
    return game._receptive;
  },
  get seats() {
    return this.players.length;
  },
  get activePlayer() {
    return this.players[this.playerTurn];
  },
  
  tallyCards: function(player) {
    let score = { five: 0, four: 0, three: 0,  p: 0, f: 0, a: 0, j: 0, t: 0, curses: 0 };
    
    for (let haulIndex = 0; haulIndex < player.haul.length; haulIndex++) {
      //for every haul card
      let haulCard = player.haul[haulIndex];
      score.curses += haulCard.curses;
      for (let numberIndex in game.awards.numbers) {
        let spelledNumber = game.awards.numbers[numberIndex];
        let numberValue = game.numbers[spelledNumber];
        if (haulCard.numbers.includes(numberValue)) {
          score[spelledNumber]++;
        }
      }
      if (haulCard.suits.includes("w")) {
        for (let suitIndex in game.awards.suits) {
          let suit = game.awards.suits[suitIndex];
          score[suit] += haulCard.numbers[0];
        }
      } else {
        for (let suitIndex in game.awards.suits) {
          let checkSuit = game.awards.suits[suitIndex];
          if (haulCard.suits.includes(checkSuit)) {
            score[checkSuit] += haulCard.numbers[0];
          }
        }
      }
    }
      player.score = score;
  },
  nextPlayer: function() {
    let turn = this.playerTurn;
    turn < this.seats - 1 ? this.playerTurn++ : (this.playerTurn = 0);
    if (game.exited.length == game.players.length){
      endGame();
      return;
    }
    else if ( game.exited.includes(game.activePlayer) ){
      this.nextPlayer();
    }
    else{
      return this.players[turn];
    }
  },
  cardFromElement: function(cardEl) {
    let element = this.cardFromId(cardEl.id);
    return element;
  },
  cardFromId: function(id) {
    let card = this.board[idToIndex(id)];
    return card;
  },
  elementFromCard: function(card) {
    return document.getElementById(card.position);
  },
  setup: function(players, setName) {
    let lightDeck = shuffle(pullCards(light));
    let darkDeck = shuffle(pullCards(dark).concat(pullCards(setName)));
    let dealFrom = lightDeck;
    initPlayers();
    dealHoleCards();
    dealTower();
    
    function pullCards(set) {
      let card = c => c.set === set;
      return [...heistGameCards.filter(card)];
    }
    function initPlayers() {
      for (let i = 1; i <= players; i++) {
        let tableauEl = makeEl("div", "tableau");
        tableauEl.id = "tableau" + i;
        let tableauLabel = document.createElement("p");
        tableauLabel.className = "tableauLabel";
        tableauLabel.textContent = "Player" + i + ":";
        tableauEl.appendChild(tableauLabel);
        elements.players.appendChild(tableauEl);
        let playerToken = makeEl("i", "player");
        playerToken.id = "p" + i;
        playerToken.textContent = i;
        elements.players.appendChild(playerToken);
        game.players.push({
          position: 0,
          haul: [],
          hole: {},
          token: playerToken,
          number: i,
          name: "Player " + i,
          tableau: tableauEl,
          score: { five: 0, four: 0, three: 0,  p: 0, f: 0, a: 0, j: 0, t: 0, curses: 0 },
          row: 0,
        });
      }
    }
    function dealHoleCards() {
      for (let i = 0; i < players; i++) {
        let holeCard = (game.players[i].hole = lightDeck[0]);
        holeCard.status = initStatus(facedown, hole, tableau);
        lightDeck.shift();
      }
    }
    function dealTower() {
      //deal 8 rows of 5 cards each.
      for (let row = 1; row <= 8; row++) {
        if (row > 2) {
          //deal 'light' until second row
          dealFrom = darkDeck;
        }
        for (let col = 1; col < 6; col++) {
          let space = makeEl("span", "space");
          let towerCard = dealFrom[0];
          dealFrom.shift();
          towerCard.row = row;
          towerCard.status = initStatus(faceup, tower, public);
          towerCard.position = row * 10 + col; //9 becomes 24, i.e. row 2, col 4
          if (row == 8 && col == 5) {
            towerCard.status.faceDirection = facedown;
          } //deal the last card facedown
          game.board.push(towerCard);
          space.appendChild(markupCard(towerCard));
          elements.tower.appendChild(space);
        }
      }
      let exit = makeEl('p', 'highlight', 'Exit the Tower');
      exit.id = 'exit';
      elements.tower.appendChild(exit);
    }
    function initStatus(
      faceDirection = faceup,
      location = tower,
      owner = "public"
    ) {
      return {
        faceDirection: faceup,
        location: tower,
        owner: "public"
      };
    }
  }
};
game.setup(numberPlayers, selectedCardset);
gameTurn();

function idToIndex(id) {
  let digit1 = Math.floor(id / 10),
  digit2 = id % 10;
  let index = (digit1 - 1) * 5 + digit2 - 1;
  return index;
}

//may be unnecessary since cards record their position
function indexToId(index) {
  index++;
  let row = Math.ceil(index / 5);
  let column = index - (row - 1) * 5;
  return row + "" + column;
}

function gameTurn() {
  let activePlayer = game.activePlayer;
  let turnMessage = document.getElementById('turnMessage').textContent = game.activePlayer.name + "'s Turn. Pick a card.";
  let holeCard = markupCard(game.activePlayer.hole);
  holeCard.id = "holeCard";
  activePlayer.tableau.appendChild(holeCard);
  
  let validMoves = (game.turnState.validMoves = []);
  //add event listeners to card element
  for (let i = 0; i < game.board.length; i++) {
    let cardObj = game.board[i];
    let cardElement = game.elementFromCard(cardObj);
    if (
      cardObj.status.location == "tableau" ||
      cardObj.row < activePlayer.row
    ) {
      removeClass(cardElement, "highlight");
    } else if (
      cardObj.status.location == tower &&
      cardObj.row >= activePlayer.row
    ) {
      cardElement.addEventListener("click", handleTurn);
      validMoves.push(cardElement);
      addClass(cardElement, "highlight"); //fire through object
    }
    let exit = document.getElementById('exit');
    exit.addEventListener('click', exitTower);
  }
  game.status.needsInput = true;
}

function handleTurn(e) {
  let cardElement = this;
  //move active player token to "space" element
  this.parentElement.appendChild(game.activePlayer.token);
  game.activePlayer.row = Math.floor(cardElement.id / 10);
  let cardObj = game.board[idToIndex(cardElement.id)];
  cardObj.status.location = "tableau";
  cardObj.status.owner = game.activePlayer;
  //move card to players
  let space = cardElement.parentElement;
  game.activePlayer.tableau.appendChild(cardElement);
  game.activePlayer.haul.push(cardObj);
  addClass(space, 'empty');
  game.status.needsInput = false;
  //clear highlights
  game.tallyCards(game.activePlayer);
  clearTurnState();
  displayScore();
  game.nextPlayer();
  gameTurn();
}

function clearTurnState(){
  for (var element in game.turnState.validMoves) {
    game.turnState.validMoves[element].removeEventListener("click", handleTurn);
  }
  if ( document.getElementById("holeCard") ){
    game.activePlayer.tableau.removeChild(document.getElementById("holeCard"));
  }
}

function displayScore(){
  for (let i = 0; i < game.awards.tallies.length; i ++ ){
    let category = game.awards.tallies[i];
    let leaders = getLeaders(category);
    let score;
    if ( leaders[0] ) {
      score = leaders[0].score[category];
    }
    let categoryElement = document.getElementById('set-' + category);
    categoryElement.textContent = category + ': ' + score;
  }
}

function getLeaders(category){
  let leaders = [];
  let highScore = 0;
  for ( var j = 0; j < game.players.length; j++ ){
    let playerScore = game.players[j].score[category];
    if ( playerScore == highScore ){
      leaders.push(game.players[j]);
    }
    else if ( playerScore > highScore ) {
      leaders = [game.players[j]];
      highScore = game.players[j].score[category];
    }
  }
  return leaders;
}

  //find largest number among all scores, as dividend to determine width of score bars
  //show all scores in a little graph
  //if faceup, include hole card, hatched
  // ? if facedown, show gray graph bar segment for potential impact of hole card


function exitTower(e){
  game.exited.push(game.activePlayer);
  alert(game.activePlayer.name + " left the tower")
  let token = game.activePlayer.token;
  if(token){
    token.parentElement.removeChild(token);
  }
  clearTurnState();
  game.nextPlayer();
  gameTurn();
}

function endGame(){
  clearTurnState();
  alert("game over");
}

function shuffle(array) {
  let m = array.length,
  t,
  i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i]; //move a random card to the end of the array
    array[i] = t;
  }
  return array;
}

function markupCard(cardObj) {
  let cssClass = "card";
  for ( let suitIndex in cardObj.suits ){
    cssClass += " " + cardObj.suits[suitIndex];
  }
  if (cardObj.status) {
    cssClass += " " + cardObj.status.location + " " + cardObj.status.faceDirection;
  }
  let cardEl = makeEl("div", cssClass + " " + cssClass);
  cardEl.id = cardObj.position;
  cardEl.appendChild(makeEl("p", "name", cardObj.name));
  cardEl.appendChild(makeEl("p", "description", cardObj.shortDesc));
  let ribbon = makeEl("div", "ribbon");
  //numbers
  let tallies = makeEl("div", "tallies");
  for (let i = 0; i < cardObj.numbers.length; i++) {
    tallies.appendChild(
      makeEl("i", "number n" + cardObj.numbers[i], cardObj.numbers[i])
    );
  }
  //suits
  for (let i = 0; i < cardObj.suits.length; i++) {
    tallies.appendChild(
      makeEl("i", "suit s" + cardObj.suits[i], cardObj.suits[i])
    );
  }
  ribbon.appendChild(tallies);
  //curses
  let curses = makeEl("div", "curses");
  for (let i = 0; i < cardObj.curses; i++) {
    curses.appendChild(makeEl("i", "curse", "C"));
  }
  ribbon.appendChild(curses);
  cardEl.appendChild(ribbon);
  return cardEl;
}

function makeEl(elType, cssClass, content) {
  let el = document.createElement(elType);
  el.className = cssClass;
  el.textContent = content;
  return el;
}

//returns true if class was added
function toggleClass(targetElement, cssClass) {
  let classes = targetElement.className.split(" ");
  let classFound = false;
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].includes(cssClass)) {
      classFound = i;
    }
  }
  if (classFound) {
    classes[classFound] = "";
  } else {
    classes.push(cssClass);
  }
  targetElement.className = classes.join(" ");
}

function addClass(targetElement, cssClass) {
  let classes = targetElement.className.split(" ");
  let classWasAdded = false;
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].includes(cssClass)) {
      classWasAdded = true;
    }
  }
  if (!classWasAdded) {
    classes.push(cssClass);
    classWasAdded = false;
  }
  targetElement.className = classes.join(" ");
  return classWasAdded;
}

function removeClass(targetElement, cssClass) {
  let classes = targetElement.className.split(" ");
  let classWasRemoved = false;
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].includes(cssClass)) {
      classes[i] = "";
      classWasRemoved = true;
    }
  }
  targetElement.className = classes.join(" ");
  return classWasRemoved;
}
