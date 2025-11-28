import ExportButtons from '../components/Bottons/ExportButtons.tsx';
import type {Information} from '../types/Information.ts';
import { AppMainContent } from './AppMainContent.tsx';
import {AppSidebar} from './AppSidebar.tsx';

export const AppLayout = ({info}: { info: Information }) => {

    return <div id={'cv-wrapper'}
                className={`wrapper bg-light max-w-[960px] my-0 mx-auto relative flex lg:flex-row flex-col `}
                style={{boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.4)",
               }}>
        <ExportButtons></ExportButtons>
        <AppSidebar info={info}/>
        <AppMainContent info={info}/>

    </div>
}
