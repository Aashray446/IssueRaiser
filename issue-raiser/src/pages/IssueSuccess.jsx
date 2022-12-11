import React from "react";
import { useParams } from "react-router-dom";
const IssueSuccess = () => {

  let { id } = useParams();

  return (
    <div className="grid h-screen place-items-center ">
      <div className="flex flex-col items-center bg-regal-blue p-8 rounded-lg mt-5 w-96">
        <div className="block text-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Query has been successfully submitted with ID: {id}
        </div>

        <div className="flex flex-col items-center">
          <button
            type="submit"
            className="bg-primary-400 text-white hover:bg-primary-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 mt-2 text-center"
          >
            View Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueSuccess;
