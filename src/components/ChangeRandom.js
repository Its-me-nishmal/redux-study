import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { changeRandom } from "../features/theme/changeThemeSlice";

function changeRandomColor () {
    const color = useSelector((state)=>state.theme.value)
    const dispatch = useDispatch();
    
}
export default changeRandomColor;