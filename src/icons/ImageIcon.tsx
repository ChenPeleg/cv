import React from 'react';
import type {ImageIconProps} from './ImageIcons';


import bookCheck from '../assets/images/book-check.png';
import box3d from '../assets/images/box-3d.png';
import boxAlt from '../assets/images/box-alt.png';
import comment from '../assets/images/comment.png';
import diamond from '../assets/images/diamond.png';
import folder from '../assets/images/folder.png';
import link from '../assets/images/link.png';
import message from '../assets/images/message.png';
import mortarboard from '../assets/images/mortarboard.png';
import phone from '../assets/images/phone.png';
import print from '../assets/images/print.png';
import save from '../assets/images/save.png';
import userAdd from '../assets/images/user-add.png';
import userAlt from '../assets/images/user-alt.png';
import world from '../assets/images/world.png';
import linkedin from '../assets/images/linkedin.png';
import medium from '../assets/images/medium.png';

const imageMap: Record<string, string> = {
    'book-check': bookCheck,
    'box-3d': box3d,
    'box-alt': boxAlt,
    linkedin,
    comment,
    diamond,
    folder,
    link,
    message,
    mortarboard,
    phone,
    print,
    save,
    'user-add': userAdd,
    'user-alt': userAlt,
    world,
    medium
};

export const ImageIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement> & ImageIconProps>(({
                                                                                                                             name,
                                                                                                                             alt,
                                                                                                                             className = 'h-6 w-6',
                                                                                                                             width,
                                                                                                                             height,
                                                                                                                             ...props
                                                                                                                         }, ref) => {
    const imageSrc = imageMap[name];

    if (!imageSrc) {
        console.warn(`Image icon "${name}" not found`);
        return null;
    }

    return (<img
            ref={ref}
            src={imageSrc}
            alt={alt || name}
            className={className}
            width={width}
            height={height}
            {...props}
        />);
});

ImageIcon.displayName = 'ImageIcon';

