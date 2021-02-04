import React from 'react'

interface Props{
    banner: React.ReactNode,
    loginContainer: React.ReactNode  
}

const Wrapper: React.FC<Props> = (children) => {
    const {banner, loginContainer} = children
    return(
        <div className='wrapper'>
            {banner}
            {loginContainer}
        </div>
    )
}

export default Wrapper