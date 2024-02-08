import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "@tanstack/react-router";
import jwt_decode from "jwt-decode";

const URL = 'http://127.0.0.1:8080/'

const context = createContext()



function ContextProvider(props) {
  const [session, setSession] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [currentPost, setCurrentPost] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [categories, setCategories] = useState('');
  const [tags, setTags] = useState('');

  useEffect(()=>{
    const validToken = localStorage.getItem('session')
    if (validToken) {
      try {
        const decoded = jwt_decode(validToken);
        setSession(validToken);
        setUserInfo(decoded);
      } catch (error) {
        console.error(error);
      }
    }
  }, [])
  
  async function login(credentials) {
    try {
      await axios({
        method: 'post',
        url: URL + 'login',
        data: { data: credentials },
      })
      .then((response) => {
        saveSession(response.data.body);
      });
    } catch (error) {
      console.error(error)
    }
  };

  function saveSession(token) {
    try {
      setSession(token)
      localStorage.setItem('session', token);
    } catch (error) {
      console.error(error);
    };
  }

  function closeSession() {
    try {
      localStorage.removeItem('session');
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser(data) {
    try {
      await axios({
        method: 'post',
        url: URL + 'users',
        data: { data },
      })
      .then((response) => {
        login({ nickname: data.nickname, password: data.password });
        redirect('/');
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function searchPosts(keyword) {
    try {
      await axios({
        method: 'post',
        url: URL + 'searchbar',
        data: { data: {
          search_title: keyword
        } },
      }).then(response => {
        setSearchResult({result: response.data.body, search: keyword});
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function createPost(info) {
    try {
      await axios({
        method: 'post',
        url: URL + 'posts',
        data: {
          data: {
            title: info.title,
            content: info.content,
            status: 'active',
            user_id: userInfo._id,
            category_id: info.categoryId,
            tag_id: info.tagId,
          }
        }
      })
    } catch (error) {
      
    }
  }

  async function readPost(id) {
    await axios({
      method: 'get',
      url: URL + 'posts/' + id,
    }).then(response => {
      setCurrentPost(response.data.body)
    })
  }

  async function likeaPost(postId) {
    const userId = userInfo._id;
    try {
      await axios({
        method: 'post',
        url: URL + 'likes/' + userId,
        data: { data: { post_id: postId } }
      });
    } catch (error) {
      console.log('Ya le diste like a esta wea!')
    }
  }

  async function repost(postId) {
    const userId = userInfo._id;
    try {
      await axios({
        method: 'post',
        url: URL + 'repost/' + userId,
        data: { data: { post_id: postId } },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function createComment(postId, payload) {
    const userId = userInfo._id;
    try {
      await axios({
        method: 'post',
        url: URL + 'comments',
        data: { data: {
          comment: payload,
          user_id: userId,
          post_id: postId,
        } },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function obtainCategories() {
    try {
      await axios({
        method: 'get',
        url: URL + 'categories',
      }).then(response => {
        setCategories(response.data.body)
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function obtainTags() {
    try {
      await axios({
        method: 'get',
        url: URL + 'tags',
      }).then(response => {
        setTags(response.data.body)
      })
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <context.Provider value= {{
      login,
      closeSession,
      session,
      createUser,
      searchPosts,
      searchResult,
      readPost,
      currentPost,
      userInfo,
      likeaPost,
      repost,
      createComment,
      createPost,
      obtainCategories,
      categories,
      obtainTags,
      tags,
    }}>
      {props.children}
    </context.Provider>
  );
}

export { context, ContextProvider }