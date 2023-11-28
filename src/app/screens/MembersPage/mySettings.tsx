import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

const MySettings = (props: any) => {
  return (
    <Stack className="setting_container" flexDirection={"column"}>
      <Box className="setting_file_box">
        <img className="setting_avatar_img" src="/auth/avatar.svg" alt="" />
        <div className="media_change_box">
          <span className="file_info">Rasm yuklash</span>
          <p className="file_type">JPG,JPEG,PNG rasmlarni yuklay olasiz!</p>
          <div>
            <Button className="label">
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className="input_frame">
        <p className="input_text">Ism</p>
        <div className="info_input">
          <input
            className="spec_label_input mb_nick"
            type="text"
            placeholder="Ismoilov Akmal"
            name="mb_nick"
            id=""
          />
        </div>
      </Box>
      <Box className="short_input_frame">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p className="input_text">Telefon raqam</p>
          <div className="short_input">
            <input
              className="spec_short_input mb_phone"
              type="text"
              placeholder="99897654321"
              name="mb_phone"
              id=""
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ marginLeft: "30px" }} className="input_text">
            Manzil
          </p>
          <div className="short_input_second">
            <input
              className="spec_short_input mb_address"
              type="text"
              placeholder="Toshkent,Yunusobat"
              name="mb_address"
              id=""
            />
          </div>
        </div>
      </Box>
      <Box className="input_frame">
        <p className="input_text">Malumot</p>
        <div className="big_info_input">
          <textarea
            className="spec_big_input mb_description"
            placeholder="Mavjud emas"
            name="mb_description"
          />
        </div>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        sx={{ mt: "25px"}}
      >
        <Button variant="contained">Saqlash</Button>
      </Box>
    </Stack>
  );
};

export default MySettings;
