function AddNewPlace(name, country, yearTime){
    this.placeName = name;
    this.countryVisited = country;
    this.timeOfYear = yearTime;
}

AddNewPlace.prototype.fullDetails = function() {
    return this.name + " located in " + this.country;
}

$(document).ready(function () {
    $("form").submit(function (e) { 
        e.preventDefault();

        let placeName = ("input#new-place").val();
        let countryName = ("input#new-country").val();
        let yearTime = ("input#new-time").val();
        let notes = ("input#new-note").val();
    });
});