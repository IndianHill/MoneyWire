
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

/*
 *  Creating bank 
 */
function createBank(bankData) {
    var user = firebase.auth().currentUser;
    firestore = firebase.firestore();
    firestore.collection(cl_banks).add({
        bankName: bankData.name,
        bankWebsite: bankData.website,
        bankCustomerCare: bankData.customerCare,
        bankTollFree: bankData.tollFree,
        bankFacebook: bankData.fb,
        bankGooglePlus: bankData.googlePlus,
        bankTwitter: bankData.twitter,
        bankLinkedIn: bankData.linkedIn,
        bankCreatedBy: user.uid,
        bankUpdatedBy: user.uid
    })
    .then(function() {
        console.log("Bank successfully created!");
    })
    .catch(function(error) {
        console.error("Error creating bank: ", error);
    });
}