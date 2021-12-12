import React from 'react'
import styles from '../styles/Achievements.module.scss';
const Alert = (params) => {

    const deleteAlert = (e) => {
        if (e.target && e.target.tagName === 'DIV') {
            e.target.style.display = 'none';
        }
    }
    return (
        <div onClick={deleteAlert}>
            <div className={styles.alert}>
                <span>Sorry! You have no Achievements yet</span>
            </div>
        </div>
    );
}

export default Alert;