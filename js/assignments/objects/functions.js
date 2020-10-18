function ClubInfo(club, type, members, contactInfo) {
  this.clubName = club;
  this.typeSport = type;
  this.countMembers = members;
  this.contactInfo = contactInfo;
}

function ContactInfo(address, phone, contact) {
  address = address;
  phoneNumber = phone;
  contact = contact;
}


// Opdracht 3

const clubs = [{
    club: "Ajax"
  },
  {
    club: "PSV"
  },
  {
    club: "Feyenoord"
  },
  {
    club: "Vitesse"
  }
]

const printClubs = (clubList) => {

  for (i = 0; i < clubList.length; i++) {
    let val = clubList[i];
    console.log(val.club);
    document.getElementById("soccer").innerHTML += `<li>${val.club}</li>`;
  }
}

const marco = new ContactInfo("Osdorpplein 5", "020-6991234", "Marco van Basten")
const myClub = new ClubInfo("dws", "voetbal", "95", "marco");

// Opdracht 4

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const persons = [
  new Person("Jan", 24),
  new Person("Klaas", 15),
  new Person("Yanis", 42),
  new Person("Rupel", 55),
  new Person("Hendrik", 32),
  new Person("Mono", 28),
  new Person("West", 23)
]

persons.sort((a, b) => a.age - b.age);


// Opdracht 5
// object literal (initializer notation)
const person = {
  name: "Erika",
  age: 26
};

// Opdracht 6
class Person6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const persons6 = [
  new Person6("Jan", 24),
  new Person6("Klaas", 15),
  new Person6("Yanis", 42),
  new Person6("Rupel", 55),
  new Person6("Hendrik", 32),
  new Person6("Mono", 28),
  new Person6("West", 23)
]

// Opdracht 7
class RockPaperScissor {  
  constructor() {
    this.scorePlayer = 0;
    this.scoreComputer = 0;
  }
  
  newGame(playerName) {
    this.playerName = playerName;
    this.reset();
    console.log(`Hello, ${playerName}! Let's play: Rock ... Paper ... Scissors!!!! `);
  }

  get score() {
    return {
      player: this.scorePlayer,
      computer: this.scoreComputer
    };
  }

  get endResult() {
    switch (this.winner) {
      case 'p':
        return `Well done ${this.playerName}, you win!!!`;
      case 'c':
        return "Hahaha! I've won, you lose!";
      case 'n':
        return "No one wins this round! Game on!";
    }
  }

  get winner() {
    if (this.scorePlayer === 3) {
      return 'p';
    } else if (this.scoreComputer === 3) {
      return 'c';
    } else {
      return 'n';
    }
  }

  static randomHand() {
    const hands = ['r', 'p', 's'];
    return hands[Math.floor(Math.random() * hands.length)];
  }

  static compareHands(h1, h2) {
    if (h1 === h2) {
      return 0;
    }
    if (
      (h1 === "p" && h2 === "r") ||
      (h1 === "s" && h2 === "p") ||
      (h1 === "r" && h2 === "s")
    ) {
      return 1;
    } else {
      return 2;
    }
  }

  throwHand(handPlayer) {
    if (this.winner !== 'n') {
      console.log(this.endResult);
      return;
    }

    const handComputer = RockPaperScissor.randomHand();
    const winningHand = RockPaperScissor.compareHands(handPlayer, handComputer);

    switch (winningHand) {
      case 0:
        return {
          winner: 'nobody',
            handPlayer,
            handComputer
        };
      case 1:
        this.scorePlayer++;
        return {
          winner: 'player',
            handPlayer,
            handComputer
        };
      case 2:
        this.scoreComputer++;
        return {
          winner: 'computer',
            handPlayer,
            handComputer
        };
    }
  }

  reset() {
    this.scorePlayer = 0;
    this.scoreComputer = 0;

  }
}

const RPS = {
  el: {
    announce: document.getElementById("announce"),
    player: document.getElementById("player"),
    computer: document.getElementById("computer"),
    handplayer: document.getElementById("handplayer"),
    handcomputer: document.getElementById("handcomputer")
  },
  game: new RockPaperScissor(),
  start: () => {
    const playerName = prompt("What is your name?");
    RPS.el.announce.innerHTML = `Hello, ${playerName}! Let's play: Rock ... Paper ... Scissors!!!! `
    RPS.game.newGame(playerName);
  },
  reset: () => {
    RPS.game.reset();
    RPS.refresh();
    RPS.el.announce.innerHTML = "";
  },
  refresh: (throwResult) => {
    const scoreBoard = RPS.game.score;
    RPS.el.player.innerHTML = scoreBoard.player;
    RPS.el.computer.innerHTML = scoreBoard.computer;
    RPS.el.announce.innerHTML = RPS.game.endResult;
    if (throwResult) {
      RPS.el.handplayer.className = throwResult.handPlayer;
      RPS.el.handcomputer.className = throwResult.handComputer;
    }
    else {
      RPS.el.handplayer.className = "";
      RPS.el.handcomputer.className = "";
    }
    console.log(throwResult);
  },
  random: () => {
    const throwResult = RPS.game.throwHand(RockPaperScissor.randomHand());
    RPS.refresh(throwResult);    
  },
  rock: () => {
    const throwResult = RPS.game.throwHand("r");
    RPS.refresh(throwResult);
  },
  paper: () => {
    const throwResult = RPS.game.throwHand("p");
    RPS.refresh(throwResult);
  },
  scissor: () => {
    const throwResult = RPS.game.throwHand("s");
    RPS.refresh(throwResult);
  }
};
