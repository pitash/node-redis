import express from "express";
const router = express.Router();

router.get("/", async (req, res, next) => {
    res.send("Hello World");
//   const { page = 1, limit = 10 } = req.query;
//   const start = (Number(page) - 1) * Number(limit);
//   const end = start + Number(limit);

//   try {
//     const client = await initializeRedisClient();
//     const restaurantIds = await client.zRange(
//       restaurantsByRatingKey,
//       start,
//       end,
//       {
//         REV: true,
//       }
//     );
//     const restaurants = await Promise.all(
//       restaurantIds.map((id) => client.hGetAll(restaurantKeyById(id)))
//     );
//     return successResponse(res, restaurants);
//   } catch (error) {
//     next(error);
//   }
});

export default router;