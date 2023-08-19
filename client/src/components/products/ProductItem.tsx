import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import banner1 from "../../assets/apartment4.jpg"

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Product } from "../../types/type";
import { productActions } from "../../redux/slices/products";
import { RootState } from "../../redux/store";
import { Button } from "@mui/material";

type Prop = {
  item: Product;
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductItem({ item }: Prop) {
  const dispatch = useDispatch();

  const wishList = useSelector((state: RootState) => state.products.wishList);
  const isFavorite = wishList.some((product) => item.title === product.title);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function addToFavorite(product: Product) {
    dispatch(productActions.addToWishList(product));
  }

  function removeFavorite(product: Product) {
    dispatch(productActions.removeFromWishList(product));
  }

  function onClickHandler(product: Product) {
    if (!isFavorite) {
      addToFavorite(product);
      return;
    }
    removeFavorite(product);
  }

  // theme
  const theme = useSelector((state: RootState) => state.theme.theme);

  let textColor;
  if (theme === "dark") {
    textColor = "white";
  }
  return (
    <div>
      <Card sx={{ maxWidth: 345, color:textColor}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[200] }} aria-label="recipe">
              F
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Furnished Studio"
          subheader="Listed since: September 14, 2016"
        />
        <Link to={`/products/${item.id}`}>
          <CardMedia
            component="img"
            height="194"
            image={banner1}
            alt={item.title}
          />
        </Link>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Outdoor enthusiasts will revel in the landscaped rooftop terrace,
            offering breathtaking panoramic views of the city skyline
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              onClickHandler(item);
            }}
          >
            <FavoriteIcon sx={{ color: isFavorite ? red[500] : blue[400] }} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Features</Typography>
            <Typography paragraph className="cardf">
              <div>
                <p>Bathroom :</p>
                <p>Toilet :</p>
                <p>size :</p>
                <p>Bedroom :</p>
                <p>Furnished :</p>
              </div>
              <div>
                <p>2</p>
                <p>2 :</p>
                <p>40sqft :</p>
                <p>1 :</p>
                <p>yes :</p>
              </div>
            </Typography>
            <Button>Send a message</Button>
            <Button>Contact owner</Button>
          </CardContent>
        </Collapse>
      </Card>

      {/* <Link to={`/products/${item.id}`}>
        <div className="productImg">
          <img
            src={item.images[0]}
            alt={item.title}
            height="450px"
            width="400px"
          />
        </div>
      </Link>
      <div>
        <Typography className="productTitle" sx={{ color: textColor }}>
          {item.title}
        </Typography>
        <div className="productInfor">
          <Typography sx={{ color: textColor }}>{item.price} €</Typography>
          <IconButton
            onClick={() => {
              onClickHandler(item);
            }}
          >
            <FavoriteIcon sx={{ color: isFavorite ? red[500] : green[400] }} />
          </IconButton>
        </div>
      </div> */}
    </div>
  );
}
