import React from "react";


import { useParams } from "react-router-dom";

import "./Room.css";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  
  
  const { roomID } = useParams();
  
   const meeting = async (element) => {
    
    const appID = 922252968;
    const serverSecret = "64836bd6c40b28d43506ed75af4ba638";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
        " "
        );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return (<div ref={meeting} className="background-image">


  </div>
    
      
 
      
  

  );
    
};

export default Room;
