import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components';

import CoronaLogo from '../../assets/images/corona-logo.png';
import fonts from '../../assets/fonts';

const Container = styled(Animated.View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const Logo = styled.Image({
  width: 200,
  height: 200,
});

const LogoText = styled.Text({
  fontSize: 25,
  marginTop: 20,
  fontFamily: fonts.primary,
});

const Preload = () => {
  const [logoWrapper] = useState({
    posX: new Animated.Value(0),
    opacity: new Animated.Value(1),
  });

  const animation = Animated.sequence([
    Animated.delay(1200),
    Animated.parallel([
      Animated.timing(logoWrapper.posX, {
        toValue: 300,
        duration: 800,
      }),
      Animated.timing(logoWrapper.opacity, {
        toValue: 0,
        duration: 800,
      }),
    ]),
  ]);

  useEffect(() => {
    animation.start();
  }, [animation]);

  return (
    <Container
      style={{
        transform: [{translateX: logoWrapper.posX}],
        opacity: logoWrapper.opacity,
      }}>
      <Logo source={CoronaLogo} />
      <LogoText>Coronavírus Informações</LogoText>
    </Container>
  );
};

export default Preload;
