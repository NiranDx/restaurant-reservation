import React, { useState, useEffect, useReducer, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import CardRestaurant from '../components/CardRestaurant'
import RestaurantContext, * as restaurant from '../context/restaurant-context';

import { restaturantList } from '../Mock/restaurant';

const initalState = {
    shop: [],
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'LOAD_DATA':
            const { key, value } = payload
            return {
                ...state,
                [key]: value
            }

        default:
            return state
    }
}


const Home = () => {
    const RenderRestaurantList = styled.div`
            display: grid;
            grid-template-columns: repeat(3, 1fr); 
            grid-gap: 16px; 
            padding: 16px;
            @media(max-width: 767px){
                grid-template-columns: repeat(1, 1fr); 
            }
            @media(min-width: 768px) and (max-width: 1024px){
                grid-template-columns: repeat(2, 1fr); 
            }
    `;
    const Button = styled.button`
            cursor:pointer;
            border: none;
            padding: 6px 16px;
            border-radius: 0 6px 6px 0;
            background-color: darkorange;
            color: whitesmoke;
            font-weight: bold;
    `;
    const ButtonClear = styled.button`
            cursor:pointer;
            border: none;
            background-color: transparent;
            position: absolute;
            right: 0;
            height: 100%;
    `;
    // const InputSearch = styled.input`
    //         flex:1;
    //         border: none;
    //         border-radius: 6px 0 0 6px;
    //         background-color: moccasin;
    //         padding: 0 6px;
    //         :focus{
    //             outline: none;
    //         }
    //         ::placeholder {
    //             color: darkgray;
    //           }
    // `;
    const NoData = styled.div({
        width: '100vw',
        padding: '25vh',
        textAlign: 'center'
    })

    const [{ shop, }, dispatch] = useReducer(reducer, initalState)
    const [dataShop, setDataShop] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch({
            type: "LOAD_DATA",
            payload: {
                key: "shop",
                value: restaturantList
            },
        })
        setDataShop(shop)
    }, [shop])

    if (!dataShop) {
        return null
    }

    const onSearch = () => {
        let keyWordSearch = search.toLowerCase()
        if (search && search.length > 1) {
            let data = dataShop.filter(item => item.name.toLowerCase().includes(keyWordSearch) == true)
            setDataShop(data)
        } else {
            setDataShop(null)
        }
    }

    const onClearSearch = () => {
        setDataShop(dataShop)
        setSearch('')
    }

    return (
        <Col style={{ padding: '16px 0' }}>
            <Col>
                <Row>
                    <label style={{ fontSize: 30, fontWeight: 'bold', color: 'darkorange', textAlign: 'center', width: '100%' }}>Restaurant Reservation</label>
                </Row>
                <Row style={{ padding: '0 8%', marginTop: '16px' }} >
                    <Row style={{ flex: 1, position: 'relative' }}>
                        <input
                            style={{ flex: 1, padding: '0 16px', border: 0, borderRadius: '6px 0 0 6px', backgroundColor: 'moccasin' }}
                            type="text"
                            placeholder="ค้นหาชื่อร้านค้า"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} />
                        {
                            search ?
                                <ButtonClear onClick={() => onClearSearch()}>
                                    <img style={{ width: 25, opacity: '0.3' }} src="https://img.icons8.com/windows/32/000000/macos-close.png" />
                                </ButtonClear>
                                :
                                null
                        }
                    </Row>
                    <Button onClick={() => onSearch()}>ค้นหา</Button>
                </Row>
            </Col>
            {
                dataShop?.length > 0 ?
                    <RenderRestaurantList>
                        {
                            dataShop.map((item, index) => {
                                return (
                                    <Link to={`/restaurant/${item.id}`} key={index + 'dataShop'} >
                                        <CardRestaurant data={item} />
                                    </Link>
                                )
                            })

                        }
                    </RenderRestaurantList>
                    :
                    <NoData>
                        <img style={{ opacity: '0.3' }} width={100} height={100} src="https://img.icons8.com/fluent-systems-regular/96/000000/no-data-availible.png" />
                        <p style={{ fontSize: 30, fontWeight: 'bold', color: 'darkorange' }}>ไม่พบข้อมูลร้านที่ค้นหา</p>
                    </NoData>
            }
        </Col >
    )
}

export default Home
