import ExportButtons from '../components/Bottons/ExportButtons.tsx';
import type {Information} from '../types/Information.ts';
import { AppMainContent } from './AppMainContent.tsx';
import {AppSidebar} from './AppSidebar.tsx';

export const AppLayout = ({info}: { info: Information }) => {
    return <div className="wrapper">
        <ExportButtons></ExportButtons>
        <AppSidebar info={info}/>
        <AppMainContent info={info}/>

    </div>
}
