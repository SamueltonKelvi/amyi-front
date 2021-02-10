import React from 'react';
import {GlobalStyles} from '../../styles/GlobalApp';
import {Container} from './styles';
import {ModalAmyi} from '../../components';

export default function MiniRanking() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ModalAmyi title="Amyi II - Pimenta rosa, angelica, lactona, patchouli"/>
      </Container>
    </>
  );
}