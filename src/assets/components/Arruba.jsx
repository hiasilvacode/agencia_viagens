import styles from '../styles/Arruba.module.css'
import ComponentsProps from './ComponentesProps'
import bandeira from '../images/bandeira-arruba.webp'
   
   
   function Arruba (){
        return (
          
         <div className={styles.fundo}>

<  ComponentsProps
    lugar="Arruba"
    texto="Castelos medievais, lindas floresta, boa cerveja, clima agradavel, comidas típicas, ambiente acolhedor, e etc."
    bandeira_pais={bandeira}
/>

</div>


        )
    }
    export default Arruba