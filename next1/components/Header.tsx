import React from 'react'
import styles from '../styles/Header.module.scss';

export default function Header() {
    return (
        <>
        <div className={`${styles.Header__1}`}>
            
        <div className="container " >
                    
                    <div className="row d-flex justify-content-center">
                        
                        <div className={`col-md-6 card text-center ${styles.card__1}`}>
                        <h1 className={`display-5 ${styles.head__1}`}>THE BOOK LOVER</h1>
                        <p className={`${styles.para__1}`}>READ ALL ABOUT IT</p>
                        
                        </div>
                       

                    </div>

        </div>

    </div>
            
        </>
    )
}
