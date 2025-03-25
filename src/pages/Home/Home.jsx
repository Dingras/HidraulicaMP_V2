import PrincipalHome from '../../components/Home/PrincipalHome'
import About from '../../components/Home/About'
import BrandsSection from '../../components/Home/BrandsSection'
import ContactSection from '../../components/Home/ContactSection'
import TestimonialsSection from '../../components/Home/TestimonialsSection'
import WorkSeccion from '../../components/Home/WorkSection'

const Home = () => {
    return (
        <>
            <PrincipalHome/>
            <About/>
            <BrandsSection/>
            <WorkSeccion/>
            <ContactSection/>
            <TestimonialsSection/>
        </>
    )
}

export default Home