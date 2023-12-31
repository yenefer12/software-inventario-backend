import { DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes;

export const Status = db.define('status', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, allowNull: false }
});

export default Status;
