import { useEffect, useState } from "react";

const useGetData = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState('');

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Data Fetching Error!');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url]);

    return { data, isError, isLoading }
};

export default useGetData;

