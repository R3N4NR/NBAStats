import { SideBar } from '../../components/SideBar'
import styles from './index.module.scss'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'

export const Teams = () => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY;
            const startFade = 100;

            if (scrollPosition > startFade) {
                setFade(true);
            } else {
                setFade(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    console.log(fade)
    return (
        <>
            <Helmet>
                <title>NBA - Teams</title>
            </Helmet>
            <SideBar />
            <div className={`${styles.teamsBody} ${fade ? styles.fadeOut : ''}`}>
                <h1>Teams</h1>
                <div className={styles.teamsBoard}>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                    <div className={styles.team}></div>
                </div>
            </div>
        </>
    )
}
