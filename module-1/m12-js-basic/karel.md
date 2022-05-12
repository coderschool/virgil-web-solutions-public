---
course: virgil-fw
author: Tuan Hoang
description: solutions for full stack web assignments
---

[Back to README](../README.md)

# Karel Solutions

### Morning Newspaper

```jsx
function turnRight() {
  turnLeft();
  turnLeft();
  turnLeft();
}

function turnAround() {
  turnLeft();
  turnLeft();
}

move();
move();
turnRight();
move();
turnLeft();
move();
pickBeeper();
turnAround();
move();
move();
move();
turnRight();
move();
putBeeper();
```

### Checkerboard

```jsx
move();
putBeeper();
move();
move();
putBeeper();
move();
turnLeft();
turnLeft();
turnLeft();
move();
putBeeper();
turnLeft();
turnLeft();
turnLeft();
move();
move();
putBeeper();
move();
move();
putBeeper();
turnLeft();
move();
turnLeft();
move();
putBeeper();
move();
move();
putBeeper();
```

### Pick Up the Beepers

```jsx
while (frontIsClear()) {
  move();
  while (beepersPresent()) {
    pickBeeper();
  }
}
```

### Pot Holes

```jsx
while (frontIsClear()) {
  move();
  if (rightIsClear()) {
    turnRight();
    move();
    putBeeper();
    turnAround();
    move();
    turnRight();
  }
}
```

### Move the Beepers

```jsx
while (noBeepersPresent()) {
  move();
}

while (beepersPresent()) {
  pickBeeper();
  move();
  putBeeper();
  turnAround();
  move();
  turnAround();
}
```

### Double the Beepers

```jsx
while (noBeepersPresent()) {
  move();
}

while (beepersPresent()) {
  pickBeeper();
  move();
  putBeeper();
  putBeeper();
  turnAround();
  move();
  turnAround();
}

move();

while (beepersPresent()) {
  pickBeeper();
  turnAround();
  move();
  putBeeper();
  turnAround();
  move();
}
```

### Hospitals

```jsx
while (frontIsClear()) {
  move();
  if (beepersPresent()) {
    pickBeeper();
    buildHospital();
  }
}

function buildHospital() {
  turnLeft();
  putBeeperLine();
  turnRight();
  move();
  turnRight();
  putBeeperLine();
  turnLeft();
}

function putBeeperLine() {
  putBeeper();
  move();
  putBeeper();
  move();
  putBeeper();
}
```

### Midpoint

```jsx
// Minh
function main() {
  putBeeper();
  putBeeperToTheEnd();
  turnAround();
  move();

  while (noBeepersPresent()) {
    moveToTheNextBeeper();
    bringBeeperOneStepCloser();
    move();
  }

  pickBeeper();
}

function putBeeperToTheEnd() {
  while (frontIsClear()) {
    move();
  }
  putBeeper();
}

function moveToTheNextBeeper() {
  move();
  while (noBeepersPresent()) {
    move();
  }
}

function bringBeeperOneStepCloser() {
  pickBeeper();
  turnAround();
  move();
  if (noBeepersPresent()) {
    putBeeper();
  }
}

main();
```

```jsx
// Bitna
function main() {
  putBeepersOnEnds();
  narrowBeepers();
}

function putBeepersOnEnds() {
  putBeeper();
  while (frontIsClear()) {
    move();
  }
  putBeeper();
  turnAround();
  move();
}

function narrowBeepers() {
  while (noBeepersPresent()) {
    moveTillBeeper();
    moveBeeperOneStep();
  }

  pickBeeper();

  while (frontIsClear()) {
    move();
  }
}

function moveBeeperOneStep() {
  pickBeeper();
  turnAround();
  move();
  if (noBeepersPresent()) {
    putBeeper();
    move();
  }
}
function moveTillBeeper() {
  while (noBeepersPresent()) {
    move();
  }
}
main();
```

### Maze

Karel always follow the right side wall to find the way out
