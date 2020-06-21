import React from 'react'


interface App {
    title?: string
}

export const App: React.FC<App> = () => {
    return <div>Hello</div>
}