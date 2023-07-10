"use client"

import styled from "styled-components"
import Image from "next/image"

export default function Home() {
  return (
    <MainContainer>
      <Image src="/MainBackground.png" alt="image" sizes="100vw" />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
