import React, { ReactNode } from "react"

interface Props {
    className?: string
    children: ReactNode
}

export default function Container({ children, className }: Props) {
    return <div className={`container ${className}`}>{children}</div>
}