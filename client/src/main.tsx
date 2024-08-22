import ReactDOM from 'react-dom/client'
import RouterProvider from './providers/RouterProvider.tsx'
import { AxiosProvider } from './providers/AxiosProvider.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <AxiosProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </AxiosProvider>
  </>,
)
