
import {count} from './signals/store';

export function App() {

console.log('look ',count.value)

  return (
   <>
   <div class="bg-slate-600  w-full">
    <p class="text-cent">{count}</p>
    <button onClick={()=>count.value++}>Click me</button>
   </div>

   </>
  );

}


