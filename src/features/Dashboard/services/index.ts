/* eslint-disable @typescript-eslint/no-explicit-any */
// import { GetLocalStorage, StoreLocalStorage } from '@/utils/helper'
import Client from '../../../api/index'

export const getDashBoardData = async () => {
    try {
        const response = await Client.reports.get({})
        console.log(response)
        // StoreLocalStorage('branchId', response?.data?.uuid)

        return response
    } catch (error: any) {
        throw new Error(error.message)
    }
}