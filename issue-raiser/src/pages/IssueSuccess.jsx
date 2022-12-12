import React from "react";
import { useParams, Link } from "react-router-dom";
const IssueSuccess = () => {
  let { id } = useParams();
  const pendingRequestLink = "/pendingRequest/" + id;
  return (
    <div className="grid h-screen place-items-center ">
      <div className="flex flex-col items-center bg-regal-blue p-8 rounded-lg mt-5 w-96">
        {/* here I have changed the css because the text was white and not visible even in light moe */}
        <div className="block text-center mb-2 text-sm font-medium text-gray-900">
          Your Query has been successfully submitted with ID: {id}
        </div>

        <div className="flex flex-col items-center">
          <Link
            to={pendingRequestLink}
            className="bg-primary-400 text-white hover:bg-primary-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 mt-2 text-center"
          >
            View Request
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssueSuccess;
