import axios from "./axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [result, setResult] = useState([]);

  const fetchResult = async () => {
    try {
      const res = await axios.get(`/result`);
      setResult(res.data.result);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  let head = [];
  let body = [];

  result.forEach((item) => {
    for (let key in item) {
      head.push(key);
      body.push(item[key]);
    }
  });

  let head2 = [...new Set(head)];
  let row1 = body.splice(3, 3);
  let row2 = body.splice(0, 3);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {head2.map((item) => {
              return <th key={uuidv4()}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {row1.map((item) => {
              return <td key={uuidv4()}>{item}</td>;
            })}
          </tr>
          <tr>
            {row2.map((item) => {
              return <td key={uuidv4()}>{item}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
