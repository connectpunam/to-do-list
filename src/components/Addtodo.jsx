import { useRef } from "react";
import { MdAssignmentAdd } from "react-icons/md";
function Addtodo({ addList }) {
  var date = useRef();
  var name1 = useRef();
  function addFun(event) {
    addList(name1.current.value, date.current.value);
    date.current.value = "";
    name1.current.value = "";
    event.preventDefault();
  }
  return (
    <>
      <form className="row addList m-2" onSubmit={addFun}>
        <div className="col-5">
          <input
            type="text"
            className="input"
            ref={name1}
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={date} className="input" />
        </div>
        <div className="col-3">
          <button className="addBtn btn btn-success">
            <MdAssignmentAdd />
          </button>
        </div>
      </form>
    </>
  );
}

export default Addtodo;
