const mongoose = require("mongoose");
const RecipeSchema = mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  userId: { type: String, required: true },
});

const RecipeModel = mongoose.model("recipe", RecipeSchema);

module.exports = {
  RecipeModel,
};
