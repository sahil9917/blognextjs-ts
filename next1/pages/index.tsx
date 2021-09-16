import styles from "../styles/Card.module.scss";

import fetch from "isomorphic-unfetch";

import Card from "../components/Card";
import Header from "../components/Header";

const Home = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="container mb-5 ">
        <div className="row d-flex justify-content-center">
          <p className={`text-secondary  pt-5 ${styles.postpara__1} `}>
            All Posts
          </p>
          {posts.map((post) => {
            return (
              <div className="col-md-5 py-2" key={post.id}>
                <Card post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
