const { connectToDatabase } = require('../../lib/mongodb');

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getTodo(req, res);
        }
    }
}

async function getTodo(req,res){
    try {
        console.log('11');
        // connect to the database
        let { db } = await connectToDatabase();
        console.log(db);
        // fetch the Todo
        let Todo = await db
            .collection('todo')
            .find()
            .toArray();
        // return the Todo
        return res.json({
            message: JSON.parse(JSON.stringify(Todo)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}