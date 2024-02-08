import router from "../../App"
import { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import { context } from "../../context";

function Home() {
  const { session, closeSession, searchPosts, searchResult, readPost } = useContext(context);
  const [search, setSearch] = useState('');
  const [content, setContent] = useState('');

  
  useEffect(() => {
    setContent([])
    if (search) {
      if (search !== searchResult.search) {
        const timer = setTimeout(() => {
          searchPosts(search);
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [search, searchPosts, searchResult])
  
  useEffect(() => {
    let resp = []
    if (Array.isArray(searchResult.result)) {
      searchResult.result.forEach(element => {
        resp.push(
          (<div key={element.created_at} onClick={(event) => {readSelected(element._id)}} className=" p-3 shadow-sm border rounded-md hover:bg-slate-300 cursor-pointer duration-300">
              <h3 className=" mb-3 font-bold text-slate-900 text-xl">{element.title}</h3>
              <p>{element.created_at}</p>
          </div>)
        )
      });
      setContent(resp)
    };
    // eslint-disable-next-line
  }, [searchResult.result])

  async function readSelected(id) {
    await readPost(id);
    return router.navigate({ from: '/', to: 'read' });
  }

  return (
    <Fragment>
      <section className="flex flex-col justify-center items-center">
        {session && (
          <div className=" w-[10%] mt-10 mr-5 self-end border rounded-md bg-slate-900 text-center text-white hover:bg-slate-600 duration-300">
            <button onClick={()=>{closeSession()}}>Log Out</button>
          </div>
        )}
        <div className=" w-[70vw] my-10 flex justify-center">
          <input value={search} onChange={(event) => {setSearch(event.target.value)}} placeholder="Search" className=" w-[80%] text-center font-roboto placeholder:text-slate-900 font-bold rounded-md focus:outline-none shadow-md focus:placeholder-transparent duration-300"></input>
        </div>
        <section className=" w-[80%] h-[70vh] mt-5 p-10 overflow-y-auto rounded-md shadow-md">
          {content}
        </section>
      </section>
    </Fragment>
  );
}

export { Home };