import React from 'react'

import styled from 'styled-components'

// Routing
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom'
import { Navigate } from 'react-router'



const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.designColors.background.default};
`

const Root = () => {
  return (
    <RootContainer>
      <Outlet />
      {/* <Toast /> */}
    </RootContainer>
  )
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>

      <Route
        path="/*"
        element={
          <Home />
        }
      >
    
      </Route>

      {/* <Route
        path="login/*"
        element={
          <AuthenticatedRoute isGuest>
            <Login />
          </AuthenticatedRoute>
        }
      /> */}
      <Route path="*" element={<Navigate to="login" />} />
    </Route>,
  ),
)
