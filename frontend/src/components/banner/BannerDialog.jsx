import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";

import { getCustomerBanners } from "../../features/banners/BannerThunk";
import BannerViewDialog from "./BannerViewDialog";

const BannerCard = () => {
  const dispatch = useDispatch();

  const [selectedBanner, setSelectedBanner] = useState(null);

  const { customerBanners = [] } = useSelector(
    (state) => state.banner
  );

  useEffect(() => {
    dispatch(getCustomerBanners());
  }, [dispatch]);

  // Show only Banner Posts
  const banners = customerBanners.filter(
    (banner) => banner.bannerType === "banner"
  );

  if (banners.length === 0) return null;

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={3}>
          {banners.map((banner) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={banner._id}
            >
              <Card
                elevation={0}
                onClick={() => setSelectedBanner(banner)}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={banner.image}
                  alt={banner.title}
                  sx={{
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <BannerViewDialog
        open={Boolean(selectedBanner)}
        banner={selectedBanner}
        onClose={() => setSelectedBanner(null)}
      />
    </>
  );
};

export default BannerCard;