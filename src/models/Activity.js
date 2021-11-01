import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    text: String,
}, { timestamps: true });

const Activity = mongoose.model('Activity', ActivitySchema);

export default Activity;