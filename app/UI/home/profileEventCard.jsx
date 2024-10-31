const ProfileEventCard = ({image, name, date, description, location}) => {

   const dateWithoutHyphen = date[0].replace(/-/g, "")

    return ( 
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
        <img className="h-64 w-full bg-gray-300 bg-center bg-cover rounded-lg shadow-md" src={image}></img>
        </div>
        
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}</h3>
    
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">{date}</span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                <a target="_blank" href={`https://calendar.google.com/calendar/r/eventedit?action=TEMPLATE&dates=${dateWithoutHyphen}T090000Z%2F${dateWithoutHyphen}T230000Z&stz=Europe/London&etz=Europe/London&details=${description}&location=${location}&text=${name}`}>
                Add to Google
                    
                </a>  
                    
                </button>
            </div>
        </div>
    </div>
    );
}
 
export default ProfileEventCard;

