const db = require('../../db');
const fs = require('fs');

const insertActor = fs.readFileSync('seeding/insertActor/insertActor.sql', {encoding: 'utf-8'});
db.query(insertActor, (err, res) => {
    if(err){
        console.log(err);
        console.log('insert actor to database failed');
    }else{
        console.log('insert actor to database succesfully');
    }
    db.end();
})