import React from 'react'








const style = {

    notFound: "w-[100vw]",
    heading: 'mx-auto w-[75%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 my-24 text-center'
}
const NotFound = () => {
    return (
        <div className={style.notFound}>
            <h2 className={style.heading} style={{ fontFamily: 'DM Serif Display, serif' }}
            >PAGE NOT FOUND</h2>
        </div>
    )
}

export default NotFound