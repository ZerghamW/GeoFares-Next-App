import { useState } from 'react'
import tw from "tailwind-styled-components"    // Importing Tailwind CSS that is downloaded through npx
import Link from 'next/link'

const CycleSearch = () => {

  const [pickup, setPickup ] = useState("");
  const  [dropoff, setDropoff ] = useState("");

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
        <BackButton src="https://i.ibb.co/k5JYq4w/kindpng-583580.png" />

        </Link>
      </ButtonContainer>

      <InputContainer>
      <Input 
        placeholder = "From Where you want to Start?" 
        value = {pickup}
        onChange = {(e) => setPickup(e.target.value)}
        />
      
      <Input 
        placeholder = "Where You Want to Go?"
        value = {dropoff}
        onChange = {(e) => setDropoff(e.target.value)}
      />

      
      
      </InputContainer>

      <SavedPlaces>
      <SavedIcon src='https://i.ibb.co/z47KBHR/star-images-9441.png' />
      Your Saved Places


      </SavedPlaces>

      <ConfirmLocations>
        <Link href={{
          pathname: "/CycleConfirm",
          query: {
            pickup: pickup,
            dropoff: dropoff
          }
        }}>
        <ConfirmLocation>
        Confirm this Location?
        


        </ConfirmLocation>
        </Link>

      </ConfirmLocations>




    </Wrapper>
  )
}

export default CycleSearch;

const Wrapper = tw.div`
bg-blue-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4 cursor-pointer
`
const BackButton = tw.img`
w-10 h-10
`
const InputContainer = tw.div`

bg-blue-900 flex flex-col flex-1

`
const SavedPlaces =tw.div`
flex items-center bg-green-200 px-4 py-2
`

const ConfirmLocations = tw.div`
bg-green-900 text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`

const Input = tw.input`

h-12 bg-red-500 text-white my-2 rounded-2 p-2 outline-none border-none items-center

`

const SavedIcon = tw.img`
bg-green-500 w-20 h-20 rounded-full items-center mr-2
`

const ConfirmLocation = tw.div`
`