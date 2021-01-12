import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    title: String,
    message: String,
    done: Boolean,
    createdAt:{
        type: Date,
        default: new Date()
    },
});

const ItemMessage = mongoose.model('ItemMessage', itemSchema);

export default ItemMessage;