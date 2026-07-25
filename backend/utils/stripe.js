const Stripe=require("stripe")
const stripeControle=new Stripe(process.env.STRIPEID)
module.exports=stripeControl