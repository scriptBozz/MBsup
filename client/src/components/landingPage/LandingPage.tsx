import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import hr1 from "../../assets/hr1.jpg"
import house1 from "../../assets/apartment1.jpg"
import house2 from "../../assets/apartment2.jpg";

import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";


export default function LandingPage() {
  
  return (
    <div>
      <div className="landing">
        <div className="landing-item rental">
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={house1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sell/Rent your property with best in class service
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discrete, fast and with years of market knowledge.
              </Typography>
            </CardContent>
            <CardActions>
              <div className="landinbtn">
                <Link to="/signup">
                  <Button variant="outlined" size="small">
                    Register
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outlined" size="small">
                    Reach-Out
                  </Button>
                </Link>
              </div>
            </CardActions>
          </Card>
        </div>
        <div className="landing-item">
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={house2}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Buy/Rent a property with best in class service
              </Typography>
              <Typography variant="body2" color="text.secondary">
                family/studio/and appartments
              </Typography>
            </CardContent>
            <CardActions>
              <div className="landinbtn">
                <Link to="/signup">
                  <Button variant="outlined" size="small">
                    Register
                  </Button>
                </Link>

                <Link to="/products">
                  <Button variant="outlined" size="small">
                    Go-To Listings
                  </Button>
                </Link>
              </div>
            </CardActions>
          </Card>
        </div>
        <div className="landing-item hr">
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia sx={{ height: 250 }} image={hr1} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Looking for a new challenge/carear path?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get started right here..?
              </Typography>
            </CardContent>
            <CardActions>
              <div className="landinbtn">
                <Link to="/signup">
                  <Button variant="outlined" size="small">
                    Register
                  </Button>
                </Link>
                <Button variant="outlined" size="small">
                  Go-To Jobs
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
