const mongoose = require('mongoose');
const Schema = mongoose.Schema; // 몽구스 스키마 변수 설정

// 스키마 설정
const CampGroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
})

module.exports = mongoose.model('Campground', CampGroundSchema);
