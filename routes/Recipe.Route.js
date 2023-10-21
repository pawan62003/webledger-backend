const express = require('express');
const { RecipeModel } = require('../model/Recipe.model');

const RecipeRoute = express.Router();

RecipeRoute.get('/',async(req,res) => {
    try {
        const data = await RecipeModel.find({userId:req.body.userId})
        res.send(data)
    } catch (error) {
        res.send({ error: error})
    }
})

RecipeRoute.delete('/delete/:id',async(req,res) => {
    try {
        const afterDeletion = await RecipeModel.findByIdAndDelete({_id:req.params.id})
        res.send({message:"Recipe deleted"})
    } catch (error) {
        res.send({ error: error })
    }
})

RecipeRoute.post('/',async(req,res) => {
    try {
        const find = await RecipeModel.find(req.body)

        if(find.length>0){
            res.send({message:"item is allready added!"})
        }else{

            const newRecipe = new RecipeModel(req.body)
            await newRecipe.save()
            res.send({message:"Recipe saved successfully"})
        }
    } catch (error) {
        res.send({ error: error })
    }
})


module.exports = {
    RecipeRoute
}