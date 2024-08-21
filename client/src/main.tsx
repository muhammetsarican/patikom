import ReactDOM from 'react-dom/client'
import RouterProvider from './providers/RouterProvider.tsx'
import { AxiosProvider } from './providers/AxiosProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <AxiosProvider>
      <RouterProvider />
    </AxiosProvider>
  </>,
)
