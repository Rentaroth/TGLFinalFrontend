import React from "react";
import { Fragment } from "react";

function Write() {
  return (
    <Fragment>
      <section className=" w-[100%] h-[90vh] flex flex-col justify-center items-center">
        <form className=" w-[100%] h-[90%] p-10 flex flex-col items-center">
          <input placeholder="Title" className=" w-[50%] h-10 my-10 text-center text-xl font-helvetica shadow-md rounded-md focus:outline-none focus:placeholder-transparent duration-300"></input>
          <textarea placeholder="Write your post here..." className=" w-[80%] h-[50%] p-5 shadow-md rounded-md focus:outline-none align-top resize-none overflow-y-auto focus:placeholder-transparent duration-300"></textarea>
          <button className="mt-5 p-2 font-bold shadow-md rounded-md">Submit</button>
        </form>
      </section>
    </Fragment>
  );
}

export { Write };