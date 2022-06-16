import React, {useState} from 'react';

import Moves from './Moves';
import Evolution from './Evolution';
import BaseStats from './BaseStats';
import About from './About';

import {Container, Text, AreaBtn, Btn, TextBtn, AreaScreen} from './style';

export default function Description() {
  const [textColorAbout, setTextColorAbout] = useState('#121212');
  const [textColorStats, setTextColorStats] = useState('#bebebe');
  const [textColorEvolution, setTextColorEvolution] = useState('#bebebe');
  const [textColorMoves, setTextColorMoves] = useState('#bebebe');
  const [screen, setScreen] = useState('About');

  function handleAbout() {
    if (textColorAbout === '#bebebe') {
      setTextColorAbout('#121212');
      setTextColorEvolution('#bebebe');
      setTextColorMoves('#bebebe');
      setTextColorStats('#bebebe');
      setScreen('About');
    }
  }
  function handleMoves() {
    if (textColorMoves === '#bebebe') {
      setTextColorMoves('#121212');
      setTextColorEvolution('#bebebe');
      setTextColorAbout('#bebebe');
      setTextColorStats('#bebebe');
      setScreen('Moves');
    }
  }
  function handleStats() {
    if (textColorStats === '#bebebe') {
      setTextColorStats('#121212');
      setTextColorEvolution('#bebebe');
      setTextColorMoves('#bebebe');
      setTextColorAbout('#bebebe');
      setScreen('Stats');
    }
  }
  function handleEvolution() {
    if (textColorEvolution === '#bebebe') {
      setTextColorEvolution('#121212');
      setTextColorMoves('#bebebe');
      setTextColorStats('#bebebe');
      setTextColorAbout('#bebebe');
      setScreen('Evolution');
    }
  }

  return (
    <Container>
      <AreaBtn>
        <Btn onPress={handleAbout}>
          <TextBtn color={textColorAbout}>About</TextBtn>
        </Btn>
        <Btn onPress={handleStats}>
          <TextBtn color={textColorStats}>Base Stats</TextBtn>
        </Btn>
        <Btn onPress={handleEvolution}>
          <TextBtn color={textColorEvolution}>Evolution</TextBtn>
        </Btn>
        <Btn onPress={handleMoves}>
          <TextBtn color={textColorMoves}>Moves</TextBtn>
        </Btn>
      </AreaBtn>
      <AreaScreen>
        {screen === 'About' && <About />}
        {screen === 'Stats' && <BaseStats />}
        {screen === 'Evolution' && <Evolution />}
        {screen === 'Moves' && <Moves />}
      </AreaScreen>
    </Container>
  );
}
