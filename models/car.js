const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    make: {
        type : String
    },
    model: {
        type: String
    },
    year: {
        type: Number
    },
    type: {
        type: String
    },
    pricePerWeek: {
        type: Number
    },
    pricePerHour: {
        type: Number
    },
    location: [{
        address: {
            type : String
        },
        city: {
            type: String
        }, 
        state: {
            type: String
        },
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
});
module.export = mongoose.model('Car',carSchema);