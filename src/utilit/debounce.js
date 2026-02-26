
export const debounce = (fun , delay)=>{
   let timer ;
   return function(...arg){
      clearTimeout(timer)
      timer = setTimeout(() => {
         fun(...arg)
      }, delay);
   }

}