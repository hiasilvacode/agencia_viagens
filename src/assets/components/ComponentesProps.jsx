import styles from '../styles/ComponentesProps.module.css'

function ComponentsProps ({lugar,texto,bandeira_pais}){
    return (

        <div className={styles.Corpo_Props} >
            <h2>Venha conhecer esse lugar incrível: {lugar}  !!!</h2>
            <p>{texto}</p>
            <img src={bandeira_pais} alt=""  />

        </div>
    )
}
export default ComponentsProps