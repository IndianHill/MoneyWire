/*
*   Loads main page
*/
function loadHomePage() {
    window.location.href = "/";
}

/*
*   Loads banks
*/
function loadBanksPage() {
    window.location.href = "/banks.html";
}

/**
 *  Loads branches for given bank
 */
function loadBranchForBank(bankKey) {
    window.location.href = "/branch.html?bank="+bankKey;
}

/**
 *  Get url params
 */
function getUrlParams() {
    let query = window.location.search.substring(1);
    let params = parse_query_string(query);
    return params;
}

/**
 *  Parsing query string
 */
function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}