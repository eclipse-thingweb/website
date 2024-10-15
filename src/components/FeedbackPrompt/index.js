import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'


export default function FeedbackPrompt() {

    return (
        <div className={styles.feedbackPrompt}>
            <div className={styles.feedbackPrompt__text}>
                <p className={styles.text1}>Do you like our new website?</p>
                <p className={styles.text2}>Leave us some feedback!</p>
            </div>
            <div className={styles.feedbackPrompt__btn}>
                <a href='https://github.com/orgs/eclipse-thingweb/discussions/8'>
                    <FontAwesomeIcon icon={faCommentDots} className={styles.icon} />
                </a>
            </div>
        </div>
    );
}