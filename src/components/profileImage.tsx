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

    return (<img


        style={{
            border : ' #364153 4px solid',
            background :
                'radial-gradient(ellipse at top, rgb(160, 189, 184) 0%, rgb(193, 179, 197) 46%, rgb(191, 194, 236) 100%)'}}
        onClick={imageClickHandler} className={`w-[110px] 
    h-[110px]
    md:w-[150px]
    md:h-[150px]
    lg:w-[180px]
    lg:h-[180px]
    rounded-full 
    cursor-pointer
    object-cover  
    `}src={imgSrc}
        // {this.state.info.image}
        alt="Chen Peleg imag"
    />)
}
