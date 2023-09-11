import {Provider} from "react-redux"
import {store} from "@/services/store.ts"
import {Router} from "@/router.tsx"

export function App() {

  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}
