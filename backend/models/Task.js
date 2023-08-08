import { model, Schema }  from "mongoose"


const TaskSchema = new Schema
  ({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false
    },
    isCompleted:{
        type:Boolean,
        default:false

    }
  },
  { versionKey: false });

export default model("Task", TaskSchema);