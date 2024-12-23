import React from 'react'

const SocialIcon = ({ src, alt }) => {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[19px]"
        />
    )
}

export default SocialIcon