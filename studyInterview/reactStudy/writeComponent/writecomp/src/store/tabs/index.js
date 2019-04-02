import actionTypes from "./actionTypes"

const defaultState = {
    tabActiveIndex : 0 ,
    subTabActiveIndex : 0
}
export function tabs (state = defaultState ,action){
    console.log(action)
    switch(action.type){
        case actionTypes.TABS_CHANGAE_STATE : 
            return {...state , tabActiveIndex : action.payload}
        case actionTypes.SUBS_CHANGAE_STATE : 
            return {...state , subTabActiveIndex : action.payload}
        default:
            return state
    }
}
function activeIndex (typeActiveIndex,data){
    return {type: typeActiveIndex , payload : data}
}

export function getTabsActiveIndex (index){
    return dispatch => {
        dispatch(activeIndex("TABS_CHANGAE_STATE",index))
    }
}
export function getSubsActiveIndex (index){
    return dispatch => {
        dispatch(activeIndex("SUBS_CHANGAE_STATE",index))
    }
}