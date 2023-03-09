import { signal } from "@preact/signals";

export const user = signal({
id:"",
name:"",
email:"",
password:""
});
export const users = signal([]);

