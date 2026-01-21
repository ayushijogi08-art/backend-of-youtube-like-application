import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const VideoSchema = new Schema(
    {
        videoFile:{type: String, required: true},
        thumbnail:{type: String, required: true},
        title:{type: String, required: true, index: true, trim: true},
        description:{type: String, required: true, trim: true},
        views:{type: Number, default: 0},
        likes:{type: Number, default: 0},
        dislikes:{type: Number, default: 0},
        duration:{type: Number, required: true},
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        tags:[{type: String, index: true, trim: true}],
    },
       {
        timestamps: true
       }
    )
    

    VideoSchema.plugin(mongooseAggregatePaginate);


    export const Video = mongoose.model("Video",VideoSchema);