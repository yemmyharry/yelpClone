import {useState, useEffect} from 'react'
import * as api from './config'

export function useBusinessSearch(term, location){
    const [businesses, setBusinesses] = useState([])
    const [amountResults, setAmountResults] = useState()
    const [searchParams, setSearchParams] = useState({term, location})

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get(`${window.env.APP_URL}/businesses/search`, searchParams);
                const response = await rawData.json();
                const business = response.businesses
                const totalResponses = response.total
                setBusinesses(business);
                setAmountResults(totalResponses);
            } catch(e) {
                new Error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
}