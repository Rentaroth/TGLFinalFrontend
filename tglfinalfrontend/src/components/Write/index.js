import { useEffect, useState, Fragment, useContext } from "react";
import { context } from "../../context";

function Write() {
  const { categories, tags, obtainCategories, obtainTags, createPost } = useContext(context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [cats, setCats] = useState('');
  const [tag, setTag] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  useEffect(() => {
    obtainCategories();
    obtainTags();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (Array.isArray(categories)) {
      let orgCat = [];
      categories.forEach(element => {
        orgCat.push(<option key={element._id} id={element._id} value={element.category}>{element.category}</option>)
      })
      setCats(orgCat);
    }
    if (Array.isArray(tags)) {
      let orgTag = [];
      tags.forEach(element => {
        orgTag.push(<option key={element._id} id={element._id} value={element.tag}>{element.tag}</option>)
      })
      setTag(orgTag);
    }
  }, [categories, tags])

  async function sendPost(event) {
    event.preventDefault();
    const finalCat = categories.filter(item => item.category === selectedCat)[0]
    const finalTag = tags.filter(item => item.tag === selectedTag)[0]
    await createPost({
      title,
      content,
      categoryId: finalCat._id,
      tagId: [finalTag._id],
    })
    
  }

  return (
    <Fragment>
      <section className=" w-[100%] h-[90vh] flex flex-col justify-center items-center">
        <form onSubmit={(event) => {sendPost(event)} } className=" w-[100%] h-[90%] p-10 flex flex-col items-center">
          <input value={title} onChange={(event) => {setTitle(event.target.value)}} placeholder="Title" className=" w-[50%] h-[5%] my-10 text-center text-xl font-helvetica shadow-md rounded-md focus:outline-none focus:placeholder-transparent duration-300"></input>
          <textarea value={content} onChange={(event) => {setContent(event.target.value)}} placeholder="Write your post here..." className=" w-[80%] h-[75%] p-5 shadow-md rounded-md focus:outline-none align-top resize-none overflow-y-auto focus:placeholder-transparent duration-300"></textarea>
          <div className=" w-[80%] h-[5%] mt-5 px-20 flex justify-between">
            <div>
              <h3 className="text-center">Categories</h3>
              <select value={selectedCat} onChange={(event) => {setSelectedCat(event.target.value)}} className=" p-2 font-bold shadow-md rounded-md focus:outline-none hover:bg-black hover:text-white">
                <option></option>
                {cats}
              </select>
            </div>
            <div>
              <h3 className="text-center">Tags</h3>
              <select value={selectedTag} onChange={(event) => {setSelectedTag(event.target.value)}} className=" p-2 font-bold shadow-md rounded-md focus:outline-none hover:bg-black hover:text-white">
                <option></option>
                {tag}
              </select>
            </div>
          </div>
          <button type="submit" className="mt-10 p-2 font-bold shadow-md rounded-md bg-black text-white cursor-pointer">Submit</button>
        </form>
      </section>
    </Fragment>
  );
}

export { Write };