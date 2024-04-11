export default function NumberCards({title, number}){
    return(
        
        <div className="border rounded-md bg-primary w-22 h-12 p-3 text-white">
            <p>{title} {number}</p>
          
        </div>
    )
}