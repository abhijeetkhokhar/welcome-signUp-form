import React from 'react'
import robot from './robo.avif';
import styles from './Introduction.module.css'
export default function Introduction({title}) {
  return (
    <div className={styles.welcome}>
      <img src={robot} alt="robot"  className={styles.photo}/>
       <p><b>Name:</b>{title}</p>
       <p><b>Age:</b>18</p>
       <p><b>Phone:</b>38473933489</p>
       <p><b>Profession</b>Developer</p>

    </div>
  )
}
