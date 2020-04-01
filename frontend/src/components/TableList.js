import React, {useState, useEffect} from 'react';

export const TableList = () => {
    const [data, setData] = useState([]);
    const [isDataChanged, setIsDataChanged] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000')
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData.entries);
            })
    },[isDataChanged])

    return (
        data.map((item, index) => {
            index++
            const items = {
                ...item,
                index:index
            }
            return (
                <tr>
                    <td>{items.index}</td>
                    <td>{items.country}</td>
                    <td>{items.case}</td>
                    <td>{items.newCase}</td>
                    <td>{items.death}</td>
                    <td>{items.newDeath}</td>
                    <td>{items.deatRatio}</td>
                    <td>{items.seriousCase}</td>
                    <td>{items.recovered}</td>
                </tr>
            )
        }));
}
