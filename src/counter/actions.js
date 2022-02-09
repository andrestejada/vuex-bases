import getRandomInt from "../helpers/getRandomInt";

  export const incrementRamdomInt= async({commit})=>{
    commit('setLoading',true)
    const randonInt = await getRandomInt();
    commit('incrementBy',randonInt)
    commit('setLoading',false)

}