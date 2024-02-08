import { useState, useContext } from "react";
import { context } from "../../context";

function Register() {
  const { createUser } = useContext(context);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  function newUser(event) {
    event.preventDefault();
    createUser({
      name,
      nickname,
      password,
      country,
      email,
    });
  };

  return (
    <section className=" w-[100%] h-[100%] flex justify-center items-center">
      <form onSubmit={(event) => {newUser(event)}} className=" w-[50vw] h-[50vh] flex flex-col justify-center items-center rounded-md border">
        <input value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Name" className=" w-[40%] h-[5%] my-3 self-center text-slate-900 placeholder:text-slate-900 text-center font-bold font-roboto rounded-md focus:outline-none focus:placeholder-transparent duration-300 shadow-md"></input>
        <input value={nickname} onChange={(event)=>{setNickname(event.target.value)}} placeholder="Nickname" className="w-[40%] h-[5%] my-3 self-center text-slate-900 placeholder:text-slate-900 text-center font-bold font-roboto rounded-md focus:outline-none focus:placeholder-transparent duration-300 shadow-md"></input>
        <input value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder="Password" className="w-[40%] h-[5%] my-3 self-center text-slate-900 placeholder:text-slate-900 text-center font-bold font-roboto rounded-md focus:outline-none focus:placeholder-transparent duration-300 shadow-md"></input>
        <input value={country} onChange={(event)=>{setCountry(event.target.value)}} placeholder="Country" className="w-[40%] h-[5%] my-3 self-center text-slate-900 placeholder:text-slate-900 text-center font-bold font-roboto rounded-md focus:outline-none focus:placeholder-transparent duration-300 shadow-md"></input>
        <input value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="E-mail" className="w-[40%] h-[5%] my-3 self-center text-slate-900 placeholder:text-slate-900 text-center font-bold font-roboto rounded-md focus:outline-none focus:placeholder-transparent duration-300 shadow-md"></input>
        <button type="submit" className=" w-[40%] mt-10 self-center border rounded-md bg-slate-900 text-white">Register</button>
      </form>
    </section>
  );
}

export { Register }