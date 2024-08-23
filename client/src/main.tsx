import ReactDOM from 'react-dom/client'
import RouterProvider from './providers/RouterProvider.tsx'
import { AxiosProvider } from './providers/AxiosProvider.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'
import { AnimalDataProvider } from './providers/AnimalDataProvider.tsx'
import { FolkDataProvider } from './providers/FolkDataProvider.tsx'
import { VaccineDataProvider } from './providers/VaccineDataProvider.tsx'
import { PregnantLogDataProvider } from './providers/PregnantLogDataProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <AxiosProvider>
      <AuthProvider>
        <FolkDataProvider>
          <AnimalDataProvider>
            <VaccineDataProvider>
              <PregnantLogDataProvider>
                <RouterProvider />
              </PregnantLogDataProvider>
            </VaccineDataProvider>
          </AnimalDataProvider>
        </FolkDataProvider>
      </AuthProvider>
    </AxiosProvider>
  </>,
)
