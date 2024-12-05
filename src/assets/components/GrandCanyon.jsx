import styles from '../styles/GrandCanyon.module.css'
import ComponentsProps from './ComponentesProps'
import bandeira from '../images/bandeiraeua.webp'
   
   
   function GrandCanyon (){
        return (
            <div className={styles.fundo}>

            <ComponentsProps
                lugar="GrandCanyon"
                texto="Castelos medievais, lindas floresta, boa cerveja, clima agradavel, comidas típicas, ambiente acolhedor, e etc."
                bandeira_pais={bandeira}
            />

        </div>

        )
    }
    export default GrandCanyon