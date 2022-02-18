import React from 'react';
import Image from 'next/image';

const JoinToCommunity = ({ styles }) => {
  return (
    <div className={styles.community_container}>
      <div className={styles.row_one}>
        <Image
          width={280}
          height={180}
          src="https://res.cloudinary.com/dckunlwcb/image/upload/v1639358145/Cloud-Networking_uhe4il.png"
          alt="networking image"
        />
      </div>
      <div className={styles.row_two}>
        <Image
          width={300}
          height={180}
          src="https://res.cloudinary.com/dckunlwcb/image/upload/v1639358145/Cloud-Forum_awhirz.png"
          alt="challenges image"
        />
        <Image
          width={300}
          height={180}
          src="https://res.cloudinary.com/dckunlwcb/image/upload/v1639358145/Cloud-Challenges_evydar.png"
          alt="forum image"
        />
      </div>
      <div className={styles.row_three}>
        <Image
          width={500}
          height={500}
          src="https://res.cloudinary.com/dckunlwcb/image/upload/v1639358145/main-asset_1_k27fr8.png"
          alt="laptop_girl image"
        />
      </div>
    </div>
  );
};

export default JoinToCommunity;
