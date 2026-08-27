## ⚙️ Environment Configuration
# Backend
Create a `.env` file in the root of your server directory and set the following key-value pairs.

### 🔑 Environment Variables Reference

| Variable Name | Status | Example / Default Value | Description |
| :--- | :---: | :--- | :--- |
| `PORT` | **Required** | `5000` | Port number for the Express server to run on |
| `NODE_ENV` | **Required** | `development` | Application environment (`development` / `production`) |
| `CLIENT_URL` | **Required** | `http://localhost:5173` | Frontend URL allowed to make requests (CORS whitelist) |
| `MONGO_URI` | **Required** | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` | MongoDB connection string |
| `JWT_SECRET` | **Required** | `your_super_secret_jwt_key` | Secret key used to sign and verify JSON Web Tokens |
| `EMAIL_USER` | **Required** | `your_email@gmail.com` | Email address used for sending transactional emails / OTPs |
| `EMAIL_PASS` | **Required** | `"your_app_password"` | App-specific password generated from your email provider |
| `OTP_MODE` | **Required** | `test` | Flag for OTP behavior (`test` to bypass real SMS/Email delivery) |
| `FIXED_OTP` | **Required** | `123456` | Static 6-digit passcode used when `OTP_MODE=test` |
| `CLOUDINARY_CLOUD_NAME` | **Required** | `your_cloud_name` | Cloudinary account name for image/media uploads |
| `CLOUDINARY_API_KEY` | **Required** | `your_cloudinary_api_key` | Public API Key for Cloudinary authentication |
| `CLOUDINARY_API_SECRET` | **Required** | `your_cloudinary_api_secret` | Private API Secret for Cloudinary authentication |
| `RAZORPAY_KEY_ID` | **Required** | `rzp_test_xxxxxxxxx` | Razorpay API Key ID for checkout initialization |
| `RAZORPAY_SECRET` | **Required** | `your_razorpay_secret_key` | Razorpay API Secret for signature verification |
| `STRIPEID` | *Optional* | `""` | Stripe Account ID for alternative credit card checkout |
| `GOOGLE_PLACE_ID` | 🔮 *Future* | `ChIJ...` | Google Business Place ID to fetch store location and reviews |
| `GOOGLE_MAPS_API_KEY` | 🔮 *Future* | `AIzaSy...` | Google Places/Maps API key for Google Business integration |

