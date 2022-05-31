import { useState } from "react";



const isFunnyImageProfile = true;
export const ProfileImage = (props) => {
    const allImages = '';

    const funnyImages = props.funnyImages;
    const [imagesState, setImageState] = useState(0);
    const [imgSrc, setimgSrc] = useState(props.profileImage);
    const imageClickHandler = (evnet) => {
        if (imagesState < funnyImages.lenght) {
            setImageState(imagesState + 1);
        } else {
            setImageState(0)
        }
        setimgSrc(funnyImages[imagesState])
    }
    return (<img onClick={imageClickHandler} className="profile profile-image" src={imgSrc}
        // {this.state.info.image} 
        alt="Chen Peleg imag"
    />)
} 
