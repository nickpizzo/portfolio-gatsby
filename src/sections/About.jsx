import React from 'react';
import Fade from 'react-reveal/Fade';
import { Box, Flex, Image } from 'rebass';
import styled from 'styled-components';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="🙋‍♂️" label="person" />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Fade bottom>
          <p>test</p>
        </Fade>
      </Box>

      <Box width={[1, 1, 2 / 6]} css={{ maxWidth: '300px', margin: 'auto' }}>
        <Fade right>
          <ProfilePicture mt={[4, 4, 0]} ml={[0, 0, 1]} />
        </Fade>
      </Box>
    </Flex>
  </Section.Container>
);

export default About;
