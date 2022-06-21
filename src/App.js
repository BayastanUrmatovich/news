import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { loadUsers } from "./userSlice"

export default function App() {
  const dispatch = useDispatch() ;
const users = useSelector(store => store.users.users);

useEffect(() => {
  dispatch(loadUsers());
}, []);

const output = users.map(user => <li key={user.id}>{user.name}</li>);
  return <ul className='App'>{output}</ul>;
}
 
