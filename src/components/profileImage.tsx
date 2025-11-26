import { useState } from "react";



const isFunnyImageProfile = true;
export const ProfileImage = (props: any) => {


    const funnyImages = props.funnyImages;
    const [imagesState, setImageState] = useState<number>(1);
    const [imgSrc, setimgSrc] = useState<string>(props.profileImage);
    const imageClickHandler = (ev: any) => {

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
    return (<img onClick={imageClickHandler} className="profile profile-image" src={imgSrc}
        // {this.state.info.image}
        alt="Chen Peleg imag"
    />)
}

