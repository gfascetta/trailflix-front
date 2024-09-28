import { useContext } from "react";
import { UserContext, userInfoContext } from "../contexts/UserProvider";


export function useUserContext(){ return useContext(UserContext)}

export function useUserInfoContext() {return useContext(userInfoContext)}