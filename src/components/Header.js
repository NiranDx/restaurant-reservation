import { Modal, Row } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const Header = ({ dataShop = {}, dataReserve = {} }) => {

    const [isModalVisible, setIsModalVisible] = useState(false)

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
        <Row style={{ padding: '6px 0', backgroundColor: 'white', position: 'relative' }}>
            <label style={{ fontSize: 30, fontWeight: 'bold', color: 'darkorange', textAlign: 'center', width: '100%' }}>Restaurant Reservation</label>
            <button onClick={() => setIsModalVisible(true)} style={{ backgroundColor: 'transparent', border: 0, position: 'absolute', right: '0', cursor: 'pointer' }}>
                <img width={40} height={40} src="https://img.icons8.com/flat-round/64/000000/list--v1.png" />
            </button>

            <Modal
                title={(<PTitle>ข้อมูลการจอง</PTitle>)}
                visible={isModalVisible}
                width={400}
                onOk={() => setIsModalVisible(true)}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                {dataShop && dataReserve && dataReserve.date ?
                    <div>
                        <PDetail>{`ชื่อผู้จอง: ${dataReserve.name}`}</PDetail>
                        <PDetail>{`เบอร์โทร: ${dataReserve.phone}`}</PDetail>
                        <PDetail>{`อีเมล: ${dataReserve.email}`}</PDetail>
                        <PDetail>{`ชื่อร้าน: ${dataShop.name}`}</PDetail>
                        <PDetail>{`วันที่จอง: ${dataReserve.date}`}</PDetail>
                        <PDetail>{`เวลา: ${dataReserve.time}`}</PDetail>
                        <PDetail>{`จำนวน: ${dataReserve.people}`}</PDetail>
                    </div>
                    :
                    <p style={{ fontSize: 24, padding: '100px 0', textAlign: 'center' }}>ไม่พบรายการจอง</p>
                }
            </Modal>
        </Row>
    )
}

export default Header
