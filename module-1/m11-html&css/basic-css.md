---
course: virgil-fwee
author: Tuan Hoang
description: solutions for full stack web assignments
---

[Back to README](../README.md)
# Initial setup 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="basic_css.css" />
    <title>Basic CSS</title>
  </head>
  <body>
    //Your code here
    </body>
  </html>
```

# Solutions
## Assignment 1
**HTML:**
```html
 <section id="assignment1">
      <h1 class="header">About Project Gutenberg</h1>
      <p id="para1">Project Gutenberg is an online library of free eBooks.</p>
      <p>
        Project Gutenberg was the first provider of free electronic books, or
        eBooks. Michael Hart, founder of Project Gutenberg, invented eBooks in
        1971 and his memory continues to inspire the creation of eBooks and
        related content today.
      </p>
      <h1 class="header">Project Gutenberg Mission Statement</h1>
      <p>To encourage the creation and distribution of eBooks.</p>
      <p>
        A 2004 essay by Michael Hart provides more detail on the mission
        statement, and some of the beliefs that guide Project Gutenberg’s
        activities in fulfillment of that mission.
      </p>
    </section>
```
**CSS:**
```css
#assignment1 {
  background-color: #fff;
  background-image: linear-gradient(
      90deg,
      transparent 79px,
      #abced4 79px,
      #abced4 81px,
      transparent 81px
    ), linear-gradient(#eee 0.1em, transparent 0.1em);
  background-size: 100% 1.2em;
}

#assignment1 p {
  color: #2c3e50;
  font: italic 20px Verdana;
}

#assignment1 p::first-letter {
  color: #27ae60;
  font-size: 2em;
}

#assignment1 #para1 {
  color: #2ecc71;
}

#assignment1 .header {
  color: #e67e22;
}

#assignment1 h1 {
  background-color: linen;
}

h1:first-child {
  /* visibility: hidden; */
  display: none;
}
```
## Assignment 2
**HTML**
```html
 <section id="assignment2">
      <a href="#assignment1">Jump to the first assignment</a>
    </section>
    <hr />
```
**CSS**
```css
/* Assignment 2 */

#assignment2 a:link {
  color: #3498db;
}
#assignment2 a:visited {
  color: #8e44ad;
}
#assignment2 a:hover {
  color: #e67e22;
}
#assignment2 a:active {
  color: #e74c3c;
}
```

## Assignment 3
**HTML**
```html
 <section id="assignment3">
      <ul>
        <li>
          Top level
          <ul>
            <li>
              Second level
              <ul>
                <li>
                  Third level
                  <ul>
                    <li>
                      Fourth level
                      <ul>
                        <li>Fifth level</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
```
**CSS**
```css
/* Assignment 3 */

#assignment3 {
  font-size: 50px;
}

#assignment3 li {
  font-size: 0.8rem;
}

```

## Assignment 4
**HTML**
```html
 <section id="assignment4">
      <div class="box"></div>
    </section>
```
**CSS**
```css
/* Assignment 4 */

#assignment4 .box {
  background-color: #2980b9;
  width: 80vmin;
  height: 80vmin;
}
```

## Assignment 5
**HTML**
```html
 <section id="assignment5">
      <div class="box">
        Box 1
        <!-- <div class="box">Box 3</div> -->
      </div>
      <div class="box content">
        Box 2
        <!-- <div class="box">Box 4</div> -->
      </div>
    </section>
```
**CSS**
```css

/* Assignment 5 */

#assignment5 .box {
  border: 50px solid #e74c3c;
  padding: 50px;
  text-transform: uppercase;
  width: 50vw;
  overflow-x: scroll;
}

/* Applies border box sizing to the root element */
:root {
  box-sizing: border-box;
}

/* Tells all other elements and pseudo-element to inherit their box sizing */
*,
::before,
::after {
  box-sizing: inherit;
}

#assignment5 .content {
  box-sizing: content-box;
  border-color: #16a085;
}
```





---

