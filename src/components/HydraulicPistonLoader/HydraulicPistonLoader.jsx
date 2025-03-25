// Import CSS
import './HydraulicPistonLoader.css'
// Import Image
import cilindro_hidraulico_1 from '../../assets/Loader/icono-cilindro-hidraulico-1.png'
import cilindro_hidraulico_2 from '../../assets/Loader/icono-cilindro-hidraulico-2.png'
import cilindro_hidraulico_3 from '../../assets/Loader/icono-cilindro-hidraulico-3.png'

// Component
const HydraulicPistonLoader = () => {
    return (
        <div className="image-loader">
            <img src={cilindro_hidraulico_1} alt="loader-frame-1" className="loader-image frame-1" />
            <img src={cilindro_hidraulico_2} alt="loader-frame-2" className="loader-image frame-2" />
            <img src={cilindro_hidraulico_3} alt="loader-frame-3" className="loader-image frame-3" />
            <div className="loading-text">Cargando...</div>
        </div>
    )
}

export default HydraulicPistonLoader;
