import { useEffect, useState } from "react";
import { Route } from "@tanstack/react-router";
import { API_URL } from "./../lib/constants";

const initialPostState = {
  title: "No post found",
  body: "Nothing to see here",
  userId: null,
  id: null,
};

/**
 * Displays a single post
 * @see https://docs.noroff.dev/social-endpoints/posts
 */
export default function PostPage() {
  const [post, setPost] = useState([initialPostState]);

  useEffect(() => {
    const fetchData = async () => {
      try {
<<<<<<< HEAD
        // TIP: Get the ID from the search params in the URL
        const postId = window.location.pathname.split("/")[2];
        const token = localStorage.getItem("access_token");
        // TIP: Fetch the post from the API using the ID

        fetch(`${API_URL}/posts/${postId}`, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODEsIm5hbWUiOiJmcm9kbG8iLCJlbWFpbCI6ImZpcnN0Lmxhc3RAc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjk2MzI0NjI2fQ.RzasPhTGOgkBdavgA1eObqzH5udnxJWvEksh5iEJ1zE",
          },
        })
          .then((response) => response.json())
          .then((post) => setPost(post));

=======
>>>>>>> develop
        // TIP: Set the post in state
      } catch (error) {
        // TIP: Handle errors from the API
      } finally {
        // TIP: Set loading to false
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>{post?.title}</h1>
<<<<<<< HEAD
      <section>
        <p>{post?.body}</p>
        <img src={post?.media} alt="" />
      </section>
=======
>>>>>>> develop
    </>
  );
}
