import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

export const Tag = ({bg,type}) => {
    const [percantage, setPercantage] = useState([]);
    const [isDataChanged, setIsDataChanged] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/world/ratio')
            .then((response) => response.json())
            .then((responseData) => {
                setPercantage([responseData]);
            })
    }, [isDataChanged])
    console.log(percantage);

    return (
        percantage.map((item,index) => {
            return(
                <div>
                    <Button variant={bg}><FontAwesomeIcon icon={faArrowUp} className='mr-1' />{type === 'case' ? item.caseRatio + '%'  : type === 'death' ? item.deathRatio + '%' : type === 'recovery' ? item.recoveredRatio + '%' : type === 'unresolved' ? item.unresolvedRatio + '%' : ''}</Button>
                </div>
            )

        })
    );
};
