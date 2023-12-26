import { useMediaQuery } from "react-responsive"
import react from "react"

const Ex = () => {
  const isPc = useMediaQuery ({
    query: "(min-width: 1224px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });
  const isBigScreen = useMediaQuery ({
    query: "(min-width: 1824px)"
  });
  const isPortrait = useMediaQuery ({
    query: "(orientation: portrait)"
  });
  const isRetina = useMediaQuery ({
    query: "(min-resolution: 2dppx)"
  })

  return (
    <>
      <div>
        <h1>Device Test!</h1>
        {isPc && <p>You are a desktop or laptop</p>}
        {isBigScreen && <p>You have huge screen</p>}
        {isTablet && <p>You are a tablet a mobile phone</p>} 
        <p>Your are in {isPortrait ? "portrait" : "iandscape"} or ientation</p>
        {isRetina && <p>You are retina</p>}
      </div>
    </>
  )
}

export default Ex