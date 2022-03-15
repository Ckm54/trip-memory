function AddNewPlace(name, country, yearTime, note){
    this.placeName = name;
    this.countryVisited = country;
    this.timeOfYear = yearTime;
    this.myNotes = note;
}

AddNewPlace.prototype.fullDetails = function() {
    return this.placeName + " located in " + this.countryVisited;
}

$(document).ready(function () {
    $("form").submit(function (e) { 
        e.preventDefault();

        let placeName = $("input#new-place").val();
        let countryName = $("input#new-country").val();
        let yearTime = $("input#new-time").val();
        let note = $("input#new-note").val();

        let newPlace = new AddNewPlace(placeName, countryName, yearTime, note);

        $("ul#my-places").append("<li><span class='place'>" + newPlace.fullDetails() + "</span></li>");

        $(".place").last().click(function (e) { 
            e.preventDefault();
            $(".show-place").show();
            $(".show-place h2").text(newPlace.placeName);
            $(".country").text(newPlace.countryVisited);
            $(".time").text(newPlace.timeOfYear);
            $(".note").text(newPlace.myNotes);
        });
    });
});