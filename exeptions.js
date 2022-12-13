const user = {
    firstName : 'Abd Alkarim',
    lastName : 'El Khatabi',
    Status : 'dead'
};
const otherUser = {
    firstName : 'sarah',
    Status : 'alife'
};

Users = [ user, otherUser];

try {
    for( ppl of Users){
        console.log('Mr/Mme ' + ppl.firstName +' '+ppl.lastName+' '+ppl.Status);
    }
}catch (error){
    console.log(error);
}