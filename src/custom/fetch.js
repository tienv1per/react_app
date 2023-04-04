import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const useFetch = (url, isCovidData) => {
    const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // Cancelling requests
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                let res = axios.get(url, {
                    signal: controller.signal
                });

                let data = res && (await res).data ? (await res).data : [];
                if (data && data.length > 0 && isCovidData){
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                    data = data.reverse();
                }
                setData(data);
                setIsLoading(false);
                setIsError(false);
            }

            catch(err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                    console.log('There was a problem or request was cancelled');
                } 

                else {
                    setIsError(true);
                    setIsLoading(false);
                    alert(err.message);
                }    
            }
		}

        setTimeout(() => {
            fetchData();
        }, 2000);

        return () => {
            controller.abort();
        }

    }, [url]); 

    return {
        data,
        isLoading, 
        isError
    }
}

export default useFetch