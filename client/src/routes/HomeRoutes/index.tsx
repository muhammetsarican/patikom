import Home from "../../components/layout/Home";
import AboutMePageRoute from "./AboutMePageRoute";
import AnimalPageRoute from "./ClientPageRoutes/AnimalPageRoute";
import PregnantLogPageRoute from "./ClientPageRoutes/PregnantLogPageRoute";
import TreatmentHistoryPageRoute from "./ClientPageRoutes/TreatmentHistoryPageRoute";
import VaccineRecordsPageRoute from "./ClientPageRoutes/VaccineRecordsPageRoute";
import ContactPageRoute from "./ContactPageRoute";
import MainPageRoute from "./MainPageRoute";

export default {
    path: "",
    element: <Home />,
    children: [
        MainPageRoute,
        AnimalPageRoute,
        VaccineRecordsPageRoute,
        TreatmentHistoryPageRoute,
        PregnantLogPageRoute,
        ContactPageRoute,
        AboutMePageRoute
    ]
}