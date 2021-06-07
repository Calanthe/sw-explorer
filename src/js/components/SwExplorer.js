import { useState } from "react";
import SwEntry from './SwEntry';
import useFetch from "../utils/useFetch";

import { getWindowHost } from "../utils/urlUtils";
import { queryTypes, maxPages } from "../utils/knownData";

const showFetchMoreBtn = (pageNo, dataType) => {
    return pageNo < maxPages[dataType];
};

export default function SwExplorer(props) {
    const dataType = props.dataType;
    const [pageNo, setPageNo] = useState(1);

    let [swData, setSwData] = useState([]);
    let loading = true, 
        error;

    [swData, loading, error] = useFetch(queryTypes[dataType], pageNo, swData);
    
    const getSwData = () => {
        setSwData(swData);
        setPageNo(pageNo + 1);
    };

    return (
        <div className="entries-wrapper">
            <div className="entries">
            {
                swData?.map((entry, idx) => (
                    <SwEntry type={dataType} data={entry} key={idx}/>
                ))
            }
            </div>
            <div className="extras">
                { error ? error : '' }
                { loading ? <img src={`${getWindowHost()}/img/loader.gif`} className="loader" alt="fetching content" /> : '' }
            </div>
            {showFetchMoreBtn(pageNo, dataType) ? 
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