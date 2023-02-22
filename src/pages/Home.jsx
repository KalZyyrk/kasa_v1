import Gallery from "../components/Gallery/Gallery";
import Banner from "../components/Banner";
import bannerImg from "../assets/IMGHome.png"

export default function Home() {
    return (
        <div className="wrapper home">
            <Banner imgSource={bannerImg} title='Chez vous, partout et ailleurs' />
            <Gallery />
        </div>
    );
}