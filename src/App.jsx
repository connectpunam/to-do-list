import { useEffect, useState } from "react";
import "./App.css";
import Addtodo from "./components/Addtodo";
import BigDT from "./components/BigDT";
import TodoHead from "./components/TodoHead";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  /* FETCH TODOS */
  useEffect(() => {
    axios.get("https://todo-backend-clpg.onrender.com/todos").then((res) => {
      setData(res.data);
    });
  }, []);

  /* ADD TODO */
  function addList(name, date) {
    if (name && date) {
      axios
        .post("https://todo-backend-clpg.onrender.com/add", { name, date })
        .then((res) => {
          setData([...data, res.data]);
        });
    }
  }

  /* DELETE TODO */
  function delList(id) {
    axios
      .delete(`https://todo-backend-clpg.onrender.com/delete/${id}`)
      .then(() => {
        setData(data.filter((item) => item._id !== id));
      });
  }

  return (
    <center>
      <div className="card container box">
        <TodoHead />
        <Addtodo addList={addList} />

        {data.length === 0 ? (
          <div className="row px-3 text-center">
            <h2>Add List</h2>
          </div>
        ) : (
          <BigDT data={data} delList={delList} />
        )}
      </div>
    </center>
  );
}

export default App;
