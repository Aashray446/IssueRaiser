import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import {
  useLocation, useNavigate
} from "react-router-dom";
import { useToggleError } from "../services/ErrorContext";
import { createTicket, getDepartments } from "../services/ticket";
import Dropdown from "./dropdown";

const IssueForms = (props) => {

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  let navigate = useNavigate();
  //  Business Logic  


  const [departmentOptions, setDepartmentOptions] = useState([
    { value: "", label: "Select a Department" }
  ])

  const handleDepartmentChange = (data) => {
    setDepartmentOptions(
      [
        ...departmentOptions,
        ...data
      ]
    )
  }

  useEffect(() => {
    getDepartments().then(
      (result) => {
        result.map((item) => {
          item.value = item.id
          item.label = item.name
        })
        handleDepartmentChange(result)
      }
    )
  }, [])



  let priorityOptions = [
    { value: 'default', label: 'Select a priority' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ]


  function handleDataChange(e) {
    props.onPatientChange(e);
  }

  const toggle = useToggleError();

  function handleSubmit(e) {
    e.preventDefault();
    createTicket(props.patientData).then((res) => {
      navigate('/issueSuccess/' + res.ticket_no);
    })
      .catch((err) => {
        toggle({
          error: true,
          message: err,
        });
      })
  }



  // URL query params should be like http://localhost:5174/?room-no=5

  return (
    <div className="grid px-8 mb-4">
      <form
        className="w-100 rounded-lg"
        action="post"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={props.patientData.email}
            onChange={(e) => handleDataChange(e)}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="patientName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={props.patientData.patientName}
              onChange={(e) => handleDataChange(e)}
              required
            />
            <label
              htmlFor="patientName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
              <abbr title="requried" className="text-red-500">*</abbr>
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <Dropdown name="department" className="text-sm text-gray-500 dark:text-gray-400" value={props.patientData.department} onChange={handleDataChange} options={departmentOptions} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              name="patientNumber"
              id="phoneNumber"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={props.patientData.patientNumber}
              onChange={(e) => handleDataChange(e)}
              required
            />
            <label
              htmlFor="phoneNumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
              <abbr title="requried" className="text-red-500">*</abbr>
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <Dropdown name="priority" value={props.patientData.priority} onChange={handleDataChange} options={priorityOptions} />
          </div>
        </div>
        <div className="text-center border-y-2 pt-4 mb-4">
          <p className="text-sm mb-4"> Room Number : {query.get('room-no')}</p>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Request
            <abbr title="requried" className="text-red-500" s>*</abbr>
          </label>
          <textarea
            id="complaint"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your Request here..."
            value={props.patientData.message}
            onChange={(e) => handleDataChange(e)}
            name="message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary-400 text-white hover:bg-primary-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default IssueForms;
