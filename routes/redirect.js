const router = require('express').Router();
const urlSchema = require('../models/Urls');

router.get('/:code',async (req,res)=>
{
	const {code} = req.params;
	console.log(code);
	try{
		let result = await urlSchema.find({code});
		console.log(result);
		res.redirect(result[0].baseUrl);
	}
	catch(err)
	{
		console.log(err);
		res.send(err);
	}

})

module.exports = router;
