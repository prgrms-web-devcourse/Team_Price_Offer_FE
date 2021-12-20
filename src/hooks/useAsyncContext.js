import { useContext } from 'react'
import { AsyncContext } from '@contexts/AsyncProvider'

export const useAsyncContext = () => useContext(AsyncContext)
