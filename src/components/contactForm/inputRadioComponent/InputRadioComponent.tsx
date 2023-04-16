import React from "react";
import useContactFormContext from "../hooks/useContactFormContext";

/**
 * 
 * @returns jsx
 * 
 * input radio component
 * 
 */
const InputRadioComponent = () => {
  const { status, setStatus } = useContactFormContext();

  /**
   * 
   * @param e 
   * onchange of input set status state
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = e?.target?.value;
    setStatus(selectedOption);
  };

  /**
   * 
   * @param status 
   * div click -> set stauts state 
   */
 const handleClick = (status: string) => {
   setStatus(status);
 };

 return (
   <div className="flex justify-center items-center">
     <span className="text-xl font-thin m-5 w-1/4">Status</span>
     <div className="flex flex-col justify-center items-start w-3/4">
       <div
         className="flex justify-center items-center p-5 cursor-pointer"
         onClick={() => handleClick("Active")}
       >
         <input
           type="radio"
           value="Active"
           name="staus"
           checked={status === "Active"}
           onChange={handleChange}
           className="h-5 w-5 me-3 cursor-pointer"
         />
         <label htmlFor="staus" className="text-2xl font-thin cursor-pointer">
           Active
         </label>
       </div>
       <div
         className="flex justify-center items-center p-5 cursor-pointer"
         onClick={() => handleClick("Inactive")}
       >
         <input
           type="radio"
           value="Inactive"
           name="staus"
           checked={status === "Inactive"}
           onChange={handleChange}
           className="h-5 w-5 me-3 cursor-pointer"
         />
         <label htmlFor="staus" className="text-2xl font-thin cursor-pointer">
           Inactive
         </label>
       </div>
     </div>
   </div>
 );
};

export default InputRadioComponent;
