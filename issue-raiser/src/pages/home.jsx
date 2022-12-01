import Searchbar from "../components/searchBar";
import Logo from "../assets/png/logo-no-background.png";

export default function Home() {
    return (
        <div>
            <div className="w-100 bg-primary-400 p-1 flex justify-center items-center rounded-b-sm">
                <img className="h-10 p-1" src={Logo} />
            </div>
            <div className="m-7" >
            <Searchbar className="w-100" />
            </div>
        </div>
    );
}