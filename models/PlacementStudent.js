const mongoose = require('mongoose');

const PlacementStudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  package: { type: String ,required: true },
  passoutYear: { type: Number ,required: true },
  company: { type: String ,required: true },
  post: { type: String ,required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
const PlacementStudent = mongoose.model('PlacementStudent', PlacementStudentSchema);

module.exports = PlacementStudent