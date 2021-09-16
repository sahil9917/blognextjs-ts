import React from 'react'
import styles from '../styles/footer.module.scss';

function Footer() {
    return (
        <>
            <footer className={`  ${styles.footer__1}`} >
                <div className={`container  ${styles.footer__2}`}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 ">
                <p className={`text-white fs-1 pt-5 ${styles.footpara__1}`}>
                Subscribe here to get my latest posts
                </p>
                <p className={`text-white ${styles.footpara__2}`}>Enter your email here*</p>
                <div className="input-group mb-3 pb-5">
                    
                    <input type="text" className={`form-control ${styles.footsearch__1}`}  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span className={`input-group-text  text-white ${styles.footsearch__2}`} id="basic-addon2">Join</span>
                </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-7 text-center">
                    <p className="text-white ">© 2023 by The Book Lover. Proudly created with <span className="text-decoration-underline">Wix.com</span></p>

                </div>
                <div className="col-md-4 text-end ">
                <i className="fab fa-facebook-f text-white fs-5 px-2"></i>
                <i className="fab fa-twitter text-white fs-5 px-2"></i>
                </div>

            </div>
        </div>
            

            </footer>
        </>
    )
}

export default Footer;
