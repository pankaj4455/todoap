
import React, { useState } from "react";
import DeleteItemp from "./DeleteItemp";


export default function App() {
  const [text, setText] = useState();
  const [change, setChange] = useState([]);
  const Add = (e) => {
    //console.log(e.target.value);
    setText(e.target.value);

  }
  const Add1 = () => {
    setChange((item) => {
      return [...item, text];
    });
    setText("");
  }

  const deleteItem = (id) => {
    setChange((item) => {
      return item.filter((elem, index) => {
        return index !== id;
      })
    });

  }

  return (
    <>
      <div className="div_2">
        <input type="text" onChange={Add} value={text} />
        <button onClick={Add1}>Add</button>

        <ul>
          {
            change.map((curElem, index) => {
              return (
                <>

                  <li className="list"><DeleteItemp text={curElem}

                    key={index}
                    id={index}
                    onSelect={deleteItem}
                  /></li>
                </>
                )
            })
          },
           </ul>
           </div>
    </>
  );
}











