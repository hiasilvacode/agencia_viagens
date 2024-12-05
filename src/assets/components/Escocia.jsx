import styles from '../styles/Escocia.module.css'
import ComponentsProps from './ComponentesProps'
import bandeira from '../images/bandeira-escocia.webp'
function Escocia() {

    return (
        <div className={styles.fundo}>

            <ComponentsProps
                lugar="Escócia"
                texto="Castelos medievais, lindas floresta, boa cerveja, clima agradavel, comidas típicas, ambiente acolhedor, e etc."
                bandeira_pais={bandeira}
            />

        </div>

    )
}
export default Escocia