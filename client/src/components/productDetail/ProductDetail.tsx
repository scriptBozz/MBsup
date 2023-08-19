import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Alert, Button, Snackbar } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Product } from "../../types/type";
import { cartActions } from "../../redux/slices/cart";
import { fetchProductDetail } from "../../redux/thunk/product";

export default function ProductDetail() {
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.productDetail
  );

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const dispatch = useDispatch<AppDispatch>();
  const param = useParams();
  const productId = param.id as string;

  useEffect(() => {
    if (param) {
      dispatch(fetchProductDetail(productId));
    }
  }, [dispatch, productId, param]);

  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function onClickHandler(item: Product) {
    dispatch(cartActions.addCartList(item));
    setOpen(true);
  }
  if (!productDetail) {
    return <div>no data</div>;
  }

  return (
    <div>
      <div className="productDetail">
        <div>
          <img
            src={productDetail.images[0]}
            alt={productDetail.title}
            height="300px"
          />
        </div>
        <div className="product">
          <p>{productDetail.title}</p>
          <p> Price: {productDetail.price}</p>

          <Button onClick={() => onClickHandler(productDetail)}>
            Contact the Landlord
          </Button>
          <Button>Recieve new offers</Button>
          <Link to="/products">
            <Button> Back</Button>
          </Link>
          <Typography>
            <p>
              Paid members receive nottifications on available Listings that
              suits their needs
            </p>
          </Typography>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          A <b>{productDetail.title}</b> is added to your activity list.
        </Alert>
      </Snackbar>
      <hr></hr>
      <div className="accordion-div">
        <div className="accordion">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Status
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Available
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Available from 12-12-2023 to 12-12-2024.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Features
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                No data available
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>...</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Construction
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                No data available
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>...</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Location
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>...</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
