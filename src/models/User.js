import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema ({
    email: {type:String, required:true, unique: true},
    socialOnly: {type:Boolean, default:false}, //user가 github로 로그인했는 지알아보기위해
    username: {type:String, required:true, unique: true},
    avatarUrl: String,
    password: {type:String},
    name: {type:String, required: true},
    location: String,
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref:"Videos"}],
})

userSchema.pre('save', async function() {
    if (this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 5);
    }
})

const User = mongoose.model('User', userSchema);

export default User;