const { Router } = require('express');
const { Country, Travel } = require('../db.js');

const countriesRouter = Router();

countriesRouter.get('/', async (req, res) => {
    try {
        const { name } = req.query;

        if (name) {
            //Retorna los paises con el nombre pasados por query.
            const filterName = await Country.findAll({
                where: {
                    name: name,
                }
            })

            if (filterName.length) {
                res.status(200).send(filterName);
            }
            else {
                res.send("Country not found");
            }
        }
        else {
            //Trae el listado de los paises de la base de datos.
            const db = await Country.findAll({ include: [{ model: Travel }] });
            res.status(200).send(db);
        }
    }
    catch (error) {
        res.status(404).send(error);
    }
});

countriesRouter.get('/population', async (req, res) => {
    try {
        const db = await Country.findAll();

        const filterPopulation=[];

        db.forEach(elem => {
            filterPopulation.push(elem.population);
        });

        res.status(200).send(filterPopulation);
    }
    catch (error) {
        res.status(404).send(error);
    }
})

countriesRouter.get('/:idPais', async (req, res) => {
    try {
        let { idPais } = req.params;
        idPais = idPais.toUpperCase();

        if (idPais) {
            const filterId = await Country.findByPk(idPais, { include: [{ model: Travel }] });

            if (filterId != undefined) {
                res.status(200).send(filterId);
            }
            else {
                res.send('Id not exist.');
            }
        }

    }
    catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
});



module.exports = countriesRouter;