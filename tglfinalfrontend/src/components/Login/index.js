import React from "react";
import { Fragment } from "react";

function Login() {
  return (
    <Fragment>
      <section className=" h-[60%] w-[40%] my-[10vh] flex justify-center items-center self-center border rounded-md">
        <div className=" h-[50vh] w-[50vw] flex justify-center items-center">
          <form className=" flex flex-col w-[80%] place-content-center">
            <input placeholder="User or Email" className=" w-[70%] h-[3vh] my-[2vh] rounded-md placeholder:text-slate-900 placeholder:font-bold placeholder:text-center self-center focus:outline-none focus:placeholder-transparent shadow-md duration-300"></input>
            <input placeholder="Password" className=" w-[70%] h-[3vh] my-[2vh] rounded-md placeholder:text-slate-900 placeholder:font-bold placeholder:text-center self-center focus:outline-none focus:placeholder-transparent shadow-md duration-300"></input>
            <button className=" w-[70%] mt-10 self-center border rounded-md bg-slate-900 text-white">Login</button>
          </form>
        </div>
      </section>
    </Fragment>
  );
}

export { Login };