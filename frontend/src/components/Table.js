import React from "react";
import {Table} from "react-bootstrap";
import {TableList} from "./TableList";
import '../App.css';

export const DataTable = () => {
    return (
        <Table responsive striped bordered hover variant="dark" className='mt-5' id='table'>
            <thead>
            <tr>
                <th>#</th>
                <th>Country</th>
                <th>Cases</th>
                <th>New Cases</th>
                <th>Deaths</th>
                <th>New Deaths</th>
                <th>Death Ratio</th>
                <th>Serious Case</th>
                <th>Recovered</th>
            </tr>
            <TableList>
            </TableList>
            </thead>
            <tbody>
            </tbody>
        </Table>
    )
}
