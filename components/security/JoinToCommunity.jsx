import React from 'react'
import Image from 'next/image'

import challenges from "../../public/icons/challenges.png";
import networking from "../../public/icons/networking.png";
import forum from "../../public/icons/forum.png";
import laptop_girl from "../../public/icons/laptop_girl.png";

const JoinToCommunity = ({styles}) => {
  return (
    <div className={styles.community_container}>
      <h1>Join our Community</h1>
      <div className={styles.row_one}>
      <Image src={networking} alt="networking image" />
      </div>
      <div className={styles.row_two}>
      <Image src={challenges} alt="challenges image" />
      <Image src={forum} alt="forum image" />
      </div>
      <div className={styles.row_three}>
      <Image src={laptop_girl} alt="laptop_girl image" />
      </div>
    </div>
  )
}

export default JoinToCommunity
