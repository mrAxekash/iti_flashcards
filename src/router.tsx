import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Layout } from './layout'

import { CardsPage } from '@/pages/cards-page/cards-page.tsx'
import { CheckEmailPage } from '@/pages/check-email-page/check-email-page.tsx'
import { CreateNewPasswordPage } from '@/pages/create-new-password/create-new-password-page.tsx'
import { DecksPage } from '@/pages/decks-page/decks-page.tsx'
import { ErrorPage } from '@/pages/error-page/errorPage.tsx'
import { LearnModalPage } from '@/pages/learn-modal-page/learnModalPage.tsx'
import { PersonalInformationPage } from '@/pages/personal-information/personal-information-page.tsx'
import { RecoverPasswordPage } from '@/pages/recover-password-page/recover-password-page.tsx'
import { SignInPage } from '@/pages/sign-in-page/sign-in-page.tsx'
import { SignUpPage } from '@/pages/sign-up-page/sign-up-page.tsx'
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
  {
    path: '/check-email',
    element: <CheckEmailPage />,
  },
  {
    path: '/recover-password',
    element: <RecoverPasswordPage />,
  },
  {
    path: '/confirm-email/:token',
    element: <CreateNewPasswordPage />,
  },
  {
    path: '/cards/:deckId',
    element: <CardsPage />,
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
  {
    path: '/learn/:deckTitle/:deckId',
    element: <LearnModalPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
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
        ...publicRoutes
    ],
  },
])

export const Router = () => {

  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data: me, isLoading: isMeLoading } = useGetMeQuery()

  const isAuthenticated = me && me?.success !== false

  if (isMeLoading) return <div>Loading...</div>

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
