import { ACTION_UP, ACTION_DOWN, ACTION_ZERO, USER_INPUT } from "./counter-types"

export const counterActionUp = ()=>{
    return {type:ACTION_UP}
}
export const counterActionDown = ()=>{
    return {type:ACTION_DOWN}
}
export const resetAction = (num)=>{
    return {type:ACTION_ZERO, payload:num}
}
export const changeInput= (value)=>{
    return {type:USER_INPUT, payload:value}

}

