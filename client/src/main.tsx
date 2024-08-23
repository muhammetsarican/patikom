import ReactDOM from 'react-dom/client'
import RouterProvider from './providers/RouterProvider.tsx'
import { AxiosProvider } from './providers/AxiosProvider.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'
import { AnimalDataProvider } from './providers/AnimalDataProvider.tsx'
import { FolkDataProvider } from './providers/FolkDataProvider.tsx'
import { VaccineDataProvider } from './providers/VaccineDataProvider.tsx'
import { PregnantLogDataProvider } from './providers/PregnantLogDataProvider.tsx'
import { TreatmentDataProvider } from './providers/TreatmentDataProvider.tsx'
import { CategoryDataProvider } from './providers/CategoryDataProvider.tsx'
import { MedicineDataProvider } from './providers/MedicineDataProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <AxiosProvider>
      <AuthProvider>
        <FolkDataProvider>
          <AnimalDataProvider>
            <VaccineDataProvider>
              <PregnantLogDataProvider>
                <CategoryDataProvider>
                  <MedicineDataProvider>
                    <TreatmentDataProvider>
                      <RouterProvider />
                    </TreatmentDataProvider>
                  </MedicineDataProvider>
                </CategoryDataProvider>
              </PregnantLogDataProvider>
            </VaccineDataProvider>
          </AnimalDataProvider>
        </FolkDataProvider>
      </AuthProvider>
    </AxiosProvider>
  </>,
)
