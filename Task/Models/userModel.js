const bcrypt = ('bcrypt');

exports.createUser = async (Db, userData) =>{
    const {name, email, fatherName, password} = userData;
    // const hashedPassword = await bcrypt.hash(password, 5);
    const user = {
        name,
        email,
        fatherName,
        password,
        registeredAt: new Date()

    }
    const result = await db.collection('user').insertOne(user);
    return result;
}

exports.findUseryEmail = async (db, email)=>{
    const user = await db.collection('user').findOne({email});
    return user;
}

exports.getUser = async (db)=>{
    const user = await db.collection('user').find().toArray();
    return user;
}