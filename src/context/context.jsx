import { useEffect, useState } from "react";
import { createContext } from "react";

// Create the Context
export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchAllBlogs() {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data && data?.posts) setBlogs(data?.posts);
        setLoading(false);
      });
  }


  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <GlobalContext.Provider value={{ blogs, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
