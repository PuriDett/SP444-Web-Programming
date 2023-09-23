import React from "react";
const imageRef = React.createRef();
let bannerImg = "../banner/banner1.png";


function randInt(min,max){
    let x = (max-min)+1;
    return min+Math.floor(Math.random()*x);
}
const bannerClick = () =>{
    let bimage = "";
    const r = randInt(1,3);
    switch(r){
        case 1:
            bimage ="../banner/banner1.png";
            break;
        case 2:
            bimage ="../banner/banner2.png";
            break;
        case 3:
            bimage ="../banner/banner3.png";
            break;
        default: break;
    }
    //console.log("bimage = "+bimage);
    imageRef.current.src = bimage;
}
export default function Banner(){
    return(
        <div>
            <img src={bannerImg} ref={imageRef} onClick={bannerClick} width="60%" 
                    style={{cursor:"pointer"}}/>
        </div>
    );
}