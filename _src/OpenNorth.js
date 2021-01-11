
const legislaturesByProvince = {
    AB: "Legislative Assembly of Alberta",
    BC: "Legislative Assembly of British Columbia",
    MB: "Legislative Assembly of Manitoba",
    NB: "Legislative Assembly of New Brunswick",
    NL: "Newfoundland and Labrador House of Assembly",
    NS: "Nova Scotia House of Assembly",
    ON: "Legislative Assembly of Ontario",
    PE: "Legislative Assembly of Prince Edward Island",
    QC: "Assemblée nationale du Québec",
    SK: "Legislative Assembly of Saskatchewan"
};

let parseReps = function(response) {
    let federalRep = null;
    let provincialRep = null;
    let province = response.province;
    for (const i in response.representatives_centroid) {
        if (response.representatives_centroid.hasOwnProperty(i)) {
            let rep = response.representatives_centroid[i];
            if (isFederalRep(rep)) {
                federalRep = rep;
            } else if (isProvincialRep(rep, province)) {
                provincialRep = rep;
            }
        }
    }

    for (const i in response.representatives_concordance) {
        if (response.representatives_concordance.hasOwnProperty(i)) {
            let rep = response.representatives_concordance[i];
            if (isFederalRep(rep)) {
                federalRep = rep;
            } else if (isProvincialRep(rep, province)) {
                provincialRep = rep;
            }
        }
    }

    let results = [];
    if (federalRep !== null) {
        results.push(federalRep);
    }
    // if (provincialRep !== null) {
    //     results.push(provincialRep);
    // }
    return results;
}

let isFederalRep = function(rep) {
    return rep.representative_set_name === 'House of Commons';
}

let isProvincialRep = function(rep, province) {
    return legislaturesByProvince[province] === rep.representative_set_name;
}

export default {
    findRepsByPostal: async function(postal) {
        postal = postal.replaceAll(/[^A-Z\d]/g, '');
        let url = encodeURI(`https://represent.opennorth.ca/postcodes/${postal}`)
        // use cors-anywhere proxy for cross-origin request from frontend-only github pages
        let results;
        try {
            results = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
        } catch (e) {
            console.error(e);
            return [];
        }
        if (results.status !== 200) {
            return [];
        }
        let data = await results.json();
        return parseReps(data);
    }
}