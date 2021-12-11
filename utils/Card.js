import React from 'react'
import Image from 'next/image';

function Card({title, img, description, completed, date}) {
    return (
        <div>
            <div className={`card-container ${completed && 'success'}`}>
                <Image className='card-img' src={img} alt='description img'/>
                <section className='card-text'>
                    <h3 className='card-title'>{title}</h3>
                    {
                        completed ? <p className='card-description'>Completed in {date}!</p>
                            :
                            <p className='card-description'>{description}</p>
                    }
                </section>
            </div>
        </div>
    )
}

export default Card;
