import React from "react";
import styled from "styled-components"

export default function VWVH () {
  return (
    <>
    <div className="app-container">
      <header>
        <h1>React with vh and vw</h1>
      </header>
      <main>
        <_Box style={{ height: '50vh', width: '50vw' }}>
        </_Box>
      </main>
    </div>
    </>
  )
}

const _Box = styled.div`
  background-color: blue;
`