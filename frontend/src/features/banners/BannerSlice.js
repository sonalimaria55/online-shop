// import { createSlice } from "@reduxjs/toolkit";

// import {
//   createBanner,
//   getBanners,
//   updateBanner,
//   deleteBanner,
//    changeBannerVisibility,
// } from "./BannerThunk";

// const initialState = {
//   banners: [],
//   loading: false,
//   success: false,
//   error: null,
// };

// const bannerSlice = createSlice({
//   name: "banner",

//   initialState,

//   reducers: {
//     clearBannerState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//     },
//   },

//   extraReducers: (builder) => {
//     builder

//       // =========================
//       // Get All Banners
//       // =========================
//       .addCase(getBanners.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(getBanners.fulfilled, (state, action) => {
//         state.loading = false;
//         state.banners = action.payload;
//       })

//       .addCase(getBanners.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // =========================
//       // Create Banner
//       // =========================
//       .addCase(createBanner.pending, (state) => {
//         state.loading = true;
//         state.success = false;
//         state.error = null;
//       })

//       .addCase(createBanner.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;

//         if (action.payload?.data) {
//           state.banners.unshift(action.payload.data);
//         }
//       })

//       .addCase(createBanner.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload;
//       })

//       // =========================
//       // Update Banner
//       // =========================
//       .addCase(updateBanner.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(updateBanner.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;

//         const updatedBanner = action.payload.data;

//         const index = state.banners.findIndex(
//           (banner) => banner._id === updatedBanner._id
//         );

//         if (index !== -1) {
//           state.banners[index] = updatedBanner;
//         }
//       })

//       .addCase(updateBanner.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload;
//       })

//       // =========================
//       // Delete Banner
//       // =========================
//       .addCase(deleteBanner.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(deleteBanner.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;

//         state.banners = state.banners.filter(
//           (banner) => banner._id !== action.payload
//         );
//       })

//       .addCase(deleteBanner.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload;
//       });
//   },
// })
// // =========================
// // Change Banner Visibility
// // =========================
// .addCase(changeBannerVisibility.pending, (state) => {
//   state.loading = true;
// })

// .addCase(changeBannerVisibility.fulfilled, (state, action) => {
//   state.loading = false;

//   const updatedBanner = action.payload.data;

//   const index = state.banners.findIndex(
//     (banner) => banner._id === updatedBanner._id
//   );

//   if (index !== -1) {
//     state.banners[index] = updatedBanner;
//   }
// })

// .addCase(changeBannerVisibility.rejected, (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// });

// export const { clearBannerState } = bannerSlice.actions;

// export default bannerSlice.reducer;
//-----------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

import {
  createBanner,
  getBanners,
  updateBanner,
  deleteBanner,
  changeBannerVisibility,
  getHomeBanners,
  getCustomerBanners,
} from "./BannerThunk";

const initialState = {
  banners: [],
  homeBanners: [],
  customerBanners: [],
  loading: false,
  success: false,
  error: null,
};

const bannerSlice = createSlice({
  name: "banner",

  initialState,

  reducers: {
    clearBannerState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ======================
      // Get All Banners
      // ======================
      .addCase(getBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })

      .addCase(getBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ======================
      // Create Banner
      // ======================
      .addCase(createBanner.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })

      .addCase(createBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        if (action.payload?.data) {
          state.banners.unshift(action.payload.data);
        }
      })

      .addCase(createBanner.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // ======================
      // Update Banner
      // ======================
      .addCase(updateBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        const updatedBanner = action.payload.data;

        const index = state.banners.findIndex(
          (banner) => banner._id === updatedBanner._id
        );

        if (index !== -1) {
          state.banners[index] = updatedBanner;
        }
      })

      .addCase(updateBanner.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // ======================
      // Delete Banner
      // ======================
      .addCase(deleteBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        state.banners = state.banners.filter(
          (banner) => banner._id !== action.payload
        );
      })

      .addCase(deleteBanner.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // ======================
      // Change Visibility
      // ======================
      .addCase(changeBannerVisibility.pending, (state) => {
        state.loading = true;
      })

      .addCase(changeBannerVisibility.fulfilled, (state, action) => {
        state.loading = false;

        const updatedBanner = action.payload.data;

        const index = state.banners.findIndex(
          (banner) => banner._id === updatedBanner._id
        );

        if (index !== -1) {
          state.banners[index] = updatedBanner;
        }
      })

      .addCase(changeBannerVisibility.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ======================
      // Home Banners
      // ======================
      .addCase(getHomeBanners.pending, (state) => {
        state.loading = true;
      })

      .addCase(getHomeBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.homeBanners = action.payload;
      })

      .addCase(getHomeBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ======================
      // Customer Banners
      // ======================
      .addCase(getCustomerBanners.pending, (state) => {
        state.loading = true;
      })

      .addCase(getCustomerBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.customerBanners = action.payload;
      })

      .addCase(getCustomerBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBannerState } = bannerSlice.actions;

export default bannerSlice.reducer;