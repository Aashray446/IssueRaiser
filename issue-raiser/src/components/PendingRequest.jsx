import React from "react";
import { useParams } from "react-router-dom";
// import Timeline from "./Timeline";
const PendingRequest = () => {
  const { id } = useParams();

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
  const patientData = {
    firstName: "Indira Kumar",
    lastName: "A K",
    department: "Room Services",
    issueContext: "Fan not working",
  };
  return (
    <div className="p-8">
      <div className="mb-2">
        ID : <span className="text-sm"> {id}</span>
      </div>
      <div className="border-solid border-4 p-5 border-rounded hover:border-dotted">
        <div className="text-lg">Average Response Time</div>
        <div className="mt-5 text-sm">
          <i>48 mins</i>
        </div>
      </div>
      <div className="p-5 pl-0">
        <p>
          <b>Issue Context:</b> {patientData.issueContext}
        </p>
        <p>
          <b>Department:</b> {patientData.department}
        </p>
        <p>
          <b>Patient Name:</b> {patientData.firstName + patientData.lastName}
        </p>
      </div>
      <div className="overflow-y-auto">
        <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-10">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {TimelineData[0].date}
            </time>
            <h3 class="text-sm  text-gray-900">{TimelineData[0].Action}</h3>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {TimelineData[1].date}
            </time>
            <h3 class="text-sm  text-gray-900">{TimelineData[1].Action}</h3>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {TimelineData[2].date}
            </time>
            <h3 class="text-sm  text-gray-900">{TimelineData[2].Action}</h3>
          </li>{" "}
        </ol>
      </div>
      {/* Here if this button is clicked, a delete request for this particular
      issue will be called */}
      <form action="post">
        <button
          type="submit"
          className=" border border-red-400 text-red-400 hover:bg-red-400 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-2"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PendingRequest;
