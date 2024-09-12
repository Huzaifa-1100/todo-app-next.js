"use client";
import { useState } from "react";

export default function Home() {
  // Define state
  const [todos, setTodos] = useState([{ todo: "", id: 0 }]);

  // Input State
  const [input, setInput] = useState("");

  // ID state
  const [id, setId] = useState(0);

  // Define Functions
  // Function for add items

  const addItems = () => {
    let obj: any = todos.find((item) => item.id == id);
    if (obj) {
      let newArray = todos.filter((item) => item.id !== obj.id);

      setTodos([...newArray, { todo: input, id: id }]);
      setInput("");
      setId(0);
      return;
    }
    setTodos([...todos, { todo: input, id: id }]);
    setInput("");
    setId(0);
  };

  // Function for edit date
  const editData = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
    setInput(obj.todo);
    setId(obj.id);
    console.log(obj);
  };

  // Function for Deleter Iems

  const deleteData = (id: any) => {
    let newArray = todos.filter((item) => item.id !== id);
    setTodos([...newArray]);
  };

  return (
    <div className="flex-col items-center max-w-2xl  md:max-w-4xl mx-auto p-5 bg-gradient-to-r from-gray-700 via-pink-500 to-gray-700 rounded-lg ">
      <h1 className="text-center text-3xl underline text-white font-bold font-serif ">
        TODO APP
      </h1>
      {/* Start input div */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-5">
        <input
          className="w-full md:w-[60%] p-2 border-b focus:outline-none rounded-lg"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write todos"
        />
        <input
          className="w-full md:w-[20%] p-2 border-b focus:outline-none rounded-lg"
          type="id"
          value={id}
          onChange={(e: any) => setId(e.target.value)}
          placeholder="Write id"
        />
        <button
          onClick={addItems}
          className=" bg-orange-600 text-white p-2 w-25 rounded-lg w-full md:w-[20%] hover:shadow-lg hover:bg-pink-700 hover:text-white active:mt-1 active:ml-1"
        >
          Add Todo
        </button>
      </div>
      {/* End input div */}

      {/* Heading */}
      <h1 className="text-center text-3xl underline mt-4 text-white font-bold font-serif ">
        ITEMS LIST
      </h1>
      {/* Items List */}
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-4 ">
        {/* Grid Items */}
        {todos.map((items: any, i: any) => {
          return (
            <div className="bg-gray-200 border-gray-700  border-4 shadow p-4 rounded-lg hover:shadow-lg hover:bg-white hover:border-4 hover:border-pink-700" key={i}>
              <div className="flex justify-between ">
                <span className=" shadow rounded-full h-6 w-6 bg-pink-300 text-center cursor-pointer hover:shadow-lg hover:bg-pink-700 hover:text-white">
                  {i + 1}
                </span>
                <span
                  onClick={() => deleteData(items.id)}
                  className=" shadow rounded-full h-6 w-6 bg-pink-300 text-center cursor-pointer hover:shadow-lg hover:bg-pink-700 hover:text-white active:mt-1 active:ml-1"
                >
                  X
                </span>
              </div>
              {/* Data Div */}
              <div className="mt-5 text-[30px] text-pink-700 overflow-hidden truncate">
                {items.todo}
              </div>
              <div className="flex justify-between">
                <h2 className="text-pink-400 text-sm">id: {items.id}</h2>
                <h2
                  onClick={() => editData(items.id)}
                  className="text-right cursor-pointer hover:text-pink-700 active:mt-1 active:ml-1"
                >
                  {" "}
                  Edit
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
