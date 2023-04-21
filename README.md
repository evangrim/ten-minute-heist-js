# Ten Minute Heist JS

My first ever JavaScript project, archived here for posterity (or at least sentimentality). [Ten Minute Heist](https://boardgamegeek.com/boardgame/194789/10-minute-heist-wizards-tower) is a card game by Nick Sibicky.

Ten Minute Heist is a set collection game with a race element and a bit of a "press your luck" feeling. It is not a game of luck, but it's very dramatic, because it's difficult to predict the outcome as players respond to each others' bids to control various sets. It's quick and fun, yet you could probably spend significant time analyzing a given situation.

## Features

AKA, *what am I looking at?!*

- Players alternate turns, selecting a card to take and moving their pawn to that position
- A player may move "down" the tower as far as desired, but not back up
- Sidebar displays each player's tableau (collected cards)
- Display score leaders in each category (colors, values, curses)
  - colors: sum of values on cards matching color, e.g. I have a red "5" and a red "4", so my score for red is 9
  - values: count of cards with given value among all cards, e.g. I have four "5" cards
  - curses: count of curse tokens among all cards, e.g. I have a card with one curse (C) and another with two curses (CC), so I have 3 curses
  
I never implemented the logic to actually count the score and end the game. In the game rules, there's a hidden (face down) card. The first player to take this gets a bonus for exiting the tower first but can't continue playing. Players subsequently leaving the tower get decreasing rewards, and then penalties (make a clean getaway!).

## Origin Story

This implementation is a bit naive and quite ugly, but it is 100% vanilla JS and as such a great project for leaning JavaScript. It took me about 3 weeks to learn JavaScrpt and build this, which I'm proud of.

I was considering a BootCamp at the time, and I started this project to demonstrate that I could skip a couple of years (and save a lot of money). I used it to apply for a couple Frontend roles, and it this project was enough to land me my first developer role, an exciting transition for me.

For JavaScript beginners, I highly recommend these learning resources:

* [Wes Bos' JavaScript 30](https://javascript30.com/), which does an excellent job of introducing core skills in bite sized chunks, (I still love my ES6 array methods)
* Douglas Crockford's [JavaScript, the Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742). It provides a nice formal overview of the language, some ideas of where to look for next steps, and ideas that might take years to learn on your own.
