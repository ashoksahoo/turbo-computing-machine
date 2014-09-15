/**
 * Created by Ashok on 9/15/2014.
 */
mongoose = require("mongoose");
Schema = mongoose.Schema;


// simple api

var TestSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	code: {
		type: Number,
		unique: true,
		sparse: true
	},
	content: {
		type: String,
		default: '',
		trim: true
	}

});
var Test = mongoose.model("Test", TestSchema);

exports.createOne = function (params) {
	Test.create(params, function (err, obj) {
		if (err) {
			return console.error(err)
		}
	});
};
