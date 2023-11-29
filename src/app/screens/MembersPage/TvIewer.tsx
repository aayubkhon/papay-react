import { Box, Stack } from "@mui/material";
import { Viewer } from "@toast-ui/react-editor";
import React, { useEffect, useRef, useState } from "react";

const TvIewer = (props: any) => {
  const editorRef = useRef();
  return (
    <Stack sx={{ background: "white", mt: "30px", borderRadius: "10px" }}>
      <Box sx={{ m: "40px" }}>
        <Viewer // @ts-ignore
          ref={editorRef}
          initialValue={props.text}
          //   initialValue={props.chosenSingleBoArticle?.art_content}
          height="600px"
        />
      </Box>
    </Stack>
  );
};

export default TvIewer;
