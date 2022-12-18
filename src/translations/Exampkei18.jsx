import { useTranslation } from "react-i18next"
import styles from './header.module.css'
export const Header = () => {
    const {t, i18n} = useTranslation('common')
    return (
        <div className={styles.headerContainer}>
            <h1>{t('header.logo')}</h1>
            <nav>
                <ul>
                    <li>{t("header.nav_1")}</li>
                    <li>{t("header.nav_2")}</li>
                    <li>{t("header.nav_3")}</li>
                </ul>
            </nav>
            <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
            <button onClick={() => i18n.changeLanguage('he')}>he</button>
        </div>
    )
}

    // const hideBtn = () => {
    //     if (toggleRef.current && window.innerWidth < 800) {
    //          toggleRef.current.style.display = 'block';
    //     } else if (toggleRef.current && window.innerWidth > 800) {
    //         toggleRef.current.style.display = 'none'
    //     }
    //     if (listRef.current && window.innerWidth > 800) {
    //          listRef.current.style.display = 'block';
    //     } else if (listRef.current && window.innerWidth < 800) {
    //         listRef.current.style.display = 'none'
    //     }        
    // }

    // useEffect(() => {
    //     hideBtn()
    //     window.addEventListener('resize', hideBtn)
    //     return () => window.removeEventListener('resize', hideBtn)
    // }, [])