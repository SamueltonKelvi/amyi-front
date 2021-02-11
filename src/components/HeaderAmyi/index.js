import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%auto;
    height: auto;
    align-items: flex-end;
    justify-content: center;
    font-size: 14pt;
    font-weight: 500;  
    background-color: #FFF;
    padding: 10px;
    border-bottom: 1px solid #000;
`;

export default function HeaderAmyi(){
    return (
        <Container>
            Amyi
        </Container>
    )
}