import React from "react";
import { useForm } from "react-hook-form";
import pricing from "../assets/pricing.jpg";
import { FaRocket, FaMoneyBillAlt, FaLightbulb, FaEnvelope } from 'react-icons/fa';

const Quote = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
      if (response.ok) {
        alert('Quote submitted successfully!');
        reset();
      } else {
        console.error('Error response:', responseData);
        alert(`Failed to submit quote: ${responseData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Network error: ${error.message}`);
    }
  };

  return (
    <section
      id="quote"
      className="py-16  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-6 text-center animate-bounce">Get a Quote <FaRocket className="inline text-blue-500 ml-2" /></h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 transition-all duration-500 ease-in-out transform hover:scale-105">
          <img
            src={pricing}
            alt="Illustration"
            className="rounded-lg shadow-lg w-full h-full lg:max-w-full lg:max-h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 p-8 text-center rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl min-h-[400px] lg:h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black h-full">
            <div className="text-center">
              <label htmlFor="email" className=" mb-2 font-semibold flex items-center justify-center">
                <FaEnvelope className="mr-2 text-blue-500" /> Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="input-field bg-gray-100 border-4 w-full p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="text-center">
              <label htmlFor="projectName" className=" mb-2 font-semibold flex items-center justify-center">
                <FaRocket className="mr-2 text-blue-500" /> Project Name
              </label>
              <input
                type="text"
                id="projectName"
                {...register("projectName", { required: "Project name is required" })}
                className="input-field bg-gray-100 border-4 w-full p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.projectName && (
                <p className="text-red-500 text-sm">{errors.projectName.message}</p>
              )}
            </div>
            <div className="text-center">
              <label htmlFor="budget" className=" mb-2 font-semibold flex items-center justify-center">
                <FaMoneyBillAlt className="mr-2 text-blue-500" /> Estimated Budget
              </label>
              <select
                id="budget"
                {...register("budget", { required: "Budget is required" })}
                className="input-field bg-gray-100 border-4 w-full p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Your Budget</option>
                <option value="15000-39999">Kshs15,000 - Kshs39,999</option>
                <option value="40000-69999">Kshs40,000 - Kshs69,999</option>
                <option value="70000+">Kshs70,000+</option>
              </select>
              {errors.budget && <p className="text-red-500 text-sm">{errors.budget.message}</p>}
            </div>
            <div className="text-center">
              <label
                htmlFor="functionality"
                className=" mb-2 font-semibold flex items-center justify-center"
              >
                <FaLightbulb className="mr-2 text-blue-500" /> Important Functionality You Want
              </label>
              <textarea
                id="functionality"
                {...register("functionality", { required: "Functionality is required" })}
                className="input-field bg-gray-100 border-4 w-full p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="4"
              />
              {errors.functionality && (
                <p className="text-red-500 text-sm">{errors.functionality.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn-primary w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quote;