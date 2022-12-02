import React from "react";

const IssueLandingPage = () => {
  return (
    <div className="grid h-screen place-items-center ">
      <div className="flex flex-col items-center bg-regal-blue p-8 rounded-lg mt-5 w-96">
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Query has been successfully submitted
        </div>

        <div className="flex flex-col items-center">
          <button
            type="submit"
            class="text-white bg-mid2-blue hover:bg-mid1-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-2"
          >
            View Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueLandingPage;
