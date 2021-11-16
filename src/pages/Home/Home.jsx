import SearchBar from "../../Components/SearchBar";
import './Home.css'
import { DiGithubFull } from 'react-icons/di'


function Home(){
    return (
        <div className="home-main-container">
            <SearchBar />
            <div className="poweredby-container">
                <p>Powered by:</p>
                <DiGithubFull  className="github-powered"/>
            </div>
        </div>
    );
}

export default Home;