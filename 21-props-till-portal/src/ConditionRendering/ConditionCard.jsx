import React from 'react'


const Card = () => {

    const item = ["Wireless Earuds", "HaedPhones", "Handfree", "Smart watch"]
   return(
       <div>
       <h1>Card </h1>
       {item.length > 3 && <h2>You have {item.length} items in your Card</h2>}


        <h1>Products</h1>
       <ul>
        {item.map((item) => (
            <li key={Math.random()}>
                {item}
            </li>
        ))}
       </ul>
       </div>
)
}



function ConditionCard() {
  return (
    <div className='text-2xl '>
      <Card />
    </div>
  )
}

export default ConditionCard;
