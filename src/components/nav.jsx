import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


const nav = ({ onSearch, setAccess }) => {

    const handleLogout = () => {
        setAccess(false);
        }

return (
    <div>
        
        <button>
            <Link to = "/about" >About</Link>
        </button>
        <button>
            <Link to = "/home" >Home</Link>
        </button>

        <button onClick={handleLogout}>Log Out</button>
        <SearchBar onSearch={onSearch}/>
    </div>
)

}

export default nav;