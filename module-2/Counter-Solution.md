Demo app: https://voluble-kulfi-c7f732.netlify.app/

```javascript
---
to: index.js
---
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.js";

ReactDOM.render(<Counter />, document.getElementById("root"));
```

```javascript
---
to: Counter.js
---
import React, { useState } from "react"; //rfce
import "./Counter.css";


export default function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  let color = count > 0 ? "green" : count === 0 ? "black" : "red";

  return (
    <div className="container">
      <h1>COUNTER</h1>
      <div style={{ color }} id="value">
        {count}
      </div>
      <div className="btn-group">
        <button onClick={decrement} className="btn btn-decrease">
          DECREASE
        </button>
        <button onClick={reset} className="btn btn-reset">
          RESET
        </button>
        <button onClick={increment} className="btn btn-increase">
          INCREASE
        </button>
      </div>
    </div>
  );
}

```

```css=
---
to: Counter.css
---
.container {
  font-family: "Work Sans", sans-serif;
  font-weight: 100;
}
h1 {
  font-weight: 100;
  font-size: 30px;
  text-align: center;
}
#value {
  font-size: 60px;
  text-align: center;
}
.btn-group {
  display: flex;
  justify-content: center;
}
button {
  margin: 10px;
  padding: 15px;
  border-radius: 40px;
  border: none;
  font-weight: 100;
  font-size: 15px;
  color: gray;
}
button:hover {
  background-color: #a6a6a6;
  color: white;
}

```
