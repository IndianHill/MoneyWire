
cl_branches = "branches";

/**
 *  Get branches of Bank
 */
function getBranchesOfBank(bankKey) {
    console.log('Fetching branchs of bank:'+bankKey);
    firestore = firebase.firestore();
    firestore.collection(cl_branches).where('bankKey', '==', bankKey).get().then((querySnapshot) => {
        console.log('Branches data received.')
        allBranches = []
        querySnapshot.forEach((doc) => {
            branchData = doc.data()
            branchData.key = doc.id
            allBranches.push(branchData);
        });
        successfullyFetchedBranches(allBranches);
    }).catch(function(error) {
        console.log("Error in fetching branches of bank: "+bankKey+" error: "+error);
        failedToFetchedBranches(error);
    });;
}

/**
 *  Create bank's branch
 */
function createBankBranch(branchData, bankKey) {
    var user = firebase.auth().currentUser;
    firestore = firebase.firestore();
    firestore.collection(cl_branches).doc(branchData.ifscCode.toUpperCase()).set({
        "bankKey": bankKey,
        "name": branchData.name,
        "lowerName": branchData.name.toLowerCase(),
        "street": branchData.street,
        "city": branchData.city,
        "lowerCity": branchData.city.toLowerCase(),
        "district": branchData.district,
        "state": branchData.state,
        "pinCode": branchData.pinCode,
        "fullAddress": branchData.fullAddress,
        "contactNumber": branchData.contactNumber,
        "ifsc": branchData.ifscCode,
        "lowerIfsc": branchData.ifscCode.toLowerCase(),
        "micr": branchData.micrCode,
        "createdBy": user.uid,
        "updatedBy": user.uid,
        "createdAt": firebase.firestore.FieldValue.serverTimestamp(),
        "updatedAt": firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(branch) {
        console.log("Branch successfully created.");
        branchCreatedSuccessfully(branch);
    })
    .catch(function(error) {
        console.log("Error creating branch: "+error);
        errorWhileCreatingBranch(error);
    });
}

/**
 *  Update bank's branch
 */
function updateBankBranch(branchData, branchKey) {
    var user = firebase.auth().currentUser;
    firestore = firebase.firestore();
    firestore.collection(cl_branches).doc(branchKey).update({
        "name": branchData.name,
        "lowerName": branchData.name.toLowerCase(),
        "street": branchData.street,
        "city": branchData.city,
        "lowerCity": branchData.city.toLowerCase(),
        "district": branchData.district,
        "state": branchData.state,
        "pinCode": branchData.pinCode,
        "fullAddress": branchData.fullAddress,
        "contactNumber": branchData.contactNumber,
        "ifsc": branchData.ifscCode,
        "lowerIfsc": branchData.ifscCode.toLowerCase(),
        "micr": branchData.micrCode,
        "updatedBy": user.uid,
        "updatedAt": firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function() {
        console.log("Branch updated successfully");
        branchUpdatedSuccessfully();
    })
    .catch(function(error) {
        console.log("Error updating branch: "+error);
        errorWhileUpdatingBranch(error);
    });
}

/**
 *  Upload CSV data to branches
 */
function addArrayToBranches(branchesArr, bankKey) {
    var user = firebase.auth().currentUser;
    firestore = firebase.firestore();
    var batch = firestore.batch();
    var branchRef = firestore.collection(cl_branches);

    for(var index in branchesArr) {
        branchData = branchesArr[index];
        batch.set(branchRef.doc(branchData.ifscCode.toUpperCase()), {
            "bankKey": bankKey,
            "name": branchData.name,
            "lowerName": branchData.name.toLowerCase(),
            "street": branchData.street,
            "city": branchData.city,
            "lowerCity": branchData.city.toLowerCase(),
            "district": branchData.district,
            "state": branchData.state,
            "pinCode": branchData.pinCode,
            "fullAddress": branchData.fullAddress,
            "contactNumber": branchData.contactNumber,
            "ifsc": branchData.ifscCode,
            "lowerIfsc": branchData.ifscCode.toLowerCase(),
            "micr": branchData.micrCode,
            "createdBy": user.uid,
            "updatedBy": user.uid,
            "createdAt": firebase.firestore.FieldValue.serverTimestamp(),
            "updatedAt": firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    batch.commit().then(function() {
        console.log("Branches uploaded successfully");
        branchesUploadedSuccessfully();
    })
    .catch(function(error) {
        console.log("Error uploading branches: "+error);
        errorWhileUploadingBranches(error);
    });
}

/*
 *  Get search results for given search text
 */
function searchBankBranches(searchText, bankKey) {
    firestore = firebase.firestore();
    branchesCollectionRef = firestore.collection(cl_branches);

    searchText = searchText.toLowerCase();

    var cityQuery = branchesCollectionRef.where('lowerCity', '==', searchText)
    var pinCodeQuery = branchesCollectionRef.where('pinCode', '==', searchText)
    var ifscQuery = branchesCollectionRef.where('lowerIfsc', '==', searchText)
    var nameQuery = branchesCollectionRef.where('lowerName', '==', searchText)

    cityQuery.get()
    .then(function(querySnapshot) {
        cityBranch = []
        console.log('=====City====')
        querySnapshot.forEach(function(doc) {
            var branch = doc.data()
            branch.key = doc.id
            cityBranch.push(branch)
            console.log(doc.id, " => ", doc.data());
        });
        successfullySearchedBranch(cityBranch);
    })
    .catch(function(error) {
        console.log("Error city matching documents: ", error.name);
    });

    pinCodeQuery.get()
    .then(function(querySnapshot) {
        pinCodeBranch = []
        console.log('=====Pin====')
        querySnapshot.forEach(function(doc) {
            var branch = doc.data()
            branch.key = doc.id
            pinCodeBranch.push(branch)
            console.log(doc.id, " => ", doc.data());
        });
        successfullySearchedBranch(pinCodeBranch);
    })
    .catch(function(error) {
        console.log("Error pincode matching documents: ", error.name);
    });

    ifscQuery.get()
    .then(function(querySnapshot) {
        ifscQueryBranch = []
        console.log('=====IFSC====')
        querySnapshot.forEach(function(doc) {
            var branch = doc.data()
            branch.key = doc.id
            ifscQueryBranch.push(branch)
            console.log(doc.id, " => ", doc.data());
        });
        successfullySearchedBranch(ifscQueryBranch);
    })
    .catch(function(error) {
        console.log("Error ifsc code matching documents: ", error.name);
    });

    nameQuery.get()
    .then(function(querySnapshot) {
        nameQueryBranch = []
        console.log('=====Name====')
        querySnapshot.forEach(function(doc) {
            var branch = doc.data()
            branch.key = doc.id
            nameQueryBranch.push(branch)
            console.log(doc.id, " => ", doc.data());
        });
        successfullySearchedBranch(nameQueryBranch);
    })
    .catch(function(error) {
        console.log("Error name code matching documents: ", error.name);
    });

}