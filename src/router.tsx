import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Layout } from './layout'

import { DecksPage } from '@/pages/decks-page/decks-page.tsx'
import { PersonalInformationPage } from '@/pages/personal-information/personal-information-page.tsx'
import { SignInPage } from '@/pages/sign-in-page/sign-in-page.tsx'
import { SignUpPage } from '@/pages/sign-up.tsx'
import { useGetMeQuery } from '@/services/auth/auth.service.ts'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <DecksPage />,
  },
  {
    path: '/personal-information',
    element: <PersonalInformationPage />,
  },
]

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      {
        element: <Layout />,
        children: publicRoutes,
      },
    ],
  },
])

export const Router = () => {
  const { isLoading: isMeLoading } = useGetMeQuery()

  if (isMeLoading) return <div>Loading...</div>

  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data: me, isLoading: isMeLoading } = useGetMeQuery()

  const isAuthenticated = me && me?.success !== false

  if (isMeLoading) return <div>Loading...</div>

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
