import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider} from 'react-router-dom'
import {Decks} from "@/pages/decks.tsx"
import {useGetDecksQuery} from "@/services/decks/decks.ts"
import {SignInPage} from "@/pages/sing-in.tsx"

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignInPage />,
  },
]

const Compon = () => {
  const { data } = useGetDecksQuery()

  console.log(data)

  return <div>2</div>
}

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
  },
  {
    path: '/2',
    element: <Compon />,
  }
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}