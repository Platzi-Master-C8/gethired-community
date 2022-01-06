import React from 'react'
import Image from 'next/image';
import styles from '../styles/Achievements.module.scss';

function Card({title, img, description, completed, date}) {
    return (
        <div>
            <div className={`${styles.card_container} ${completed && 'success'}`}>
                <Image width= {150} height= {100} className={styles.card_img} src={img} alt='description img'/>
                <section className={styles.card_text}>
                    <h3 className={styles.card_title}>{title}</h3>
                    {
                        completed ? <p className={styles.card_description}>Completed in {date}!</p>
                            :
                            <p className={styles.card_description}>{description}</p>
                    }
                </section>
            </div>
        </div>
    )
}

export default Card;
