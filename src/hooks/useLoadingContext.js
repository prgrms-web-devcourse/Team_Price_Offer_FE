import { useContext } from 'react'
import { LoadingContext } from '@contexts/LoadingProvider'

export const useLoadingContext = () => useContext(LoadingContext)
