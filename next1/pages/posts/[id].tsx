import React from "react";
import fetch from "isomorphic-unfetch";

import Carddetails from "../../components/Carddetails";

const postdetails = ({ postid }) => {
  console.log(postid);
  return (
    <>
      <Carddetails key={postid.id} postid={postid} />
    </>
  );
};
export default postdetails;

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const { id } = context.query;
  const res = await fetch(`${API_URL}/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      postid: data,
    },
  };
}
