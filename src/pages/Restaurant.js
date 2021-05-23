import { Col, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { restaturantList } from '../Mock/restaurant';
import Header from '../components/Header'

const Restaurant = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const id = Number(props.match.params.id) || 0;
    const [data, setData] = useState({})
    const [reserveData, setReserveData] = useState({})

    const dateToday = new Date().toISOString().slice(0, -14);
    const [people, setPeople] = useState(1)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('9:00')
    const [clickReserve, setClickReserve] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [checkConfirm, setCheckConfirm] = useState(false)

    const handleOk = () => {
        if (name && phone && email) {
            setCheckConfirm(false)
            //add to value to booking......
            let newObj = {
                people,
                date,
                time,
                name,
                phone,
                email,
            }
            setReserveData(newObj)
            setIsModalVisible(false);

        }
        else {
            setCheckConfirm(true)
        }
    };

    const onClickReserve = () => {
        if (people && date && time) {
            setIsModalVisible(true);
            setClickReserve(false)
        }
        else {
            setClickReserve(true)
        }
    };

    useEffect(() => {
        if (id) {
            let newData = restaturantList.filter(item => item.id === id)
            setData(newData[0])
        }
    }, [])



    const Button = styled.button`
        margin-top:50px;
        cursor:pointer;
        border: none;
        padding: 6px 16px;
        width:150px;
        border: 2px solid darkorange;
        border-radius: 6px;
        background-color: darkorange;
        color: whitesmoke;
        font-weight: bold;
    `;
    const BtnBackward = styled.button`
        margin-top:50px;
        cursor:pointer;
        border: none;
        padding: 6px 16px;
        width:150px;
        border: 2px solid darkorange;
        border-radius: 6px;
        background-color: white;
        color: darkorange;
        font-weight: bold;
    `
    const PeopleSelect = styled.select({
        flex: 1,
        padding: '0 16px',
        border: 0,
        borderRadius: '6px',
        backgroundColor: 'moccasin',
        height: '30px',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.10)',
    })
    const TimeSelect = styled.select({
        flex: 1,
        padding: '0  16px',
        border: 0,
        borderRadius: '6px',
        backgroundColor: 'moccasin',
        height: '30px',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.10)',
    })
    const Input = styled.input({
        flex: 1,
        padding: '0 16px',
        border: 0,
        borderRadius: '6px',
        backgroundColor: 'moccasin',
        height: '30px',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.10)',
    })
    const LabelText = styled.label({
        flex: 1,
        margin: '16px 16px 0 0',
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '28px',
    })
    const H1Title = styled.h1({
        margin: '6px 0 0 0',
        color: 'black',
        fontSize: '20spx',
        fontWeight: 'bold',
    })
    const PTitle = styled.p({
        margin: '6px 0 0 0',
        color: 'darkorange',
        fontSize: '20px',
        fontWeight: 'bold',
    })
    const PDetail = styled.p({
        margin: '0',
        color: 'black',
        fontSize: '16px',
    })

    return (
        <div style={{ backgroundColor: '#FFF8DC' }}>
            <Header dataShop={data} dataReserve={reserveData} />
            <div>
                <Carousel
                    dynamicHeight={false}
                    showArrows={false}//arrow left rigth
                    showThumbs={false}//preview img
                    showStatus={false}//amount img
                    emulateTouch={true}//scroll img
                    swipeable={true}//scroll img
                >
                    {
                        data && data?.imageProduct?.map((item, index) => {
                            return (
                                <div key={index + 'data'}>
                                    <img src={item.image} width={100} height={600} style={{ objectFit: 'cover' }} />
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div style={{ padding: '16px 5%' }}>
                    <div>
                        <PTitle><strong>ชื่อร้าน:</strong> {data.name}</PTitle>
                        <PDetail><strong>สถานที่:</strong> {data.location}</PDetail>
                        <PDetail><strong>เบอร์โทร:</strong> {data.phone}</PDetail>
                    </div>
                    <div>
                        <Row gutter={[18, 18]} style={{ marginTop: '16px' }}>
                            <Col>
                                <LabelText>จำนวนคน</LabelText>
                                <PeopleSelect onChange={(e) => setPeople(e.target.value)} value={people}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </PeopleSelect>
                            </Col>
                            <Col>
                                <LabelText>เลือกวัน</LabelText>
                                <Input type="date" onChange={(e) => setDate(e.target.value)} value={date} min={dateToday} ></Input>
                            </Col>
                            <Col>
                                <LabelText>เลือกเวลา</LabelText>
                                <TimeSelect onChange={(e) => setTime(e.target.value)} value={time}>
                                    <option value="9:00">9:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:00">21:00</option>
                                </TimeSelect>
                            </Col>
                        </Row>
                        <div style={{ minHeight: '50px' }}>
                            {
                                clickReserve ?
                                    <p style={{ color: 'red', padding: '10px' }}>*กรุณากรอกข้อมูลให้ครบก่อนทำรายการ</p>
                                    :
                                    null
                            }
                        </div>
                        <Row gutter={18} justify={"end"}>
                            <Col>
                                <Button onClick={() => onClickReserve()}>จอง</Button>
                            </Col>
                            <Col>
                                <Link to="/home" style={{ color: 'darkorange', fontWeight: 'bold' }}><BtnBackward>ย้อนกลับ</BtnBackward></Link>
                            </Col>
                        </Row>

                        <Modal
                            title={(<PTitle>กรอกข้อมูลผู้จอง</PTitle>)}
                            visible={isModalVisible}
                            width={600}
                            onOk={() => handleOk()}
                            onCancel={() => setIsModalVisible(false)}
                            okText="ยืนยันการจอง"
                            cancelText="ยกเลิกจอง"
                            footer={null}
                        >
                            <Col>
                                <H1Title>{`ชื่อร้าน ${data.name}`}</H1Title>
                                <PDetail>
                                    {`สถานที่ ${data.location}`}<br /><br />
                                    <strong>{`วันที่ทำรายการจอง ${date} เวลา ${time} น. จำนวน ${people} คน`}</strong>
                                </PDetail>
                                <br />
                            </Col>
                            <Col>
                                <LabelText>ชื่อผู้จอง</LabelText>
                                <input
                                    style={{
                                        flex: 1,
                                        width: '100%',
                                        padding: '6px 16px',
                                        border: 0,
                                        borderRadius: '6px',
                                        backgroundColor: 'moccasin',
                                        marginBottom: '16px'
                                    }}
                                    placeholder="ชื่อผู้จอง"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                                <LabelText>เบอร์โทร</LabelText>
                                <input
                                    style={{
                                        flex: 1,
                                        width: '100%',
                                        padding: '6px 16px',
                                        border: 0,
                                        borderRadius: '6px',
                                        backgroundColor: 'moccasin',
                                        marginBottom: '16px'
                                    }}
                                    placeholder="เบอร์โทร"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                                <LabelText>email</LabelText>
                                <input
                                    style={{
                                        flex: 1,
                                        width: '100%',
                                        padding: '6px 16px',
                                        border: 0,
                                        borderRadius: '6px',
                                        backgroundColor: 'moccasin',
                                        marginBottom: '16px'
                                    }}
                                    placeholder="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <div style={{ minHeight: '50px' }}>
                                    {
                                        checkConfirm ?
                                            <p style={{ color: 'red', padding: '10px' }}>*กรุณากรอกข้อมูลให้ครบก่อนทำรายการ</p>
                                            :
                                            null
                                    }
                                </div>
                            </Col>

                            <Row gutter={18} justify={"end"}>
                                <Col>
                                    <Button onClick={() => handleOk()}>ยืนยันการจอง</Button>
                                </Col>
                                <Col>
                                    <BtnBackward onClick={() => setIsModalVisible(false)}>ยกเลิกจอง</BtnBackward>
                                </Col>
                            </Row>
                        </Modal>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Restaurant
