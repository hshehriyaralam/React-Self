import React from "react";
function Card({UserName}){
    // console.log(props.UserName);
    
    return(
        <>
              <div className="max-w-sm rounded overflow-hidden shadow-lg pt-5">
  <img
    className="w-60"
    src="https://images.pexels.com/photos/26952831/pexels-photo-26952831/free-photo-of-model-in-white-shirt-and-checkered-gray-pants-sitting-in-front-of-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Sunset in the mountains" 
  />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{UserName}</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.
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