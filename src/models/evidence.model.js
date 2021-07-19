const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const EvidenceSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        file: {
            contentType: String,
            data: Buffer,
        },
        status: {
            type: String,
            default: 'pending'
        }
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
EvidenceSchema.plugin(toJSON);
EvidenceSchema.plugin(paginate);


const Evidence = mongoose.model('Evidence', EvidenceSchema);

module.exports = Evidence;
