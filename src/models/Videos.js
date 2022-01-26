import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type: String, trim:true, maxlength:80},
    description: {type: String, required:true,trim:true, minlength:20},
    createdAt : {type:Date,required:true, default: Date.now, },
    hashtags : [{type:String, trim:true}],
    meta: {
        views:{type:Number, default: 0, required: true},
        rating:{type:Number, default: 0, required: true},
    },
});
videoSchema.static("formatHashtags", function (hashtags) {
    return hashtags
      .split(",")
      .map((word) => (word.startsWith("#") ? word : `#${word}`));
  });
const movieModel = mongoose.model("Video", videoSchema);
export default movieModel;