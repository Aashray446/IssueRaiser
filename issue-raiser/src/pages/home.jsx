import IssueForms from "../components/IssueForms";
import Searchbar from "../components/SearchBar";

export default function Home() {
    return (
        <div>
            <div className="mt-4 mx-4" >
            <Searchbar className="w-100" />
            </div>
            <div className="text-center mt-4 text-gray-700">
                OR
            </div>
            <IssueForms></IssueForms>
        </div>
    );
}