import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"    // Importing Tailwind CSS that is downloaded through npx
import Link from 'next/link'  // To link js files to each other
import Map from './components/Map'
import { data } from 'autoprefixer'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'



const Confirm = () => {
  const router = useRouter()
  const {pickup, dropoff } = router.query


  const [ startCoordinates,setStartCoordinates ] = useState()
  const [ endCoordinates, setEndCoordinates ] = useState()

  const getStartCoordinates = (pickup) => {

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
          access_token: "pk.eyJ1IjoiemVyZ2hhbXdhcnJhaWNoIiwiYSI6ImNsNXdlcWN4ZjAwaTIzaW1tdms4andiNDQifQ.uLI65gh6lFYJNf4apvvJDA",
          limit: 1

    })
    )
    .then(Response => Response.json())
    .then(data => {
         
         setStartCoordinates(data.features[0].center)
    })


  }

  const getEndCoordinates = (dropoff) => {

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
        new URLSearchParams({
          access_token: "pk.eyJ1IjoiemVyZ2hhbXdhcnJhaWNoIiwiYSI6ImNsNXdlcWN4ZjAwaTIzaW1tdms4andiNDQifQ.uLI65gh6lFYJNf4apvvJDA",
          limit: 1

    })
    )
    .then(Response => Response.json())
    .then(data => {
      
      setEndCoordinates(data.features[0].center)
    })


  }

useEffect(() => {
  getStartCoordinates(pickup);
  getEndCoordinates(dropoff);
}, [pickup, dropoff])
  return (
    <Wrapper>
        <Map 

        startCoordinates = {startCoordinates}
        endCoordinates = {endCoordinates}
        
        />
        <RideContainer>
          <RideSelector />
          
         
          
          <ConfirmButtonContainer>
            <ConfirmButton>
            <Link href="/search">
              Done this Vehicle
              </Link>

            </ConfirmButton>

          </ConfirmButtonContainer>

        </RideContainer>

    </Wrapper>
  )
}

export default Confirm

// -------- Tailwind CSS ---------------------//

const Wrapper = tw.div`
flex h-screen flex-col
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2

`

const ConfirmButtonContainer = tw.div`
bg-blue-900
`

const ConfirmButton = tw.div`
bg-green-700 text-white my-4 mx-10 text-center 
`