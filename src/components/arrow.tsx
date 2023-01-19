import React from 'react'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import * as Mui from '@mui/material'
import * as Router from 'react-router-dom'
export const Arrow = () => {
  const Navigate = Router.useNavigate()
  return (
    <Mui.Stack width="100%" alignItems="center">
      <ArrowCircleLeftTwoToneIcon
        onClick={() => Navigate(-1)}
        sx={{ fontSize: '50px', cursor: 'pointer' }}
      />
    </Mui.Stack>
  )
}
