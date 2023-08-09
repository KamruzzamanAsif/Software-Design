const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        user_name: {
            type: String,
            required: true,
        },
    },
    { collection: 'users'}
);

module.exports = mongoose.model('User', userSchema);