// 此用途为实现redux action 和 业务逻辑分离

import { ChangePlanInput, AddPlan, DeletePlan, GetStoreData } from './actionType';

export const handerChangePlanInput = value => ({
    type: ChangePlanInput,
    value
})

export const handerAddPlan = () => ({
    type: AddPlan
})

export const handerDeletePlan = index => ({
    type: DeletePlan,
    index
})

export const handerGetStoreData = data => ({
    type: GetStoreData,
    data
})