import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
// import Timeline from "./Timeline";
const CompletedRequest = () => {
  const { id } = useParams();
  //   Here we will make a get request and fetch the TimelineData array
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
      Action: "Issue Resolved",
    },
  ];
  const dummyData = {
    firstName: "Indira Kumar",
    lastName: "A K",
    department: "Room Services",
    issueContext:
      "Lorem ipsum mpor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    openedDate: "17-02-2022",
    closedDate: "20-02-2022",
  };
  const [patientData, setPatientData] = useState({
    ...dummyData,
  });
  function handleDataChange(e) {
    setPatientData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleFeedbackSubmit(e) {
    e.preventDefault();

    // here a put request for update patientData with feedback
  }
  return (
    <div className="p-8">
      <div className="mb-2 text-center">
        ID : <span className="text-sm"> {id}</span>
      </div>
      <div className="border-solid border-4 p-5 border-rounded hover:border-dotted text-center mb-8">
        <div className="text-lg">Congratulations!</div>
        <div className="mt-5 text-sm">
          <i>Your problem has been addressed</i>
        </div>
      </div>
      <p className="mt-5">
        <b>Issue Summary:</b>
      </p>
      <div className="grid grid-cols-2 mt-2">
        <div className="mb-2 ml-5">
          <h2 className="md:text-sm tracking-normal text-xs font-semibold">
            Patient Name:
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
            {patientData.firstName + patientData.lastName}
          </p>
        </div>
        <div className="mb-2 ml-5">
          <h2 className="md:text-sm tracking-normal text-xs font-semibold">
            Issue Opened Date:
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
            {patientData.openedDate}
          </p>
        </div>
        <div className="mb-2 ml-5">
          <h2 className="md:text-sm tracking-normal text-xs font-semibold">
            Issue Closed Date:
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
            {patientData.closedDate}
          </p>
        </div>
      </div>
      <div className="mb-8 ml-5">
          <h2 className="md:text-sm tracking-normal text-xs font-semibold">
            Issue Context:
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
            {patientData.issueContext}
          </p>
        </div>
      <p>
        <b>Time Line:</b>
      </p>
      <div className="overflow-y-auto">
        <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-5">
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
      <div className="">
        <p>
          <b>Feedback:</b>
        </p>
      </div>
      <form action="post" onSubmit={(e) => handleFeedbackSubmit(e)}>
        <textarea
          id="feedback"
          rows="4"
          className="block p-2.5 w-full text-sm mt-5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your Feedback here..."
          value={patientData.feedback}
          onChange={(e) => handleDataChange(e)}
          name="feedback"
        ></textarea>
        <button
          type="submit"
          className="bg-primary-400 text-white hover:bg-primary-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-2"
        >
          Submit Feedback
        </button>
      </form>
      {/* Here We will have a issueCompleted flag, and when "still not resolved" button is clicked, we will set the flag to false*/}
      <form action="post">
        <button
          type="submit"
          className=" border border-red-400 text-red-400 hover:bg-red-400 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-2"
        >
          Still Not Resolved?
        </button>
      </form>
    </div>
  );
};

export default CompletedRequest;
