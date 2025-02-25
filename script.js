$(document).ready(function() {
    var data = {
        teams: [
            ["Team 1", "Team 2"],
            ["Team 3", "Team 4"],
            ["Team 5", "Team 6"],
            ["Team 7", "Team 8"]
        ],
        results: []
    };

    $('#tournament').bracket({
        init: data,                         // Load the bracket data
        save: function(updatedData) {
            console.log(updatedData);       // Save results when changed
        }
    });
});

$('#tournament').bracket({
    init: data, 
    save: function(updatedData) {
        console.log(updatedData); // Log updated results

        // Extract final winner
        var finalMatch = updatedData.results[updatedData.results.length - 1]; // Last match
        if (finalMatch && finalMatch[0]) {
            var winner = finalMatch[0][0] !== null 
                ? data.teams[finalMatch[0][0]][0] 
                : data.teams[finalMatch[0][1]][1];
            $("#winner").text("Winner: " + winner); // Update winner text
        }
    },
    disableToolbar: false, // Allow users to edit results
    disableTeamEdit: true  // Users can't change team names
});
