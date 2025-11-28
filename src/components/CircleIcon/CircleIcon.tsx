
import {ImageIcon} from '../../icons/ImageIcon.tsx';
import type {ImageIconName} from '../../icons/ImageIcons.ts';




export const CircleIcon = ({
                               name
                           }: { className?: string, name: ImageIconName }) => {
    return (
        <span className={`p-1 w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#2d7788] text-white  `}>


        <ImageIcon className={'w-5 h-5'} name={name as ImageIconName} />
        </span>
    )

}
