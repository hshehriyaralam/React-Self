import React from "react";
function Card({UserName, Descript}){
    // console.log(props.UserName);
    
    return(
        <>
              <div className="max-w-sm rounded overflow-hidden shadow-lg pt-5">
  <img
    className="w-60"
    src="https://picsum.photos/200"
    alt="Sunset in the mountains" 
  />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{UserName}</div>
    <p className="text-gray-700 text-base">
      {Descript}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #photography
    </span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #travel
    </span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #winter
    </span>
  </div>
</div>
        
        </>
    )
}

export default Card