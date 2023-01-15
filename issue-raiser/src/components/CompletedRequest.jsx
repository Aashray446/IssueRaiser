import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToggleError } from "../services/ErrorContext";
import { getTicket, updateStatus } from "../services/ticket";
// import Timeline from "./Timeline";
const CompletedRequest = () => {
  //   Here we will make a get request and fetch the TimelineData array
  const TimelineData = [
    {
      date: "12 Dec 2022",
      Action: "Attended by support executives",
    },
    {
      date: "12 Dec 2022",
      Action: "Assigned to Repair department",
    },
    {
      date: "13 Dec 2022",
      Action: "Issue Resolved",
    },
  ];

  const toggle = useToggleError();
  const { id } = useParams();
  const [patientData, setPatientData] = useState([])
  let navigate = useNavigate();

  useEffect(() => {
    getTicket(id).then((ticket) => {
      ticket.createdAt = new Date(ticket.created_at).toLocaleTimeString() + " " + new Date(ticket.created_at).toLocaleDateString('en-US', { day: 'numeric' }) + " " + new Date(ticket.created_at).toLocaleString('default', { month: 'short' })
      ticket.updatedAt = new Date(ticket.updatedAt).toLocaleTimeString() + " " + new Date(ticket.updatedAt).toLocaleDateString('en-US', { day: 'numeric' }) + " " + new Date(ticket.updatedAt).toLocaleString('default', { month: 'short' })
      setPatientData(ticket)
      if (ticket.status != "Completed") {
        navigate('/pendingRequest/' + id)
      }

    })
      .catch((error) => {
        toggle(
          {
            error: true,
            message: error,
          }
        );

      })
  }, [])

  function raiseIssue() {
    // here a put request for update patientData with feedback
    updateStatus(id, "pending").then(() => {
      toggle(
        {
          error: true,
          message: "Your issue has been raised again successfully",
        });
      navigate('/pendingRequest/' + id)
    })
      .catch((error) => {
        toggle(
          {
            error: true,
            message: error,
          }
        );

      })
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
          <h2 className="md:text-sm tracking-normal text-xs font-medium">
            Patient Name:
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
            {patientData.patientName}
          </p>
        </div>
        <div className="mb-2 ml-5">
          <h2 className="md:text-sm tracking-normal text-xs font-medium">
            Issue Opened Date:
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
            {patientData.createdAt}
          </p>
        </div>
        <div className="mb-2 ml-5">
          <h2 className="md:text-sm tracking-normal text-xs font-medium">
            Issue Closed Date:
          </h2>
          <p className="md:text-sm text-gray-600 text-xs">
            {patientData.updatedAt}
          </p>
        </div>
      </div>
      <div className="mb-8 ml-5">
        <h2 className="md:text-sm tracking-normal text-xs font-medium">
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
        <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-5">
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
      <button
        onClick={raiseIssue}
        className=" border border-red-400 text-red-400 hover:bg-red-400 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-2"
      >
        Still Not Resolved?
      </button>
    </div>
  );
};

export default CompletedRequest;
