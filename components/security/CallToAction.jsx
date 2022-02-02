import React from 'react'
import Laptop from "../../public/icons/laptop.png";
import JavaScript from "../../public/icons/JavaScript.png";
import Clock from "../../public/icons/clock.png";
import Image from 'next/image';

export const CallToAction = ({styles}) => {
  return (
    <div className={styles.list_cards}>
          <div className={styles.list_cards_item}>
            <p className={styles.texts}>Learn Online Whenever You Want</p>
            <Image src={Laptop} alt="laptop image" />
          </div>
          <div className={styles.list_cards_item}>
            <Image src={JavaScript} alt="laptop image" />
            <p className={styles.texts}>Learn Javascript by Solving Tasks</p>
          </div>
          <div className={styles.list_cards_item}>
            <p className={styles.texts}>Instant Verification with Testing</p>
            <Image src={Clock} alt="laptop image" />
          </div>
    </div>
  )
}
