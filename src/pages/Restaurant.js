import { Col, Row, Select, DatePicker, Button, Modal, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { restaturantList } from '../Mock/restaurant';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Restaurant = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const id = Number(props.match.params.id) || 0;
    const [data, setData] = useState({})

    const handleOk = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        if (id) {
            let newData = restaturantList.filter(item => item.id === id)
            setData(newData[0])
        }
    }, [])

    return (
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
            <div>
                <p>ชื่อร้าน: {data.name}</p>
                <p>สถานที่: {data.location}</p>
            </div>
            <div>
                <Row>
                    <Col>
                        <label>จำนวนคน</label>
                        <Select defaultValue={1}>
                            <Select.Option value={1}>1</Select.Option>
                            <Select.Option value={2}>2</Select.Option>
                            <Select.Option value={3}>3</Select.Option>
                            <Select.Option value={4}>4</Select.Option>
                        </Select>
                    </Col>
                    <Col>
                        <label>เลือกวัน</label>
                        <DatePicker format="DD/MM/YYYY" />
                    </Col>
                    <Col>
                        <label>เลือกเวลา</label>
                        <Select defaultValue={1}>
                            <Select.Option value={1}>9:00</Select.Option>
                            <Select.Option value={2}>10:00</Select.Option>
                            <Select.Option value={3}>11:00</Select.Option>
                            <Select.Option value={4}>12:00</Select.Option>
                            <Select.Option value={5}>13:00</Select.Option>
                            <Select.Option value={6}>14:00</Select.Option>
                            <Select.Option value={7}>15:00</Select.Option>
                            <Select.Option value={8}>16:00</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Button onClick={() => setIsModalVisible(true)}>จอง</Button>
                <Button ><Link to="/home">ย้อนกลับ</Link> </Button>

                <Modal
                    title="กรอกข้อมูลผู้จอง"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={() => setIsModalVisible(false)}
                    closable={false}
                    okText="ยืนยันการจอง"
                    cancelText="ยกเลิกจอง"
                >
                    <label>ชื่อผู้จอง</label>
                    <Input />
                    <label>เบอร์โทร</label>
                    <Input />
                    <label>Email</label>
                    <Input />


                </Modal>
            </div>

        </div>
    )
}

export default Restaurant
