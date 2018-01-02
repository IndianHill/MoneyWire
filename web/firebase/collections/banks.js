
cl_banks = "bank"

/*
 *  Fetching all banks
 */
function getAllBanks() {
    console.log('Fetching bank data.')
    firestore = firebase.firestore();
    firestore.collection(cl_banks).get().then((querySnapshot) => {
        console.log('Banks data received.')
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}