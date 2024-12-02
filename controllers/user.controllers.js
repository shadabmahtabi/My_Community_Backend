import { WrapAsync } from "../middlewares/error.js";

const homepage = WrapAsync(async (req, res, next) => {
  res.status(200).json("Homepage");
});

export { homepage };
