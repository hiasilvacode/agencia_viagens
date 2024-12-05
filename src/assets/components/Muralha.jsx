import styles from '../styles/Muralha.module.css'
import ComponentsProps from './ComponentesProps'
import bandeira from '../images/bandeira-china.jpg'
   
   
   
   function Muralha (){
        return (
            <div className={styles.fundo}>

            <ComponentsProps
                lugar="Muralha"
                texto="Castelos medievais, lindas floresta, boa cerveja, clima agradavel, comidas típicas, ambiente acolhedor, e etc."
                bandeira_pais={bandeira}
            />

        </div>

        )
    }
    export default Muralha