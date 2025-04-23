import React from 'react'

const FeaturesCard = ({ src, heading, desc, ...props }) => {
    return (
        <article {...props} >
            <div className='flex flex-col justify-center text-left w-[278px] h-[361px] ' >
                <figure>
                    <img className='h-[70px] w-[70px]' src={src} alt={`${src} image`} />
                </figure>
                <h4 className='font-medium text-2xl leading-[33.6px] tracking-[-0.3px] mt-1'>{heading}</h4>
                <p className='text-[14px] leading-[22.4px] tracking-[0px]'>{desc}</p>
            </div>
        </article>
    )
}

export default FeaturesCard
