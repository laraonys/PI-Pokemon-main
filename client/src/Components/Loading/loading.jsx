import React from "react";
import img from '../resources/cargaimg1.mp4'
import { Video } from "./styledLoading";

export default function Loading() {
    return (
        <>
            <Video src={img} width="1366px" height="760px"  alt="" loop={true} autoPlay={true}/>
        </>
    )
};