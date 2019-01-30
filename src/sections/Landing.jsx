import React, { Fragment } from 'react';
import TextLoop from 'react-text-loop';
import { Flex, Heading, Label } from 'rebass';
import styled from 'styled-components';
import Developer from '../components/Logo/coding.svg';
import MouseIcon from '../components/MouseIcon';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const ResponsiveLogo = styled.img`
  max-width: 65px;
  margin-left: 12px;
`;

const Logo = ({ url, logo, alt = '' }) => (
  <a href={url} rel="noopener noreferrer" target="_blank">
    <ResponsiveLogo src={logo} alt={alt} />
  </a>
);

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Fragment>
      <Heading
        textAlign="center"
        is="h1"
        color="primary"
        fontSize={[5, 6, 8]}
        mb={[3, 4, 5]}
      >
        Hello, I'm Nick
      </Heading>

      <Heading
        is="h2"
        color="primary"
        fontSize={[4, 5, 6]}
        mb={[2, 4]}
        textAlign="center"
      >
        <TextLoop>
          <Flex style={{ width: 300 }}>
            Developer
            <Logo
              url="https://www.contentful.com/"
              logo={Developer}
              alt="Powered by Contentful"
            />
          </Flex>
          {/* <p style={{ width: 400 }}>test 2</p> */}
        </TextLoop>
      </Heading>
      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        <Label mx={3} fontSize={[5, 6, 6]}>
          {/* <SocialLink color="primary" hoverColor="primaryLight" /> */}
        </Label>
      </Flex>
      <MouseIcon />
    </Fragment>
  </Section.Container>
);

export default LandingPage;
