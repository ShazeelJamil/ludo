import React from "react";
import { useDispatch,useSelector } from "react-redux";


const players = useSelector((state) => state.ludo.playerCount)
// const dispatch=useDispatch()
console.log("player count------->   " + players)