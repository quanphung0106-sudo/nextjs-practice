import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";
import mongoose from "mongoose";
import Order from "../../../models/Order";

const handle = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
    try {
      const order = await Order.findByIdAndDelete(id);
      res.status(200).json("The order has been deleted");
    } catch (err) {
      console.log(err);
    }
  }
};

export default handle;
