import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    title: String,
    message: String,
    done: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
});

const ItemMessage = mongoose.model('ItemMessage', itemSchema);

export default ItemMessage;