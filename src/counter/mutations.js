export const increment = (state)=>{
  state.count ++;
  state.lastMutation = 'increment';
}
export const incrementBy = (state,value)=>{
  state.count += value;
  state.lastMutation = 'incrementBy'+ state.lastRandom
  state.lastRandom= value;
}
export const setLoading=(state,loading)=>{
  state.isLoading = loading
}