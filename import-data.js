require('dotenv').config()

// console.log(process.env.MONGO_URI);

const mongoose = require('mongoose');


const locationSchema = new mongoose.Schema({
    filmType: String,
    filmProducerName: String,
    endDate: Date,
    filmName: String,
    district: Number,
    geolocation: {
        coordinates: [Number],
        type: {type : String}
    },
    sourceLocationId: String,
    filmDirectorName: String,
    address: String,
    startDate: Date,
    year: Number,
})
const Location = mongoose.model('Location', locationSchema);

async function importToMongo (filmingLocations) {
    for(const filmingLocation of filmingLocations){
        const toInsert = new Location({
            filmType: filmingLocation.fields.type_tournage,
            filmProducerName: filmingLocation.fields.nom_producteur,
            endDate: filmingLocation.fields.date_fin,
            filmName: filmingLocation.fields.nom_tournage,
            district: filmingLocation.fields.ardt_lieu,

            sourceLocationId: filmingLocation.fields.id_lieu,
            filmDirectorName: filmingLocation.fields.nom_realisateur,
            address: filmingLocation.fields.adresse_lieu,
            startDate: filmingLocation.fields.date_debut,
            year: filmingLocation.fields.annee_tournage,
            geolocation: filmingLocation.fields.geo_shape
            })
            await toInsert.save()
    }

}
async function findOne(id){
    return Location.findOne({sourceLocationId: '2020-412'})
}

async function findAll(filmName){
    return Location.find({filmName})
}

async function main(){
    const res = await mongoose.connect(process.env.MONGO_URI)
    console.log('success')

    const filmingLocations = require('./lieux-de-tournage-a-paris.json')
    // await importToMongo(filmingLocations)
    // const location = await findOne('2020-412')
    const location = await findAll('TOUT S\'EST BIEN PASSE')
    console.log(location)
    console.log('Finished importing.')
}

main()


/*
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to DB!');

    const filmingLocations = require('./lieux-de-tournage-a-paris.json');
})
    .catch(error => console.log(error))

*/