import { Box, HStack, Image, Stack } from '@chakra-ui/react'
import React from 'react'

function GithubStats() {
  return (
    <Box mt="60px" display="flex" flexDirection="column" gap="10">
      <Image
        height={{base:'auto',lg:"295px"}}
        src="https://github-readme-streak-stats.herokuapp.com?user=ShrikantJawla&hide_border=false&border_radius=5&fire=DD3704"
      />
      <Stack direction={{ base: 'column', lg: 'row' }} color="#000000">
        <Image
          height="195px"
          src="https://github-readme-stats.vercel.app/api?username=shrikantjawla&count_private=true&show_icons=true"
        />
        <Image
          height="195px"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=shrikantjawla&show_icons=true&theme=light&title_color=000000&text_color=000000&locale=en&layout=compact"
        />
      </Stack>
    </Box>
  )
}

export default GithubStats
