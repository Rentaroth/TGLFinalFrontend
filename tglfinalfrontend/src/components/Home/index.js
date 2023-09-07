import React from "react";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <section className="flex flex-col justify-center items-center">
        <div className=" w-[70vw] my-10 flex justify-center">
          <input placeholder="Search" className=" w-[80%] text-center font-roboto placeholder:text-slate-900 font-bold rounded-md focus:outline-none shadow-md focus:placeholder-transparent duration-300"></input>
        </div>
        <section className=" w-[80%] h-[70vh] mt-5 p-10 overflow-y-auto rounded-md shadow-md">
          <div className=" p-3 shadow-sm border rounded-md">
            <h3 className=" mb-3 font-bold text-slate-900 text-xl">Title</h3>
            <p>Content</p>
          </div>
        </section>
      </section>
    </Fragment>
  );
}

export { Home };