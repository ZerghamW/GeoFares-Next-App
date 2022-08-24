////////////////////////////////////////////////////////////////////////////////
/////                       Project: MetaDat                             ///////
////////////////////////////////////////////////////////////////////////////////
////                                                                        ////
////                    Author: Zergham Warraich                            ////
////                    Date:   Friday, 22 July, 2022                       ////
////                    Git Initialized:   Sat 23, July, 2022               ////
////                                                                        ////
////                                                                        ////
////////////////////////////////////////////////////////////////////////////////

import { useEffect } from 'react'   // Importing user effect components from the react file system
import Head from 'next/head'       // Pre-defined Head
import Image from 'next/image'     // Pre-defined images
import React from 'react'         // Actually Import the react in main.js
import tw from "tailwind-styled-components"    // Importing Tailwind CSS that is downloaded through npx
import Map from './components/Map'        // Pre-defined file system of Map

import Link from 'next/link'  // To link js files to each other

//import styled from "styled-components"

// Exporting and Initializing the Home Function which is pre-requistes of that particular project...

export default function Home() {

  

 // const map = new mapboxgl.Map({
 //   container: 'map', // container ID
 //   style: 'mapbox://styles/mapbox/streets-v11', // style URL
 //   center: [-74.5, 40], // starting position [lng, lat]
//    zoom: 9 // starting zoom
//});


// The Below is JSX which is JavaScript XML, an advanced data-fetching based Markup

  return (
    // Beyond "div" there is also some user-defined tags we can use in JSX

    <Wrapper>
      <Map />
      <Area>
      <UserApp>
        <Header>
          <AppLogo src="https://i.ibb.co/dbDzc9c/pngegg.png"></AppLogo>
          <LogoText>     LastRide.com  ````  </LogoText>
          <Profile>
            <Name>Muhammad Zergham
            <OutSign>Sign-Out</OutSign>
            </Name>
            <UserImage src="https://i.ibb.co/RCVj1Fw/280767087-691554458777321-4755083129573490093-n.jpg"></UserImage>

          </Profile>
        </Header>
      </UserApp>
        <Actions>
        <Link href="/search">
          <Action_area>
      
            <Action_icon src="https://i.ibb.co/qjVgFWQ/pngwing-com.png" />
            Cars

          </Action_area>
          </Link>
          <Action_area>
            <Link href="/BikeSearch">
            <Action_icon src="https://i.ibb.co/gv8XZbb/bike.png" />
            </Link>
            Motorcycles
            
          </Action_area>
 
          <Action_area>
            <Link href="/CycleSearch">
            <Action_icon src="https://i.ibb.co/sv1n5P5/Pngtree-man-riding-bicycle-7299147.png" />
            </Link>
            Bicycles

          </Action_area>

          
          <Action_area>
            <Link href="/Reserved">

            <Action_icon src="https://i.ibb.co/3T55qYd/red-round-book-now-button.png" />
           </Link>
            Reserved
            </Action_area>
            </Actions>
  
     
      
      <QuestInput>
        <Link href = "/search">
        Where to go?
        </Link>
      </QuestInput>
  
      <Footer> ⓒ Muhammad Zergham - 2022
      </Footer>
      </Area>
    </Wrapper>

  )

}

// Defining thses user-defined tags........
// --------------- Tailwind CSS ----------- //
const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen

`
const Area = tw.div`
flex-1 bg-blue-900 text-white
`
const Header = tw.div`
flex justify-between items-center

`
const UserApp = tw.div`
flex

`
const AppLogo = tw.img`
h-16 w-16 float-left


`
const Profile = tw.div`
flex items-center py-4 float-right p-1 ml-auto
`
const Name = tw.div`
mr-4 w-22 text-sm flex float-right

`
const UserImage = tw.img`
h-12 w-12 rounded-full border-4 border-green-500 p-px transform hover:scale-105

`
const LogoText = tw.div`
text-bold font-bold text-xl text-pink-300
`
const Actions = tw.div`
flex justify-center

`
const Action_area = tw.div`
bg-green-500 flex-1 m-1 h-28 items-center flex-col rounded-lg transform hover:scale-105 text-xl text-center

`
const Action_icon = tw.img`
h-20 w-28
`
const QuestInput = tw.div`
h-22 w-22 bg-green-500 text-xl p-4 text-center rounded-lg flex items-center
mt-8
`
const Footer = tw.div`
flex justify-center
`
const OutSign = tw.div`
text-yellow-400 text-xs text-center
`

