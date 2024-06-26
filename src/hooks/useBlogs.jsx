import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=sagor_cnits_73eb557b53820")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return blogs;
};

export default useBlogs;
