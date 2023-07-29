import styles from "../src/styles//MemberShip.module.css"
import React from 'react'

export default function MemberShip() {
    return (
        <section className={styles.MemberShipSection}>
            <div className={styles.memberShip}>
                <div></div>
            </div>
            <div className={styles.overlaps}>
                <h1>WATCH OUR STORIES</h1>
                <div className={styles.overlapsHeading}>MEMBERS SUCCESS <h2> STORIES</h2></div>
                <div className={styles.overlapsImages}>
                    <div>
                        <img className={styles.MemberShipBg1} src="../dazko/member1.webp" alt="" />
                        <img className={styles.videoIcons} src="../dazko/videoIcon.jpg" alt="video" />
                        <h1>From 264 lbs to 154 lbs, A Great transformation in my life.</h1>
                    </div>

                    <div className={styles.secondImagesMember}>
                        <img className={styles.MemberShipBg2} src="../dazko/bg1.webp" alt="" />
                        <img className={styles.videoIconsSecond} src="../dazko/videoIcon.jpg" alt="video" />
                        <h1>I am Sheryl Johnson Proved that 50 Really Is the New 30</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}