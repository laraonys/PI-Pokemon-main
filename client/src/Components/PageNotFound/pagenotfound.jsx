import React from "react";
import img from '../resources/videonot_found.mp4'
import { Video } from "./styledPagenotfound";

export default function PagenotFound() {
    return (
        <>
            <Video src={img} width="1366px" height="760px"  alt="" loop={true} autoPlay={true}/>
        </>
    )
};