﻿var profile = sessionStorage.getItem("profileSelector");

// This would be changed in a future update to not cycle between hard coded profile pages.
// A singular profile page would have its information changed with JQuery by the information pulled from the DB. 
function ProfileButtonHandler() {
    switch (profile) {
        case "lknope":
            window.location.replace("leslieProfile.html");
            break
        case "rswanson":
            window.location.replace("ronProfile.html");
            break
        case "thaverford":
            window.location.replace("tomProfile.html");
            break
        case "dmeagle":
            window.location.replace("donnaProfile.html");
            break
        case "adwyer":
            window.location.replace("andyProfile.html");
            break
        case "bwyatt":
            window.location.replace("benProfile.html");
            break
        case "ctraeger":
            window.location.replace("chrisProfile.html");
            break
        default:
            window.location.replace("profile.html");
    }
}

// Currently does not save information into DB. 
// Would create WebMethod to connect to DB and input data into a new table. 
function FindMentorHandler() {
    $("#career").val("");
    $("#school").val("");
    $("#personal").val("");
    alert("Information Saved!")
    window.location.replace("homePage.html");
}