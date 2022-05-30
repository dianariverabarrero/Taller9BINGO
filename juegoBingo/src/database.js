const mongoose = requiere('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.yf2r3.mongodb.net/test');
        console.log("conexión exitosa MDB")

    } catch (err) {
        console.log("error en la conexión", err) ;
    }

}

module.exports = {connectDb};