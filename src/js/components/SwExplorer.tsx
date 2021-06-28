import { useState } from "react";
import SwEntry from './SwEntry';
import useFetch from "../utils/useFetch";

import { getWindowHost } from "../utils/utils";
import { queryTypes, maxPages } from "../utils/knownData";

const showFetchMoreBtn = (pageNo: number, dataType: string) => {
    return pageNo < maxPages[dataType];
};

const initialisePageNoState = () => {
    return {
        'characters': 1,
        'movies': 1,
        'starships': 1,
        'planets': 1,
        'vehicles': 1,
        'species': 1
    }
};

const initialiseDataState = () => {
    return {
        'characters': [],
        'movies': [],
        'starships': [],
        'planets': [],
        'vehicles': [],
        'species': []
    }
};

interface swProps {
	dataType: string;
}

export default function SwExplorer(props: swProps) {
    const dataType = props.dataType;
    const [pageNo, setPageNo] = useState(initialisePageNoState());
    const [swData, setSwData] = useState(initialiseDataState());

    let loading = true, 
        error: string;
        
    [loading, error] = useFetch(queryTypes[dataType], pageNo[dataType], (data: []) => {
        setSwData(state => ({ ...state, [dataType]: [...swData[dataType], ...data]}));
    });
    
    const getSwData = () => {
        // Spreading "...state" ensures we don't "lose" pageNo and fetched data of the other types (subpages)
        setPageNo(state => ({ ...state, [dataType]: state[dataType] + 1 }));
    };

    return (
        <div className="entries__wrapper">
            <div className="entries">
            {
                swData[dataType]?.map((entry: object, idx: number) => (
                    <SwEntry type={dataType} data={entry} key={idx}/>
                ))
            }
            </div>
            <div className="extras">
                { error ? error : '' }
                { loading ? <img src={`${getWindowHost()}/img/loader.gif`} className="loader" alt="fetching content" /> : '' }
            </div>
            {(showFetchMoreBtn(pageNo[dataType], dataType) && !error) ? 
                <p>
                    <button onClick={() => {
                        getSwData()
                    }} className="btn">fetch more data</button>
                </p>
                : ''
            }
        </div>
    )
}  