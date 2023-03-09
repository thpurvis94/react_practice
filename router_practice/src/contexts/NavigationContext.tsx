import React, { createContext, ReactNode, useEffect, useState } from "react";

export type NavigationContextState = {
    currentPath: string,
    navigate: (to: string) => void
}

const defaultValues: NavigationContextState = {
    currentPath: window.location.pathname,
    navigate: (to:string) => {}
}

export const NavigationContext = createContext<NavigationContextState>(defaultValues)

type Props = {
    children: ReactNode
}

const NavigationProvider: React.FC<Props> = ({children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', handler)

        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, [])

    const navigate = (to: string): void => {
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    }

    return (
        <NavigationContext.Provider value={{
            currentPath,
            navigate
        }}>
            {children}
        </NavigationContext.Provider>
    )
}
export default NavigationProvider