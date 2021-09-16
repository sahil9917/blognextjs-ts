import React from 'react'
import styles from '../styles/Carddetails.module.scss';
import Image from 'next/image'



export default function Recentpost(props) {
    return (
        <>

            <div className="card" >
            <Image src={props.srcimg} className="card-img-top" alt="recent card" height="200px"/>
            <div className="card-body">
                <h5 className={`card-title ${styles.cardtitle2__1}`}>{props.title}</h5>
                <div className="row py-2">
                        <div className={`col-md-3 d-flex flex-column ${styles.carddetails2__1} `} >
                            <small className="text-start"><i className="far fa-eye"> 0</i> </small>

                        </div>
                        <div className={`col-md-3 d-flex flex-column ${styles.carddetails2__2} `} >
                            <small className="text-start"><i className="far fa-comment-alt"> 0</i> </small>

                        </div>
                        <div className="col-md-6 text-end">
                        0 <i className="far fa-heart"></i>
                        </div>

                    </div>
                
            </div>
            </div>
            
        </>
    )
}
