import { useContext } from 'react'
import { AxiosContext } from '@contexts/AxiosProvider'

export const useAxiosContext = () => useContext(AxiosContext)
