import React from 'react'
import './progress.css'
import * as Mui from '@mui/material'
import * as Component from 'src/components'

export const Main = () => {
  const [CurrentActive, setCurrentActive] = React.useState(2)
  const [bar, setBar] = React.useState('one')

  const ProgressChange = () => {
    if (CurrentActive === 2) {
      setBar('one')
    } else if (CurrentActive === 3) {
      setBar('two')
    } else if (CurrentActive === 4) {
      setBar('three')
    }
  }
  React.useEffect(() => {
    ProgressChange()
  }, [bar, CurrentActive])
  console.log(CurrentActive)
  const Next = () => {
    if (CurrentActive >= 4) {
      setCurrentActive(4)
    } else {
      setCurrentActive(CurrentActive + 1)
    }
    ProgressChange()
  }
  const Prev = () => {
    if (CurrentActive <= 1) {
      setCurrentActive(1)
    } else {
      setCurrentActive(CurrentActive - 1)
    }
    ProgressChange()
  }
  const Data = [
    {
      no: 1,
    },
    {
      no: 2,
    },
    {
      no: 3,
    },
    {
      no: 4,
    },
  ]
  return (
    <div className="container">
      <div className="containerProgress">
        <h2>Stepper</h2>
        <div className="progress-container">
          <div className={`progress ${bar}`}></div>
          {Data.map((item, index) => {
            return (
              <div
                className={`circle ${index + 1 === CurrentActive && 'activeP'}`}
                key={index}
              >
                {item.no}
              </div>
            )
          })}
        </div>
        <Mui.Stack direction="row" spacing={4} mb={8}>
          <Mui.Button
            onClick={Prev}
            variant="outlined"
            sx={{ color: 'white', backgroundColor: 'black !important' }}
          >
            Previous
          </Mui.Button>
          <Mui.Button
            onClick={Next}
            variant="outlined"
            sx={{ color: 'white', backgroundColor: 'black !important' }}
          >
            Next
          </Mui.Button>
        </Mui.Stack>
        <Component.Arrow />
      </div>
    </div>
  )
}
