import { useState } from "react";



const isFunnyImageProfile = true;
export const ProfileImage = (props) => {


    const funnyImages = props.funnyImages;
    const [imagesState, setImageState] = useState(1);
    const [imgSrc, setimgSrc] = useState(props.profileImage);
    const imageClickHandler = (ev) => {

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
