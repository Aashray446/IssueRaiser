import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useRouteError } from "react-router-dom";
import { useToggleError } from "../services/ErrorContext";
import { getTicket, deleteTicket} from "../services/ticket";
// import Timeline from "./Timeline";
const PendingRequest = () => {
  
  const TimelineData = [
    {
      date: "17 February 2022",
      Action: "Attended by support executives",
    },
    {
      date: "19 February 2022",
      Action: "Assigned to cleaning department",
    },
    {
      date: "20 February 2022",
      Action: "Action Pending",
    },
  ];
 
  const toggle = useToggleError();
  let navigate = useNavigate();
  const { id } = useParams();
  const [patientData, setPatientData] = useState([])


  useEffect(()=> {
    getTicket(id).then((ticket)=> {
      ticket.createdAt = new Date(ticket.createdAt).toLocaleTimeString() + " " + new Date(ticket.createdAt).toLocaleDateString()
      setPatientData(ticket)
      if(ticket.status == "closed") {
        navigate('/completedRequest/'+id) 
      }

    })
    .catch( (error)=> {
      toggle(
        {
          error: true,
          message: error,
        }
      );
      
    })
  }, [])
  
 
  const cancelTicket = () => {
    deleteTicket(id).then(()=> {
      toggle({error: true,message: "Ticket Cancelled"});
      navigate('/?room-no='+patientData.RoomId) 
    })
    .catch( (error)=> {
      toggle({error: true,message: error});
    })
  };



  return (
    <div className="p-8">
      <div className="mb-2 text-center">
        ID : <span className="text-sm"> {id}</span>
      </div>
      <div className="border-solid border-4 p-5 border-rounded hover:border-dotted mb-8">
        <div className="text-lg">Average Response Time</div>
        <div className="mt-5 text-sm">
          <i>48 mins</i>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-2">
        <div className="mb-2 ml-5">
          <h2 className="md:text-sm tracking-normal text-xs font-semibold">
            Patient Name:
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
            {patientData.patientName}
          </p>
        </div>
        <div className="mb-2 ml-5">
          <h2 className="md:text-sm tracking-normal text-xs font-semibold">
            Issue Opened Date: 
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
          {patientData.createdAt}
          </p>
        </div>
        <div className="mb-2 ml-5">
          <h2 className="md:text-sm tracking-normal text-xs font-semibold">
            Issue Context:
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
            {patientData.issueContext}
          </p>
        </div>
      </div>
      
      <div className="overflow-y-auto">
        <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-10">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {TimelineData[0].date}
            </time>
            <h3 className="text-sm  text-gray-900">{TimelineData[0].Action}</h3>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {TimelineData[1].date}
            </time>
            <h3 className="text-sm  text-gray-900">{TimelineData[1].Action}</h3>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {TimelineData[2].date}
            </time>
            <h3 className="text-sm  text-gray-900">{TimelineData[2].Action}</h3>
          </li>{" "}
        </ol>
      </div>
        <button
          onClick={cancelTicket}
          className=" border border-red-400 text-red-400 hover:bg-red-400 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-2"
        >
          Cancel
        </button>
    </div>
  );
};

export default PendingRequest;
