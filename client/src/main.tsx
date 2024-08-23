import ReactDOM from 'react-dom/client'
import RouterProvider from './providers/RouterProvider.tsx'
import { AxiosProvider } from './providers/AxiosProvider.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'
import { AnimalDataProvider } from './providers/AnimalDataProvider.tsx'
import { FolkDataProvider } from './providers/FolkDataProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <AxiosProvider>
      <AuthProvider>
        <FolkDataProvider>
          <AnimalDataProvider>
            <RouterProvider />
          </AnimalDataProvider>
        </FolkDataProvider>
      </AuthProvider>
    </AxiosProvider>
  </>,
)
