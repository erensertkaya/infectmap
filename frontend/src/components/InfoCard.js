import React, {useEffect, useState} from 'react';
import {Card, Button, Nav} from 'react-bootstrap';
import {Tag} from './Tag.js';

export const InfoCard = ({bg, text, style, className, title, tag, type}) => {
    const [data, setData] = useState([]);
    const [isDataChanged, setIsDataChanged] = useState(0);


    useEffect(() => {
        fetch('http://localhost:3000/world')
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData.entries);
            })
    }, [isDataChanged])

    return (
        data.map((item, index) => {
            return (
                <Card
                    bg={bg}
                    text={text}
                    style={style}
                    className={className}
                >
                    {/* <Card.Header>Header</Card.Header>*/}
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{type === 'case'  ? item.case : type === 'death' ? item.death : type === 'recovery' ? item.recovered : type === 'unresolved' ? item.unresolved : ''}</Card.Text>
                        <Tag bg={tag} type={type}></Tag>
                    </Card.Body>
                </Card>
            )
        })
    );
};
