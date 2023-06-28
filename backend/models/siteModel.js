import mongoose from "mongoose";

const siteSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required:true
    },
    logoUrl:{
        type: String
    }
})
export default mongoose.model('Site',siteSchema);