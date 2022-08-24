import React from 'react'
import tw from "tailwind-styled-components"    // Importing Tailwind CSS that is downloaded through npx
import Link from 'next/link'  // To link js files to each other

const Reserved = () => {
  return (
    <Wrapper>
        <ButtonContainer>
        <Link href="/">
        <BackButton src="https://i.ibb.co/k5JYq4w/kindpng-583580.png" />

        </Link>
      </ButtonContainer>
        <ImageIcon src="https://i.ibb.co/LCZ5MZM/im-sorry-338246.png" />
        <TextArea>
            But at this time, the current feature and related functionalities are Unavailable.
        </TextArea>
        </Wrapper>
  )
}

export default Reserved;

const Wrapper = tw.div`
`
const ImageIcon = tw.img`
`

const TextArea = tw.div`
text-xl text-center text-red-900
`

const ButtonContainer = tw.div`
bg-white px-4 cursor-pointer
`
const BackButton = tw.img`
w-10 h-10
`