import React from 'react'
import tw from "tailwind-styled-components"    // Importing Tailwind CSS that is downloaded through npx
import { useEffect, useState } from "react"

const RideSelector = () => {

  return (
    <Wrapper>
      <Title>
        Following Vehicles are Available with these Fare Rates

      </Title>
      <CarList>
        <Car>
          <CarImage src = "https://i.ibb.co/qjVgFWQ/pngwing-com.png" />
          <CarDetails>
            <Service>
              Mehran
            </Service>
            <Time>
              30-Min Away
            </Time>
          </CarDetails>
          <Price>
            PKr -900/-
          </Price>

        </Car>

      </CarList>

      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/HNKsMjH/mercedes-PNG80135.png" />
          <CarDetails>
            <Service>
            Mercedes
            </Service>
            <Time>
              10-Min Away
            </Time>
          </CarDetails>
          <Price>
            PKr -1500/-
          </Price>

        </Car>

      </CarList>
      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/c1vWMtK/Sedan-Transparent.png" />
          <CarDetails>
            <Service>
            Corola
            </Service>
            <Time>
              10-Min Away
            </Time>
          </CarDetails>
          <Price>
            PKr -1000/-
          </Price>

        </Car>

      </CarList>

      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/bRPNGLf/download-1.jpg" />
          <CarDetails>
            <Service>
              Pajaro
            </Service>
            <Time>
              10-Days Away
            </Time>
          </CarDetails>
          <Price>
            PKr -100/-
          </Price>

        </Car>

      </CarList>
      
      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/54YNvTZ/ESA6n-DCUYAEr-QYE.jpg" />
          <CarDetails>
            <Service>
              Jhoom Lyy
            </Service>
            <Time>
              150-Days Away
            </Time>
          </CarDetails>
          <Price>
            PKr -520/-
          </Price>

        </Car>

      </CarList>
      
    </Wrapper>
  )
}

export default RideSelector;

const Wrapper = tw.div`
flex-1 bg-red-200 overflow-y-scroll flex flex-col
`
const CarList = tw.div`

`
const Title = tw.div`
text-yellow-900 text-center text-xs py-2 border-b
`
const Car = tw.div`
flex p-4 items-center
`
const CarImage = tw.img`
h-14 mr-4
`
const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-green-700
`
const Price = tw.div`
text-sm text-blue-700
`