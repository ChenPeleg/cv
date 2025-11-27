import {AppIcon} from '../../icons/AppIcon.tsx';

export const CircleIcon = ({
                               name
                           }: { className?: string, name: string }) => {
    return (
        <span className={`p-1 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#2d7788] text-white  shadow-2xl`}>


        <AppIcon name={name as any} className={'h-4 w-4'}/>
        </span>
    )

}
