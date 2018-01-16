
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