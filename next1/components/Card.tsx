import React from "react";

import styles from "../styles/Card.module.scss";
import Link from "next/link";

const Card = ({ post }) => {
  const { API_URL } = process.env;
  return (
    <>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <a className={`${styles.all__1}`}>
          <div className="card ">
            <img
              src={API_URL + post.image.url}
              className="card-img-top"
              height="650px"
              alt="cardimage"
            />
            <div className="card-body">
              <div className="row py-2 d-flex flex-row">
                <div className="col-md-2 text-end">
                  <i className="fas fa-user-circle text-secondary fs-2"></i>
                </div>
                <div
                  className={`col-md-3 d-flex flex-column ${styles.avtarpara__1} `}
                >
                  <small className="text-start">Admin</small>
                  <span>
                    <small>Aug 11 .1 min</small>
                  </span>
                </div>
                <div className="col-md-7 text-end">
                  <i className="fas fa-ellipsis-v text-dark"></i>
                </div>
              </div>
              <h2 className={`card-title ${styles.Cardhead__1} `}>
                {post.title}
              </h2>
              <p
                className={`card-text pb-3 ${styles.Cardpara__1} `}
                dangerouslySetInnerHTML={{ __html: post.description }}
              />
              <hr />

              <div className="row py-2">
                <div
                  className={`col-md-2 d-flex flex-column ${styles.avtarpara__2} `}
                >
                  <small className="text-start">0 Views</small>
                </div>
                <div
                  className={`col-md-3 d-flex flex-column ${styles.avtarpara__2} `}
                >
                  <small className="text-start">0 Comment</small>
                </div>
                <div className="col-md-7 text-end">
                  0 <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};
export default Card;
