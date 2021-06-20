const router = require('express').Router();
const urlSchema = require('../models/Urls');
const { nanoid } = require('nanoid')
router.post('/url',async (req,res)=>
{
	const {baseUrl} = req.body;
	var id = nanoid();
	console.log(id);
	const newUrl = 'http://localhost:5100/'+id;
	try{
		let urls = await urlSchema.create({baseUrl:baseUrl,newUrl:newUrl,code:id})
		res.send({urls})
	}catch(err)
	{
		console.log(err);
		res.send({err})
	}
	
})

module.exports = router;