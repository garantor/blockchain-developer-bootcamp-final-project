import Feed from "./Feed";
function Home({posts}) {
  return (
    <main className="Home">
      <h1> HOME sweet Home </h1>
      {/* <login /> */}
      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{marginTop: "2rem"}}>
          No posts to display.
        </p>
      )} */}
    </main>
  );
}

export default Home;
