const { Router } = require('express');
const { Country, Travel } = require('../db.js');

const activitiesRouter = Router();


activitiesRouter.post('/', async (req, res) => {
    try {
        let { arrayCountries, name, dificult, duration, season } = req.body;

        dificult= Number(dificult);
        duration= Number(duration);

            const obj = {
                name,
                dificult,
                duration,
                season,
            }

           const activity = await Travel.create(obj); 
            //const activity = await Travel.findOrCreate({where:{name:name}, defaults: obj}); 

            arrayCountries.forEach(async (idCountry) => {
                const country = await Country.findByPk(idCountry);
                country.addTravel(activity);
            });

            res.status(200).send(activity.name);
    }
    catch (error) {
        res.status(404).send(error);
    }
});

activitiesRouter.get('/', async (req,res)=>{
    try{
        const db= await Travel.findAll();
        res.status(200).send(db);
    }
    catch (error) {
        res.status(404).send(error);
    }
})

module.exports = activitiesRouter;