import React from 'react'
import tw from "tailwind-styled-components"    // Importing Tailwind CSS that is downloaded through npx
import { useEffect, useState } from "react"

const BikeSelector = () => {

  return (
    <Wrapper>
      <Title>
        Following Bikes are Available with these Fare Rates

      </Title>
      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/7zD8JNh/kindpng-2200289-1.png" />
          <CarDetails>
            <Service>
              Honda - 70
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
          <CarImage src="https://i.ibb.co/gv8XZbb/bike.png"  />
          <CarDetails>
            <Service>
            Honda - 125
            </Service>
            <Time>
              20-Min Away
            </Time>
          </CarDetails>
          <Price>
            PKr -1200/-
          </Price>

        </Car>

      </CarList>
      <CarList>
        <Car> 
          <CarImage src="https://i.ibb.co/tL1pgC6/Qingqi-Rikshaw-PNG-Images.png" />
          <CarDetails>
            <Service>
            Gents Rikshaw (With Natural AC)
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
          <CarImage src="https://i.ibb.co/yqGt3M9/kisspng-auto-rickshaw-car-scooter-vehicle-auto-rickshaw-5ac1da1a9fe7c9-671466501522653722655-2.png" />
          <CarDetails>
            <Service>
              Ladies Rikshaw (with Curtin)
            </Service>
            <Time>
              55-Mins Away
            </Time>
          </CarDetails>
          <Price>
            PKr -100/lady or 800-
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