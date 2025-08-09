export default function Button({label,borderColor, bgColor }){
    
    
    return(
        <button className={` border ${borderColor ? borderColor : 'border-blue-900' } ${bgColor ? bgColor : 'bg-transparen'} p-3 m-2  rounded`} >{label ? label : "Product Page"  }</button>
        
    )
}