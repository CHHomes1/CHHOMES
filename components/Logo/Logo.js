import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
    return (
        <Link href="/">
            <Image src="/logo1.png" alt="" className='cursor-pointer' height={100} width={100}/>
        </Link>
    )
}

export default Logo