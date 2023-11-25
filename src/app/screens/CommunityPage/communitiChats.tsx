import React, { useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send"

const CommunitiChats = () => {
  // ** INITIALIZATION **//

  const [messagesList, setMessagesList] = useState([]);
  return (
    <Stack className="chat_frame">
      <Box className="chat_top">Jonli Mulokat</Box>
      <Box className="chat_content">
        <Stack className="chat_main">
          <Box flexDirection={"row"} sx={{ display: "flex"}}>
            <div className="msg_left">
              <p className="msg_left_text">
                Bu yer jonli mulokot
              </p>
            </div>
          </Box>
          <Box
            flexDirection={"row"}
            sx={{ display: "flex" }}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
          >
            <div className="msg_right">
              <p className="msg_right_text">Bu sizning xabaringiz</p>
            </div>
          </Box>
          <Box flexDirection={"row"} sx={{ display: "flex"}}>
            <Avatar sx={{ ml: "15px" }} alt="leo" src="/community/cute.jpeg" />
            <div className="msg_left">
              <p className="msg_left_text">Bu yer boshkalar xabari</p>
            </div>
          </Box>
        </Stack>
      </Box>
      <Box className="chatt_bott">
        <input
          type="text"
          name="message"
          className="msg_input"
          placeholder="Xabar jonatish"
        />
        <button className="send_msg_btn">
         <SendIcon style={{color:"#fff"}}/>
        </button>
      </Box>
    </Stack>
  );
};

export default CommunitiChats;
