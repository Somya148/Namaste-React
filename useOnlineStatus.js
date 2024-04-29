import { useEffect, useState } from "react";

//Custom Hook 
//we can make our own hooks , just like here we make onlinestatus hook , this uses an event online listenser 

// now we have made this hook , we can now use this anywhere in our code (component resuability).
const useOnlineStatus = () => {

    const [onlinestatus, setonlinestatus] = useState(true);



    useEffect(() => {
        window.addEventListener("offline", (event) => {
            setonlinestatus(false);
        });

        window.addEventListener("online", (event) => {
            setonlinestatus(true);
        });


    }, []);


    return onlinestatus;
}

export default useOnlineStatus;