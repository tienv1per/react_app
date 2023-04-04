import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
		try {
			async function fetchData() {
				let res = axios.get(url);
				let data = res && (await res).data ? (await res).data : [];
				setData(data);
				setIsLoading(false);
                setIsError(false);
			}
			fetchData();
		}

		catch(e) {
            setIsError(true);
            setIsLoading(false);
			alert(e.message);
		}
    }, []); 

    return {
        data,
        isLoading, 
        isError
    }
}

export default useFetch