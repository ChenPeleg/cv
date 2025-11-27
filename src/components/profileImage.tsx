import { useState } from "react";



const isFunnyImageProfile = true;
export const ProfileImage = (props: any) => {


    const funnyImages = props.funnyImages;
    const [imagesState, setImageState] = useState<number>(1);
    const [imgSrc, setimgSrc] = useState<string>(props.profileImage);
    const imageClickHandler = () => {

        if (!isFunnyImageProfile) {
            return;
        }
        if (imagesState + 1 < funnyImages.length) {
            setImageState(imagesState + 1);
        } else {
            setImageState(0)
        }

        setimgSrc(funnyImages[imagesState])
        console.log(imagesState, funnyImages[imagesState]);
    }

    // width: 100px;
    // border-radius: 50% 50%;
    // background-color: darkcyan;
    // background: radial-gradient(ellipse at top, rgb(160, 189, 184) 0%, rgb(193, 179, 197) 46%, rgb(191, 194, 236) 100%);
    // border: var(--main-text-medium) 3px solid;
    // margin-bottom: 10px;
    // cursor: pointer;
    return (<img onClick={imageClickHandler} className={`w-[110px] 
    h-[110px]
    md:w-[150px]
    md:h-[150px]
    lg:w-[180px]
    lg:h-[180px]
    rounded-full
    bg-gradient-to-b
    from-cyan-200
    via-purple-200
    to-blue-200
    border-4
    border-solid
    border-gray-700 
    cursor-pointer
    object-cover 
    `}src={imgSrc}
        // {this.state.info.image}
        alt="Chen Peleg imag"
    />)
}
