const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const urlSchema = new Schema({
	baseUrl : {
		type:String,
		require:true
	},
	newUrl: {
		type:String,
		require:true
	},
	code : {
		type:String,
		require:true
	},
	date: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('url',urlSchema);