import Footer from '../../components/footer/footer';
import WebHeader from '../../components/webHeader/webHeader';
import Hero from './hero/hero';
import './home.scss';
import Involved from './involved/involved';
import Mission from './mission/mission';
import Soon from './soon/soon';

const Home = () => {
    return (
        <div className="home">
            <WebHeader />
            <Hero />
            <Mission />
            <Soon />
            <Involved />
            <Footer />
        </div>
    )
}

export default Home;