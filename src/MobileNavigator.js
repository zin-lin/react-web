
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch } from "@fortawesome/free-solid-svg-icons";



const searcher = () => {

    

}

export default function MobileNavigation(){
    
    return (
        <div id="MobileNav" className="mobile-nav">
        <form id = "Secko">
        <input className="navbar-input" placeholder="Search ..."></input>
        <button className="navbar-button" style={{color:"#fff"}}
        ><FontAwesomeIcon className="nav-components" icon={faSearch}
        style={{marginRight:10}}
        />Search</button></form>
        </div>
    );

}
