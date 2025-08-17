import HeroHeader from "./component/main"
import Header from "./component/header"
import Slider from "./component/slide"
import Boxes from "./component/card"
import Products from "./component/shop"
import ParallaxSection from "./component/parallax"
import Fourboxes from "./component/boxes"
import WhoAreWe from "./component/info"
import Footer from "./component/footer"

export default function Page() {
    return (

        <>
            <Header />
            <HeroHeader />
            <Slider/>
            <Boxes/>
            <Products/>
            <ParallaxSection/>
            <Fourboxes/>
            <WhoAreWe/>
            <Footer/>
        </>)

}