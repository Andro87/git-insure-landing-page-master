import styles from './layout.module.css'

export default function Layout (props){

    const{position,children}=props

    return <div className={`${styles.layout} ${styles[position]}`} >{children}</div>
}