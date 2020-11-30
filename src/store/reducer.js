import { ChangePlanInput, AddPlan, DeletePlan, GetStoreData } from './actionType.js';

const defaultState = {
    inputVal: '',
    list: []
};
export default (state = defaultState, action) => {
    if(action.type == ChangePlanInput){ // 记录当前输入框的值
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;
        return newState;
    }
    if(action.type == AddPlan){ // 把当前值添加到list里
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
        return newState;
    }
    if(action.type == DeletePlan){ // 删除计划
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if(action.type == GetStoreData){ // 初始化请求数据
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}