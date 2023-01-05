export interface IDataRes {
    currentData: any[] | {}
    data: any[] | {}
    endpointName: string
    error?: string
    fulfilledTimeStamp: number
    isError: boolean
    isFetching: boolean
    isLoading: boolean
    isSuccess: boolean
    isUninitialized: boolean
    originalArgs: null | {}
    refetch: () => void
    requestId: string
    startedTimeStamp: number
    status: string
}