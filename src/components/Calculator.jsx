import React, { useState } from 'react'

const Calculator = () => {
    const [result, setresult]= useState("");

    const ClickHandle = (e)=>{
       setresult(result.concat(e.target.value));
    }

    const ClearButton=()=>{
        setresult("");
    }

    const EqualButton =()=>{
        setresult(eval(result).toString());
    }
  return (
    <div className='bg-gray-800 w-screen h-screen text-white flex justify-center items-center'>
      
      <div className='w-64 h-auto bg-gray-900 rounded-2xl border-4'>
        
         {/* Screen Div */}
       <div className='screen p-2'>
        
        <input type="text" value={result} className='text-3xl w-full outline-none pt-10 bg-gray-200 placeholder-black text-right text-black' placeholder='0'/>
       </div>  

        {/* Brand Name */}
         <div className="brand bg-slate-400 mb-2">
            <h2 className='text-center font-medium'>Masood Buriro</h2>
         </div>

          {/* Buttons */}
        <div className='keywords'>
             <div className='flex justify-between p-2'>
             <input type="button" value="C" onClick={ClearButton} className='w-12 h-12 bg-pink-300 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="<"  className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="%" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="/" onClick={ClickHandle} className='w-12 h-12 bg-pink-300 shadow-md rounded-lg text-center font-medium text-black'/>
             </div>

             <div className='flex justify-between p-2'>
             <input type="button" value="7" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="8" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="9" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="*" onClick={ClickHandle} className='w-12 h-12 bg-green-300 shadow-md rounded-lg text-center font-medium text-black'/>
             </div>

             <div className='flex justify-between p-2'>
             <input type="button" value="4" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="5" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="6" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="+" onClick={ClickHandle} className='w-12 h-12 bg-orange-400 shadow-md rounded-lg text-center font-medium text-black'/>
             </div>

             <div className='flex justify-between p-2'>
             <input type="button" value="1" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="2" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="3" onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="-" onClick={ClickHandle} className='w-12 h-12 bg-blue-500 shadow-md rounded-lg text-center font-medium text-black'/>
             </div>

             <div className='flex justify-between p-2'>
             <input type="button" value="0"  onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="00" onClick={ClickHandle}  className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="."  onClick={ClickHandle} className='w-12 h-12 bg-gray-200 shadow-md rounded-lg text-center font-medium text-black'/>
             <input type="button" value="="  onClick={EqualButton} className='w-12 h-12 bg-yellow-500 shadow-md rounded-lg text-center font-medium text-black'/>
             </div>
        </div>

      </div>

    </div>
  )
}

export default Calculator
