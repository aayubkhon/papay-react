import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CancelIcon from "@mui/icons-material/Cancel";
import { Badge, Box, Button, IconButton, Menu, Stack } from "@mui/material";
import React, { useState } from "react";

const Basket = (props: any) => {
  // INITIALIZATIONS
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // HANDLERS
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const processOrderHandler = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box className={"hover-line"}>
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge>
          <img src="/icons/shopping-cart.svg" alt="" />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        //   onClick={handleClose}
        PaperProps={{
          elevation: 0,
          SX: {
            overflow: "visible",
            filter: "drop-shadow(Opx 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& •MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "§:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bocolors: "background,paper",
              transform: "translateYl-50%1 rotate(45dea)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack className="basket_frame">
          <Box className="all_check_box">
            {false ? <div>Cart is empty</div> : <div>My Cart Products:</div>}
          </Box>
          <Box className="orders_main_wrapper">
            <Box className="orders_wrapper">
              {[0].map(() => {
                const image_path = "/others/steak.png";
                return (
                  <Box className={"basket_info_box"}>
                    <div className="cancel_btn">
                      <CancelIcon
                        color="primary"
                        // onCklick={}
                      />
                    </div>
                    <img src={image_path} className="product_img" alt="" />
                    <span className="product_name">Shashlik</span>
                    <p className="product_price">$10 x 2</p>
                    <Box sx={{ minWidth: 120 }}>
                      <div className="col-2">
                        <button
                          className="remove"
                          // onClick={}
                        >
                          -
                        </button>{" "}
                        <button
                          className="add"
                          // onClick={}
                        >
                          +
                        </button>
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          {true ? (
            <Box className={"to_order_box"}>
              <span className="price_text">Jami $22 (20 + 2)</span>
              <Button
                onClick={processOrderHandler}
                startIcon={<ShoppingCartIcon />}
                variant="contained"
              >
                Buyurtma qilish
              </Button>
            </Box>
          ) : (
            ""
          )}
        </Stack>
      </Menu>
    </Box>
  );
};

export default Basket;
