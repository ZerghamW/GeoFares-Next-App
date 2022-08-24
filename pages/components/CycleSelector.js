import React from 'react'
import tw from "tailwind-styled-components"    // Importing Tailwind CSS that is downloaded through npx
import { useEffect, useState } from "react"

const BikeSelector = () => {

  return (
    <Wrapper>
      <Title>
        Following Bycycles are Available with these Fare Rates

      </Title>
      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/fQpDxQm/715-Lhdg-Px-UL-SL1500.jpg" />
          <CarDetails>
            <Service>
              GreenLand - 4
            </Service>
            <Time>
              60-Min Away
            </Time>
          </CarDetails>
          <Price>
            PKr -300/-
          </Price>

        </Car>

      </CarList>

      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/YLRrZMk/61-JK-HRlbr-L-SL1100.jpg" />
          <CarDetails>
            <Service>
            Milk - Cycle
            </Service>
            <Time>
              Whole Day
            </Time>
          </CarDetails>
          <Price>
            PKr -300/-
          </Price>

        </Car>

      </CarList>
      <CarList>
        <Car> 
          <CarImage src="https://i.ibb.co/2g0bW4r/carriage-6952336-1920.png" />
          <CarDetails>
            <Service>
            Family Tanga (With Natural AC)
            </Service>
            <Time>
              45-Min Away
            </Time>
          </CarDetails>
          <Price>
            PKr -120/person or 1000-
          </Price>

        </Car>

      </CarList>

      
      
      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/Ph3rxpb/pngwing-com-2.png" />
          <CarDetails>
            <Service>
              Accident (for disappointed only)
            </Service>
            <Time>
             Till passed away
            </Time>
          </CarDetails>
          <Price>
            Only the cost of Bike + Petrol/-
          </Price>

        </Car>

      </CarList>
      
    </Wrapper>
  )
}

export default BikeSelector;

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