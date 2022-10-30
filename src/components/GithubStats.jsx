import { Box, Image, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { motion as m } from 'framer-motion'
import { fadeInTextVariant } from './skillsPageAnimations'

const MotionImage = m(Image)

function GithubStats() {
  return (
    <Box
      alignItems="center"
      mt="60px"
      display="flex"
      flexDirection="column"
      gap="10"
    >
      <Box w="full" position="relative">
        <MotionImage
          variants={fadeInTextVariant}
          initial="hidden"
          whileInView="visible"
          zIndex={4}
          alignSelf="self-start"
          height={{ base: 'auto', lg: '295px' }}
          src="https://github-readme-streak-stats.herokuapp.com?user=ShrikantJawla&hide_border=true&border_radius=5&fire=DD3704&theme=deepBlue"
        />
        <BackgroundText>Github</BackgroundText>
      </Box>
      <Stack direction={{ base: 'column', lg: 'row' }} color="#000000">
        <MotionImage
          variants={fadeInTextVariant}
          initial="hidden"
          whileInView="visible"
          height="195px"
          src="https://github-readme-stats.vercel.app/api?username=shrikantjawla&count_private=true&show_icons=true&bg_color=1c1d1c&text_color=ffffff&title_color=ffffff&icon_color=ffffff"
        />
        <MotionImage
          variants={fadeInTextVariant}
          initial="hidden"
          whileInView="visible"
          height="195px"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=shrikantjawla&show_icons=true&theme=light&bg_color=1c1d1c&title_color=ffffff&text_color=ffffff&locale=en&layout=compact"
        />
      </Stack>
    </Box>
  )
}

export default GithubStats

const BackgroundText = styled.p`
  z-index: 1;
  position: absolute;
  top: 0;
  right: -50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 190px;
  line-height: 230px;

  color: rgba(143, 140, 140, 0.059);

  text-shadow: 0px 4px 4px rgba(157, 156, 156, 0.158);
  @media screen and (max-width: 1024px) {
    font-size: 100px;
  }
  @media screen and (max-width: 767px) {
    font-size: 70px;
  }
`
