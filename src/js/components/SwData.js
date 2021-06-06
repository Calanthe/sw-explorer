import { useState } from "react";
import EntryTemplates from './js/components/EntryTemplates';
import useFetch from "../utils/useFetch";
import { isKnownCharacter } from "../utils/knownData";
import { getWindowHost, removeWhiteSpaces } from "../utils/urlUtils";

const maxPagesNo = 9; //TODO move this to knownData.js

const getCharacterImg = (name) => {
    if (isKnownCharacter(name)) {
        return `${getWindowHost()}/img/characters/${removeWhiteSpaces(name)}.png`;
    }
    else return `${getWindowHost()}/img/not-found.png`;
};

const showFetchMoreBtn = (pageNo) => {
    return pageNo <= maxPagesNo;
};

export default function SwData(props) {
    const [dataType] = props;
    const [pageNo, setPageNo] = useState(1);

    let [data, setData] = useState([]);
    let loading = true, 
        error;

    [data, loading, error] = useFetch(dataType, pageNo, data);
    
    const getData = () => {
        setData(data);
        setPageNo(pageNo + 1);
    };

    return (
        <div className="entries-wrapper">
            <EntryTemplates type={dataType} entries={data}/>
            <div className="extras">
                { error ? error : '' }
                { loading ? <img src={`${getWindowHost()}/img/loader.gif`} className="loader" alt="fetching content" /> : '' }
            </div>
            {showFetchMoreBtn(pageNo) ? 
                <p>
                    <button onClick={() => {
                        getData()
                    }} className="btn">fetch more data</button>
                </p>
                : ''
            }
        </div>
    )
}  