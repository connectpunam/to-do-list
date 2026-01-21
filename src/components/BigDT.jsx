import { MdDelete } from "react-icons/md";

function BigDT({ data, delList }) {
  return (
    <>
      {data.map((item) => (
        <div className="row dusmmyList1 m-2" key={item._id}>
          <div className="col-5">{item.name}</div>
          <div className="col-4">{item.date}</div>
          <div className="col-3">
            <button
              className="delBtn btn btn-danger"
              onClick={() => delList(item._id)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default BigDT;
