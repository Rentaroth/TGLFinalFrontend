import { useContext, useState } from "react";
import { context } from "../../context";
import { Fragment } from "react";

function Read() {
  const { currentPost, likeaPost, repost, createComment } = useContext(context);
  const [comment, setComment] = useState('');

  return (
    <Fragment>
      <section>
        <section className=" w-[100%] h-auto flex flex-col justify-center items-center">
          <div className=" w-[100%] h-auto p-10 flex flex-col items-center">
            <h1 className=" w-[70%] h-10 my-10 text-center text-4xl font-black font-helvetica">{currentPost.title}</h1>
            <p className=" w-[100%] h-auto">{currentPost.content}</p>
            {/* <div className=" self-end flex justify-end gap-10">
              <p>TheBestAuthor73</p>
              <p>01-01-2023</p>
            </div> */}
          </div>
          <div className=" w-[20%] self-end flex justify-evenly">
            <button onClick={() => {likeaPost(currentPost._id)}} className=" w-[40%] shadow-md rounded-md font-bold hover:bg-slate-300 cursor-pointer">Like</button>
            <button onClick={() => {repost(currentPost._id)}} className=" w-[40%] shadow-md rounded-md font-bold hover:bg-slate-300 cursor-pointer">Repost</button>
          </div>
        </section>
        <section className="w-[100%] h-auto mt-10 flex flex-col justify-center items-center">
          <h1 className=" self-center font-bold">Comments</h1>
          <div className=" w-[100%] h-auto p-10 flex flex-col items-center shadow-md">
            <form onSubmit={(event) => {event.preventDefault(); createComment(currentPost._id, comment);; setComment('')}} className=" p-5 shadow-md rounded-md">
              <textarea value={comment} onChange={(event) => {setComment(event.target.value)}} placeholder="Write your comment here..." className=" w-[70vw] p-3 text-md font-helvetica resize-none shadow-md rounded-md focus:outline-none focus:placeholder-transparent"></textarea>
              <div className="flex justify-end">
                <button type="submit" className=" w-[10%] h-[5%] mt-5 bg-black text-white rounded-md">Send</button>
              </div>
            </form>
          </div>
        </section>
      </section>
      
    </Fragment>
  );
}

export { Read };