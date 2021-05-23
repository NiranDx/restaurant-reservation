import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';


const CardRestaurant = ({ data }) => {
    const { coverShop, name, location } = data
    const DivStyled = styled.div({
        backgroundColor: '#FFF8DC',
        padding: '20px 20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    });
    const DivImgCoverStyled = styled.div({
        width: '100%',
        height: '300px',
    });
    const ImgStyled = styled.img({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    });
    const TextShopStyled = styled.p({
        margin: '6px 0 0 0',
        color: 'gray',
        fontSize: '20px',
        fontWeight: 'bold',
        minHeight: '50px',
        overflow: 'hidden',
        textOverflow: 'none',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    });
    const TextLocationStyled = styled.p({
        flex: 1,
        color: 'black',
        margin: 0,
        padding: '0 0 0 6px',
        fontSize: '16px',
        minHeight: '50px',
        overflow: 'hidden',
        textOverflow: 'none',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        wordBreak:'keep-all',
    });


    return (
        <Col>
            <DivStyled>
                <DivImgCoverStyled>
                    <ImgStyled src={coverShop} />
                </DivImgCoverStyled>
                <Col>
                    <TextShopStyled>ชื่อร้าน: {name}</TextShopStyled>
                    <Row wrap={false}>
                    <img height={20} src="https://img.icons8.com/color/48/fa314a/marker--v1.png"/>
                        <TextLocationStyled>{location}</TextLocationStyled>
                    </Row>
                </Col>
            </DivStyled>
        </Col>
    )
}

export default CardRestaurant
