import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const TuiEditor = (props: any) => {
  const editorRef = useRef();
  return (
    <Stack className="tuieditor_frame">
      <Stack direction={"row"} justifyContent={"space-evenly"} margin={"40px"}>
        <Box className="form_row">
          <Typography
            style={{ color: "rgba(225, 255, 233,1)", margin: "10px" }}
            variant="h3"
          >
            Category
          </Typography>
          <FormControl
            sx={{ width: "250px", height: "56px", background: "white" }}
          >
            <Select
              sx={{ border: "1px solid red" }}
              value="celebrity"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Categoriyani tanlang">
                <span>Categoriyani tanlang</span>
              </MenuItem>
              <MenuItem value={"celebrity"}>Mashhurlar</MenuItem>
              <MenuItem value={"evalution"}>Restaurant baho</MenuItem>
              <MenuItem value={"story"}>Mening Hikoyam</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="form_row">
          <Typography
            style={{ color: "rgba(225, 255, 233,1)", margin: "10px" }}
            variant="h3"
          >
            Mavzu
          </Typography>
          <TextField
            id="filled-basic"
            label="Mavzu"
            variant="filled"
            style={{ width: "300px", background: "white" }}
          />
        </Box>
      </Stack>
      {/* @ts-ignore */}
      <Editor
        ref={editorRef}
        placeholder="Type here"
        previewStyle="vertical"
        height="640px"
        initialValue=" "
        initialEditType="WYSIWYG"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["image", "table", "link"],
          ["ul", "ol", "task"],
        ]}
        hooks={{
          addImageBlobHook: async (image: any, callback: any) => {
            return false;
          },
        }}
        events={{
          load: function (param: any) {},
        }}
      />
      <Stack direction={"row"} justifyContent={"center"}>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "30px", width: "250px", height: "45px" }}
        >
          Register
        </Button>
      </Stack>
    </Stack>
  );
};

export default TuiEditor;
