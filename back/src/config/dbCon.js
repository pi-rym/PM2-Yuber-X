const mongoose = require ("mongoose");


const dbCon = async () => {
    try {
        
        await mongoose.connect(
            "mongodb+srv://yuberminecraft:yuberer1234@soyhenryproyectm2.r14sfhb.mongodb.net/movies"
        );

    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
    }
}

module.exports = dbCon;