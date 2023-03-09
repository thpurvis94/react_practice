import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"

export const useThunk = (thunk: any): [(args?: any) => void, boolean, Error | null] => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const dispatch = useDispatch()

    const runThunk = useCallback(() => {
        setIsLoading(true)
        dispatch(thunk())
            .unwrap()
            .catch((err: Error) => setError(err))
            .finally(() => setIsLoading(false))
    }, [dispatch, thunk])
    return [runThunk, isLoading, error]
}