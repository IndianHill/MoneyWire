
cl_banks = "bank"

/*
 *  Fetching all banks
 */
function getAllBanks() {
    console.log('Fetching bank data.')
    firestore = firebase.firestore();
    firestore.collection(cl_banks).get().then((querySnapshot) => {
        console.log('Banks data received.')
        allBanks = []
        querySnapshot.forEach((doc) => {
            bankData = doc.data()
            bankData.key = doc.id
            allBanks.push(bankData)
        });
        successfullyFetchedBanks(allBanks)
    });
}