import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children, className}) => {
    return <div className={cn("px-4 lg:w-4/5 mx-auto overflow-x-hidden", className)}>{children}</div>;
}

export default Container