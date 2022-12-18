import IssueForms from "../components/IssueForms";
import Searchbar from "../components/SearchBar";
import React from "react";
import { useState} from "react";
import { useLocation } from "react-router-dom";

export default function Home() {

    function useQuery() {
        const { search } = useLocation();
      
        return React.useMemo(() => new URLSearchParams(search), [search]);
      }
    
      let query = useQuery();

    const [patientData, setPatientData] = useState({
        email: "",  
        patientName: "",
        patientNumber: "",
        department: "",
        issueContext: "",
        priority: "",
        roomId: query.get("room-no"),
      });

   const handlePatientDataChange = (e) => {
        setPatientData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSearchDataChange = (data) => {
        setPatientData((prevState)=> {
            return {
                ...prevState,
                department : data?.department,
                issueContext : data?.name
            }
        })
    }

    return (
        <div>
            <div className="mt-4 mx-4" >
            <Searchbar patientData={patientData} onPatientChange={handleSearchDataChange}  className="w-100" />
            </div>
            <div className="text-center mt-4 text-gray-700">
                OR
            </div>
            <IssueForms patientData={patientData} onPatientChange={handlePatientDataChange} ></IssueForms>
        </div>
    );
}