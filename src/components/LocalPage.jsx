import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';

const LocalPage = () => {
    const [locals, setLocals] = useState([]);
    const getLocal = async () => {
        const url = "https://dapi.kakao.com/v2/local/search/keyword.json";
        const config = {
            headers: { "Authorization": "KakaoAK b80880fbde422de3fd9b4a4e67c9bb54" },
            params: { query: '인하대학교', page: 1, size: 5 }
        }
        const result = await axios.get(url, config);
        console.log(result);
        setLocals(result.data.documents);
    }

    useEffect(() => {
        getLocal();
    }, [])

    return (
        <Row>
            <Col>
                <h1 className='text-center'> 지역검색</h1>
                <Table striped border hover>
                    <thead>
                        <tr className='texte-center'>
                            <td>Place</td>
                            <td>Address</td>
                            <td>Tel.</td>
                        </tr>
                    </thead>
                    <tbody>
                        {locals.map(local =>
                            <tr key={local.id}>
                                <td>{local.place_name}</td>
                                <td>{local.address}</td>
                                <td>{local.phone}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default LocalPage