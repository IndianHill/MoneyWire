
cl_branches = "branches";

/**
 *  Get branches of Bank
 */
function getBranchesOfBank(bankKey) {
    console.log('Fetching branch data of bank:'+bankKey);
    firestore = firebase.firestore();
    firestore.collection(cl_banks).doc(bankKey).collection(cl_branches).get().then((querySnapshot) => {
        console.log('Branches data received.')
        allBranches = []
        querySnapshot.forEach((doc) => {
            branchData = doc.data()
            branchData.key = doc.id
            allBranches.push(branchData)
            console.log('Branch:'+doc.id);
        });
        //successfullyFetchedBanks(allBranches)
    });
}

/**
 *  Create bank's branch
 */
function createBankBranch(branchData, bankKey) {
    var user = firebase.auth().currentUser;
    firestore = firebase.firestore();
    firestore.collection(cl_banks).doc(bankKey).collection(cl_branches).add({
        "name": branchData.name,
        "street": branchData.street,
        "city": branchData.city,
        "district": branchData.district,
        "state": branchData.state,
        "pinCode": branchData.pinCode,
        "fullAddress": branchData.fullAddress,
        "contactNumber": branchData.contactNumber,
        "ifsc": branchData.ifscCode,
        "micr": branchData.micrCode,
        "createdBy": user.uid,
        "updatedBy": user.uid,
        "createdAt": firebase.firestore.FieldValue.serverTimestamp(),
        "updatedAt": firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(branch) {
        console.log("Branch successfully created with id:"+branch.id);
        branchCreatedSuccessfully(branch);
    })
    .catch(function(error) {
        console.log("Error creating branch: "+error);
        errorWhileCreatingBranch(error);
    });
}