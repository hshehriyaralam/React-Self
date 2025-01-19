import React from 'react'

function Weather({weather}) {
    if(weather < 15){
        return <h1 className='text-2xl text-green-900'>
            It's Cold Outside
        </h1>
    }else if (weather >= 15 && weather <= 25){
        return <h1 className='text-2xl text-green-900'>
        It's Nice Outside
    </h1>
    }else if(weather > 25 ){
        return <h1 className='text-2xl text-green-900'>
        It's Hot Outside
    </h1>
    }
    return <h1 className='text-2xl text-green-900' >It's Danger Outside </h1>
}

export default Weather
