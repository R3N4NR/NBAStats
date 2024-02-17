import styles from './styles.module.scss'

export const SearchBar = ({handleChange, value}) => {

    return (
        <div className={styles.formInput}>
            
            <input type="text" placeholder='Jimmy Butler, USA, Miami Heat' value={value} onChange={handleChange}/>
            
        </div>
    )
}