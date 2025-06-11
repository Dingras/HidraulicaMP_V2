import PrincipalHome from '../../components/Home/PrincipalHome'
import About from '../../components/Home/About'
import BrandsSection from '../../components/Home/BrandsSection'
import ContactSection from '../../components/Home/ContactSection'
import TestimonialsSection from '../../components/Home/TestimonialsSection'
import WorkSeccion from '../../components/Home/WorkSection'
import InstagramSecction from '../../components/InstagramSecction/InstagramSecction'

const Home = () => {
    return (
        <>
            <PrincipalHome/>
            <About/>
            <BrandsSection/>
            <InstagramSecction/>
            <WorkSeccion/>
            <ContactSection/>
            <TestimonialsSection/>
        </>
    )
}

export default Home