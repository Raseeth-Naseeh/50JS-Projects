import React from 'react'
import * as Mui from '@mui/material'
import * as Router from 'react-router-dom'

export const Home = () => {
  const Navigate = Router.useNavigate()
  const Data = [
    {
      name: 'Stretch',
      routes: '/expanding-cards',
    },
    {
      name: 'Progress Steps',
      routes: '/progress-steps',
    },
    {
      routes: '/expanding-cards',
      name: 'Stretch',
    },
    {
      routes: '/expanding-cards',
      name: 'Stretch',
    },
    {
      routes: '/expanding-cards',
      name: 'Stretch',
    },
  ]
  return (
    <Mui.Grid container spacing={2}>
      <Mui.Grid item xs={12}>
        <Mui.Stack width="100%" alignItems="center">
          <Mui.Typography variant="h4">50 Javascripts Projects</Mui.Typography>
        </Mui.Stack>
      </Mui.Grid>
      {Data.map((item: any, index) => {
        return (
          <Mui.Grid item xs={12} key={index}>
            <Mui.Stack width="100%" alignItems="center">
              <Mui.Stack
                sx={{
                  border: '1px solid grey',
                  padding: '10px',
                  minWidth: '500px',
                  alignItems: 'center',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  '&:hover': {
                    background: 'grey',
                  },
                }}
                onClick={() => Navigate(item.routes)}
              >
                {index + 1} {item.name}
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Grid>
        )
      })}
    </Mui.Grid>
  )
}
