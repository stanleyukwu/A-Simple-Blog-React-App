import BlogList from "./Blog_List";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    Error,
  } = useFetch(" http://localhost:8000/blogs");

  return (
    <div className="home">
      {Error && <p>{Error}</p>}
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs"  />
      )}
    </div>
  );
};

export default Home;
