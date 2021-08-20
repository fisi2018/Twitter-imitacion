import "./Home.css";
import {NavPerfil} from "../components/NavPerfil";
import { NewsTwitter } from "../components/NewsTwitter";
import { Trending } from "../components/Trending";
export const Home=()=>{
    return(
        <div className="container-login">
            <div className="container-main-home" >
                <NavPerfil/>
                <NewsTwitter/>
                <Trending/>
            </div>
        </div>
    )
}