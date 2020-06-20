import mongoose from "mongoose";
export async function connect(){

    try {
        await mongoose.connect('mongodb://localhost/mongodbgrpahql', {
        useNewUrlParser: true
        });
    console.log('db is connected');

    } catch(e) {
        console.log("error bd");
        console.log(e);
    }
}