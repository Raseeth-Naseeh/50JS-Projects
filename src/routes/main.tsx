import React from 'react'
import * as Router from 'react-router-dom'
import * as Pages from 'src/pages'

export const Main = () =>
  Router.useRoutes([
    {
      path: '/',
      element: <Router.Navigate to="home" />,
    },
    {
      path: '/*',
      element: <Pages.Home.Main />,
      children: [
        {
          path: 'home',
          element: <Pages.Home.Home />,
        },
        {
          path: 'expanding-cards',
          element: <Pages.ExpandingCards.Main />,
        },
        {
          path: 'progress-steps',
          element: <Pages.Progress.Main />,
        },
      ],
    },
  ])
