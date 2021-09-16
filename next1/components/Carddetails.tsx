import React from 'react'
import Link from 'next/link';

import styles from '../styles/Carddetails.module.scss';
import Recentpost from './Recentpost';

import pic1 from '../public/bar-graph.png'
import pic2 from '../public/books.png'
import pic3 from '../public/photo-editing.png'

export default function Carddetails({postid ,srcimg}) {
    const {API_URL} =process.env
    return (
        <>
        <div className="container">
            <p className="py-5">All posts</p>
            <div className="row d-flex flex-row justify-content-center">
                <div className={`col-md-8 card ${styles.cardid__1}`}>
                    <div className="row py-2">
                        <div className="col-md-1 ">
                        <i className="fas fa-user-circle text-secondary fs-2"></i>
                        </div>
                        <div className={`col-md-4  ${styles.detailspara__1} `} >
                            <small className="text-start">Admin <span>.Aug 11 .1 min</span></small>
                        </div>
                        <div className="col-md-7 text-end">
                        <i className="fas fa-ellipsis-v text-dark"></i>
                        </div>

                    </div>
                    <h1 className={` py-3 ${styles.headcard__4}`}>{postid.title}</h1>
                    <p className={`${styles.paracard__5}`} dangerouslySetInnerHTML={{__html: postid.description}}/>
                    <img src={API_URL + postid.image.url} alt="imageid"/>
                    <p className={` py-3 ${styles.paracard__4}`}>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.</p>


                    <div className="row">
                        <div className="col">
                            <div className={` py-3 ${styles.mycontent__left} `} >
                                <p className="fs-5 ps-3">“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”</p>
                            </div>
                        </div>
                    </div>


                    <p className={` pt-2 ${styles.paradis__1}`}>You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.</p>

                    <div>
                    <h3 className={`py-3 ${styles.headdis__1}`}>Create Relevant Content</h3>

                    <p className={` ${styles.paradis__2}`}>{postid.content}</p>
                    </div>

                    <div className={` ${styles.social}`} >
                        <hr/>
                        <i className="fab fa-facebook-f me-5"></i>
                        <i className="fab fa-twitter me-5"></i>
                        <i className="fab fa-linkedin-in me-5"></i>
                        <i className="fas fa-link me-5"></i>

                        <hr/>
                    </div>
                    <div className="row py-4">
                        <div className={`col-md-2 d-flex flex-column ${styles.detailspara__2} `} >
                            <small className="text-start">0 Views</small>

                        </div>
                        <div className={`col-md-3 d-flex flex-column ${styles.detailspara__2} `} >
                            <small className="text-start">0 Comment</small>

                        </div>
                        <div className="col-md-7 text-end"> 
                            0 <i className="far fa-heart"></i>
                        </div>

                    </div>
                </div>
            </div>

            

            <div className="row d-flex justify-content-center py-5">
            <div className="col-md-10 ">
                <div className="row">
                    <div className="col-md-6">
                        <p className={`${styles.recenthead__1}`}>
                           <Link href="/"><a> Recent Posts</a></Link>
                            
                            </p>
                    </div>
                    <div className="col-md-6 text-end">
                    <p className={`${styles.recenthead__1}`}>
                           <Link href="/"><a>See All</a></Link>
                            
                            </p>
                    </div>

                </div>



                <div className="row">
                    <div className="col-md-4">
                        <Recentpost title="How reading changes your perspective" srcimg={pic1}/>
                    </div>
                    <div className="col-md-4">
                        <Recentpost title="The art of writing change your perspective" srcimg={pic2}/>
                    </div>
                    <div className="col-md-4">
                        <Recentpost title="You want your child to read these books" srcimg={pic3}/>
                    </div>
                </div>


            </div>
        </div>

                <div className="row d-flex justify-content-center py-5">
                <div className="col-md-8 d-flex flex-column justify-content-center">
                
                    
                        <p className={`${styles.comment__1}`}>Comment</p>
                        <hr/>
                        <p className={`text-center py-1 ${styles.commentpara__1} `}>Couldn’t Load Comments <br/>It looks like there was a technical problem. Try reconnecting or refreshing the page.</p>
                        <div className=" d-flex justify-content-center">
                        <div className={`btn  ${styles.detailbtn__2} `}>Refresh</div>
                        </div>
                    
                </div>
                

        </div>



        </div>
            
        </>
    )
}
