

/*
* The following 2D arrays store the scale names of each type and all of its images to be accessed in constant time.
*/

// Stores major scale names and all corresponding images
let majorScales = [
    ["Cb Major", "Scale snapshots/Cb_Major_Scale_NF.png", "Scale snapshots/Cb_Major_Scale_F.png", "Scale snapshots/Cb_Major_Arpeggio_NF.png", "Scale snapshots/Cb_Major_Arpeggio_F.png"],
    ["C Major", "Scale snapshots/C_Major_Scale_NF.png", "Scale snapshots/C_Major_Scale_F.png", "Scale snapshots/C_Major_Arpeggio_NF.png", "Scale snapshots/C_Major_Arpeggio_F.png"],
    ["C# Major", "Scale snapshots/CSharp_Major_Scale_NF.png", "Scale snapshots/CSharp_Major_Scale_F.png", "Scale snapshots/CSharp_Major_Arpeggio_NF.png", "Scale snapshots/CSharp_Major_Arpeggio_F.png"],
    ["Db Major", "Scale snapshots/Db_Major_Scale_NF.png", "Scale snapshots/Db_Major_Scale_F.png", "Scale snapshots/Db_Major_Arpeggio_NF.png", "Scale snapshots/Db_Major_Arpeggio_F.png"],
    ["D Major", "Scale snapshots/D_Major_Scale_NF.png", "Scale snapshots/D_Major_Scale_F.png", "Scale snapshots/D_Major_Arpeggio_NF.png", "Scale snapshots/D_Major_Arpeggio_F.png"],
    ["Eb Major", "Scale snapshots/Eb_Major_Scale_NF.png", "Scale snapshots/Eb_Major_Scale_F.png", "Scale snapshots/Eb_Major_Arpeggio_NF.png", "Scale snapshots/Eb_Major_Arpeggio_F.png"],
    ["E Major", "Scale snapshots/E_Major_Scale_NF.png", "Scale snapshots/E_Major_Scale_F.png", "Scale snapshots/E_Major_Arpeggio_NF.png", "Scale snapshots/E_Major_Arpeggio_F.png"],
    ["F Major", "Scale snapshots/F_Major_Scale_NF.png", "Scale snapshots/F_Major_Scale_F.png", "Scale snapshots/F_Major_Arpeggio_NF.png", "Scale snapshots/F_Major_Arpeggio_F.png"],
    ["F# Major", "Scale snapshots/FSharp_Major_Scale_NF.png", "Scale snapshots/FSharp_Major_Scale_F.png", "Scale snapshots/FSharp_Major_Arpeggio_NF.png", "Scale snapshots/FSharp_Major_Arpeggio_F.png"],
    ["Gb Major", "Scale snapshots/Gb_Major_Scale_NF.png", "Scale snapshots/Gb_Major_Scale_F.png", "Scale snapshots/Gb_Major_Arpeggio_NF.png", "Scale snapshots/Gb_Major_Arpeggio_F.png"],
    ["G Major", "Scale snapshots/G_Major_Scale_NF.png", "Scale snapshots/G_Major_Scale_F.png", "Scale snapshots/G_Major_Arpeggio_NF.png", "Scale snapshots/G_Major_Arpeggio_F.png"],
    ["Ab Major", "Scale snapshots/Ab_Major_Scale_NF.png", "Scale snapshots/Ab_Major_Scale_F.png", "Scale snapshots/Ab_Major_Arpeggio_NF.png", "Scale snapshots/Ab_Major_Arpeggio_F.png"],
    ["A Major", "Scale snapshots/A_Major_Scale_NF.png", "Scale snapshots/A_Major_Scale_F.png", "Scale snapshots/A_Major_Arpeggio_NF.png", "Scale snapshots/A_Major_Arpeggio_F.png"],
    ["Bb Major", "Scale snapshots/Bb_Major_Scale_NF.png", "Scale snapshots/Bb_Major_Scale_F.png", "Scale snapshots/Bb_Major_Arpeggio_NF.png", "Scale snapshots/Bb_Major_Arpeggio_F.png"],
    ["B Major", "Scale snapshots/B_Major_Scale_NF.png", "Scale snapshots/B_Major_Scale_F.png", "Scale snapshots/B_Major_Arpeggio_NF.png", "Scale snapshots/B_Major_Arpeggio_F.png"]
];

// Stores natural minor scale names and all corresponding images
let naturalMinorScales = [
    ["Cb Natural Minor", "Scale snapshots/Cb_NM_Scale_NF.png", "Scale snapshots/Cb_NM_Scale_F.png", "Scale snapshots/Cb_Minor_Arpeggio_NF.png", "Scale snapshots/Cb_Minor_Arpeggio_F.png"],
    ["C Natural Minor", "Scale snapshots/C_NM_Scale_NF.png", "Scale snapshots/C_NM_Scale_F.png", "Scale snapshots/C_Minor_Arpeggio_NF.png", "Scale snapshots/C_Minor_Arpeggio_F.png"],
    ["C# Natural Minor", "Scale snapshots/CSharp_NM_Scale_NF.png", "Scale snapshots/CSharp_NM_Scale_F.png", "Scale snapshots/CSharp_Minor_Arpeggio_NF.png", "Scale snapshots/CSharp_Minor_Arpeggio_F.png"],
    ["Db Natural Minor", "Scale snapshots/Db_NM_Scale_NF.png", "Scale snapshots/Db_NM_Scale_F.png", "Scale snapshots/Db_Minor_Arpeggio_NF.png", "Scale snapshots/Db_Minor_Arpeggio_F.png"],
    ["D Natural Minor", "Scale snapshots/D_NM_Scale_NF.png", "Scale snapshots/D_NM_Scale_F.png", "Scale snapshots/D_Minor_Arpeggio_NF.png", "Scale snapshots/D_Minor_Arpeggio_F.png"],
    ["D# Natural Minor", "Scale snapshots/DSharp_NM_Scale_NF.png", "Scale snapshots/DSharp_NM_Scale_F.png", "Scale snapshots/DSharp_Minor_Arpeggio_NF.png", "Scale snapshots/DSharp_Minor_Arpeggio_F.png"],
    ["Eb Natural Minor", "Scale snapshots/Eb_NM_Scale_NF.png", "Scale snapshots/Eb_NM_Scale_F.png", "Scale snapshots/Eb_Minor_Arpeggio_NF.png", "Scale snapshots/Eb_Minor_Arpeggio_F.png"],
    ["E Natural Minor", "Scale snapshots/E_NM_Scale_NF.png", "Scale snapshots/E_NM_Scale_F.png", "Scale snapshots/E_Minor_Arpeggio_NF.png", "Scale snapshots/E_Minor_Arpeggio_F.png"],
    ["F Natural Minor", "Scale snapshots/F_NM_Scale_NF.png", "Scale snapshots/F_NM_Scale_F.png", "Scale snapshots/F_Minor_Arpeggio_NF.png", "Scale snapshots/F_Minor_Arpeggio_F.png"],
    ["F# Natural Minor", "Scale snapshots/FSharp_NM_Scale_NF.png", "Scale snapshots/FSharp_NM_Scale_F.png", "Scale snapshots/FSharp_Minor_Arpeggio_NF.png", "Scale snapshots/FSharp_Minor_Arpeggio_F.png"],
    ["Gb Natural Minor", "Scale snapshots/Gb_NM_Scale_NF.png", "Scale snapshots/Gb_NM_Scale_F.png", "Scale snapshots/Gb_Minor_Arpeggio_NF.png", "Scale snapshots/Gb_Minor_Arpeggio_F.png"],
    ["G Natural Minor", "Scale snapshots/G_NM_Scale_NF.png", "Scale snapshots/G_NM_Scale_F.png", "Scale snapshots/G_Minor_Arpeggio_NF.png", "Scale snapshots/G_Minor_Arpeggio_F.png"],
    ["G# Natural Minor", "Scale snapshots/GSharp_NM_Scale_NF.png", "Scale snapshots/GSharp_NM_Scale_F.png", "Scale snapshots/GSharp_Minor_Arpeggio_NF.png", "Scale snapshots/GSharp_Minor_Arpeggio_F.png"],   
    ["Ab Natural Minor", "Scale snapshots/Ab_NM_Scale_NF.png", "Scale snapshots/Ab_NM_Scale_F.png", "Scale snapshots/Ab_Minor_Arpeggio_NF.png", "Scale snapshots/Ab_Minor_Arpeggio_F.png"],
    ["A Natural Minor", "Scale snapshots/A_NM_Scale_NF.png", "Scale snapshots/A_NM_Scale_F.png", "Scale snapshots/A_Minor_Arpeggio_NF.png", "Scale snapshots/A_Minor_Arpeggio_F.png"],
    ["A# Natural Minor", "Scale snapshots/ASharp_NM_Scale_NF.png", "Scale snapshots/ASharp_NM_Scale_F.png", "Scale snapshots/ASharp_Minor_Arpeggio_NF.png", "Scale snapshots/A_Minor_Arpeggio_F.png"],
    ["Bb Natural Minor", "Scale snapshots/Bb_NM_Scale_NF.png", "Scale snapshots/Bb_NM_Scale_F.png", "Scale snapshots/Bb_Minor_Arpeggio_NF.png", "Scale snapshots/Bb_Minor_Arpeggio_F.png"],
    ["B Natural Minor", "Scale snapshots/B_NM_Scale_NF.png", "Scale snapshots/B_NM_Scale_F.png", "Scale snapshots/B_Minor_Arpeggio_NF.png", "Scale snapshots/B_Minor_Arpeggio_F.png"]
];

// Stores harmonic minor scale names and all corresponding images
let harmonicMinorScales = [
    ["Cb Harmonic Minor", "Scale snapshots/Cb_HM_Scale_NF.png", "Scale snapshots/Cb_HM_Scale_F.png", "Scale snapshots/Cb_Minor_Arpeggio_NF.png", "Scale snapshots/Cb_Minor_Arpeggio_F.png"],
    ["C Harmonic Minor", "Scale snapshots/C_HM_Scale_NF.png", "Scale snapshots/C_HM_Scale_F.png", "Scale snapshots/C_Minor_Arpeggio_NF.png", "Scale snapshots/C_Minor_Arpeggio_F.png"],
    ["C# Harmonic Minor", "Scale snapshots/CSharp_HM_Scale_NF.png", "Scale snapshots/CSharp_HM_Scale_F.png", "Scale snapshots/CSharp_Minor_Arpeggio_NF.png", "Scale snapshots/CSharp_Minor_Arpeggio_F.png"],
    ["Db Harmonic Minor", "Scale snapshots/Db_HM_Scale_NF.png", "Scale snapshots/Db_HM_Scale_F.png", "Scale snapshots/Db_Minor_Arpeggio_NF.png", "Scale snapshots/Db_Minor_Arpeggio_F.png"],
    ["D Harmonic Minor", "Scale snapshots/D_HM_Scale_NF.png", "Scale snapshots/D_HM_Scale_F.png", "Scale snapshots/D_Minor_Arpeggio_NF.png", "Scale snapshots/D_Minor_Arpeggio_F.png"],
    ["D# Harmonic Minor", "Scale snapshots/DSharp_HM_Scale_NF.png", "Scale snapshots/DSharp_HM_Scale_F.png", "Scale snapshots/DSharp_Minor_Arpeggio_NF.png", "Scale snapshots/DSharp_Minor_Arpeggio_F.png"],
    ["Eb Harmonic Minor", "Scale snapshots/Eb_HM_Scale_NF.png", "Scale snapshots/Eb_HM_Scale_F.png", "Scale snapshots/Eb_Minor_Arpeggio_NF.png", "Scale snapshots/Eb_Minor_Arpeggio_F.png"],
    ["E Harmonic Minor", "Scale snapshots/E_HM_Scale_NF.png", "Scale snapshots/E_HM_Scale_F.png", "Scale snapshots/E_Minor_Arpeggio_NF.png", "Scale snapshots/E_Minor_Arpeggio_F.png"],
    ["F Harmonic Minor", "Scale snapshots/F_HM_Scale_NF.png", "Scale snapshots/F_HM_Scale_F.png", "Scale snapshots/F_Minor_Arpeggio_NF.png", "Scale snapshots/F_Minor_Arpeggio_F.png"],
    ["F# Harmonic Minor", "Scale snapshots/FSharp_HM_Scale_NF.png", "Scale snapshots/FSharp_HM_Scale_F.png", "Scale snapshots/FSharp_Minor_Arpeggio_NF.png", "Scale snapshots/FSharp_Minor_Arpeggio_F.png"],
    ["Gb Harmonic Minor", "Scale snapshots/Gb_HM_Scale_NF.png", "Scale snapshots/Gb_HM_Scale_F.png", "Scale snapshots/Gb_Minor_Arpeggio_NF.png", "Scale snapshots/Gb_Minor_Arpeggio_F.png"],
    ["G Harmonic Minor", "Scale snapshots/G_HM_Scale_NF.png", "Scale snapshots/G_HM_Scale_F.png", "Scale snapshots/G_Minor_Arpeggio_NF.png", "Scale snapshots/G_Minor_Arpeggio_F.png"],
    ["G# Harmonic Minor", "Scale snapshots/GSharp_HM_Scale_NF.png", "Scale snapshots/GSharp_HM_Scale_F.png", "Scale snapshots/GSharp_Minor_Arpeggio_NF.png", "Scale snapshots/GSharp_Minor_Arpeggio_F.png"],   
    ["Ab Harmonic Minor", "Scale snapshots/Ab_HM_Scale_NF.png", "Scale snapshots/Ab_HM_Scale_F.png", "Scale snapshots/Ab_Minor_Arpeggio_NF.png", "Scale snapshots/Ab_Minor_Arpeggio_F.png"],
    ["A Harmonic Minor", "Scale snapshots/A_HM_Scale_NF.png", "Scale snapshots/A_HM_Scale_F.png", "Scale snapshots/A_Minor_Arpeggio_NF.png", "Scale snapshots/A_Minor_Arpeggio_F.png"],
    ["A# Harmonic Minor", "Scale snapshots/ASharp_HM_Scale_NF.png", "Scale snapshots/ASharp_HM_Scale_F.png", "Scale snapshots/ASharp_Minor_Arpeggio_NF.png", "Scale snapshots/ASharp_Minor_Arpeggio_F.png"],
    ["Bb Harmonic Minor", "Scale snapshots/Bb_HM_Scale_NF.png", "Scale snapshots/Bb_HM_Scale_F.png", "Scale snapshots/Bb_Minor_Arpeggio_NF.png", "Scale snapshots/Bb_Minor_Arpeggio_F.png"],
    ["B Harmonic Minor", "Scale snapshots/B_HM_Scale_NF.png", "Scale snapshots/B_HM_Scale_F.png", "Scale snapshots/B_Minor_Arpeggio_NF.png", "Scale snapshots/B_Minor_Arpeggio_F.png"]
];

// Stores melodic minor scale names and all corresponding images
let melodicMinorScales = [
    ["Cb Melodic Minor", "Scale snapshots/Cb_MM_Scale_NF.png", "Scale snapshots/Cb_MM_Scale_F.png", "Scale snapshots/Cb_Minor_Arpeggio_NF.png", "Scale snapshots/Cb_Minor_Arpeggio_F.png"],
    ["C Melodic Minor", "Scale snapshots/C_MM_Scale_NF.png", "Scale snapshots/C_MM_Scale_F.png", "Scale snapshots/C_Minor_Arpeggio_NF.png", "Scale snapshots/C_Minor_Arpeggio_F.png"],
    ["C# Melodic Minor", "Scale snapshots/CSharp_MM_Scale_NF.png", "Scale snapshots/CSharp_MM_Scale_F.png", "Scale snapshots/CSharp_Minor_Arpeggio_NF.png", "Scale snapshots/CSharp_Minor_Arpeggio_F.png"],
    ["Db Melodic Minor", "Scale snapshots/Db_MM_Scale_NF.png", "Scale snapshots/Db_MM_Scale_F.png", "Scale snapshots/Db_Minor_Arpeggio_NF.png", "Scale snapshots/Db_Minor_Arpeggio_F.png"],
    ["D Melodic Minor", "Scale snapshots/D_MM_Scale_NF.png", "Scale snapshots/D_MM_Scale_F.png", "Scale snapshots/D_Minor_Arpeggio_NF.png", "Scale snapshots/D_Minor_Arpeggio_F.png"],
    ["D# Melodic Minor", "Scale snapshots/DSharp_MM_Scale_NF.png", "Scale snapshots/DSharp_MM_Scale_F.png", "Scale snapshots/DSharp_Minor_Arpeggio_NF.png", "Scale snapshots/DSharp_Minor_Arpeggio_F.png"],
    ["Eb Melodic Minor", "Scale snapshots/Eb_MM_Scale_NF.png", "Scale snapshots/Eb_MM_Scale_F.png", "Scale snapshots/Eb_Minor_Arpeggio_NF.png", "Scale snapshots/Eb_Minor_Arpeggio_F.png"],
    ["E Melodic Minor", "Scale snapshots/E_MM_Scale_NF.png", "Scale snapshots/E_MM_Scale_F.png", "Scale snapshots/E_Minor_Arpeggio_NF.png", "Scale snapshots/E_Minor_Arpeggio_F.png"],
    ["F Melodic Minor", "Scale snapshots/F_MM_Scale_NF.png", "Scale snapshots/F_MM_Scale_F.png", "Scale snapshots/F_Minor_Arpeggio_NF.png", "Scale snapshots/F_Minor_Arpeggio_F.png"],
    ["F# Melodic Minor", "Scale snapshots/FSharp_MM_Scale_NF.png", "Scale snapshots/FSharp_MM_Scale_F.png", "Scale snapshots/FSharp_Minor_Arpeggio_NF.png", "Scale snapshots/FSharp_Minor_Arpeggio_F.png"],
    ["Gb Melodic Minor", "Scale snapshots/Gb_MM_Scale_NF.png", "Scale snapshots/Gb_MM_Scale_F.png", "Scale snapshots/Gb_Minor_Arpeggio_NF.png", "Scale snapshots/Gb_Minor_Arpeggio_F.png"],
    ["G Melodic Minor", "Scale snapshots/G_MM_Scale_NF.png", "Scale snapshots/G_MM_Scale_F.png", "Scale snapshots/G_Minor_Arpeggio_NF.png", "Scale snapshots/G_Minor_Arpeggio_F.png"],
    ["G# Melodic Minor", "Scale snapshots/GSharp_MM_Scale_NF.png", "Scale snapshots/GSharp_MM_Scale_F.png", "Scale snapshots/GSharp_Minor_Arpeggio_NF.png", "Scale snapshots/GSharp_Minor_Arpeggio_F.png"],   
    ["Ab Melodic Minor", "Scale snapshots/Ab_MM_Scale_NF.png", "Scale snapshots/Ab_MM_Scale_F.png", "Scale snapshots/Ab_Minor_Arpeggio_NF.png", "Scale snapshots/Ab_Minor_Arpeggio_F.png"],
    ["A Melodic Minor", "Scale snapshots/A_MM_Scale_NF.png", "Scale snapshots/A_MM_Scale_F.png", "Scale snapshots/A_Minor_Arpeggio_NF.png", "Scale snapshots/A_Minor_Arpeggio_F.png"],
    ["A# Melodic Minor", "Scale snapshots/ASharp_MM_Scale_NF.png", "Scale snapshots/ASharp_MM_Scale_F.png", "Scale snapshots/ASharp_Minor_Arpeggio_NF.png", "Scale snapshots/ASharp_Minor_Arpeggio_F.png"],
    ["Bb Melodic Minor", "Scale snapshots/Bb_MM_Scale_NF.png", "Scale snapshots/Bb_MM_Scale_F.png", "Scale snapshots/Bb_Minor_Arpeggio_NF.png", "Scale snapshots/Bb_Minor_Arpeggio_F.png"],
    ["B Melodic Minor", "Scale snapshots/B_MM_Scale_NF.png", "Scale snapshots/B_MM_Scale_F.png", "Scale snapshots/B_Minor_Arpeggio_NF.png", "Scale snapshots/B_Minor_Arpeggio_F.png"]
];

// global array that is manipulated by the user based on the scale types they select, and shuffled internally
let shuffledArray = [];

function makeSelectionVisible() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('selectScales').style.display = 'block';
    // setting all checkboxes to unchecked everytime the user moves from startScreen to selectScales   
    document.getElementById("majorCheckBox").checked = false;
    document.getElementById("harmonicMinorCheckBox").checked = false;
    document.getElementById("naturalMinorCheckBox").checked = false;
    document.getElementById("melodicMinorCheckBox").checked = false;
    document.getElementById("insertImageCheckBox").checked = false;
    document.getElementById("insertFingeringsCheckBox").checked = false;
    // setting warning display to none for now
    document.getElementById('warning').style.display = 'none';
} // makeSelectionVisible

// select scales button moves to checkbox screen
document.getElementById('startButton').addEventListener('click', function(){
    makeSelectionVisible();
});
// Submit button functionality
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // prevents form from submitting
    let checkboxes = document.querySelectorAll('.scaletype');
    let selectedValues = [];
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          selectedValues.push(checkbox.value);
        } //if
    });
    // does not let user continue unless they have checked a box.
    if (selectedValues.length == 0) {
        // display warning if no boxes have been checked
        document.getElementById('warning').style.display = 'block';
    } else {
        shuffledArray = combineArrays(selectedValues);
        shuffleArray(shuffledArray);
        document.getElementById('cards').style.display = 'block';
        document.getElementById('selectScales').style.display = 'none';
        displayContent();
    } // if
});


// next/reset button functionality
document.getElementById('nextButton').addEventListener('click', function(event) {
    // if there are more scales to be displayed
    if (shuffledArray.length != 0) { 
        document.getElementById('nextButton').textContent = 'Next';
        displayContent();
        // Randomization process of the scale array which is created based on the checkbox values (@combineArrays)
    } else if(document.getElementById('nextButton').textContent == 'Reset') {
        let checkboxes = document.querySelectorAll('.scaletype');
        let selectedValues = [];
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
            selectedValues.push(checkbox.value);
            } //if
        });
        // does not let user continue unless they have checked a box.
        if (selectedValues.length == 0) {
            // display warning if no boxes have been checked
            document.getElementById('warning').style.display = 'block';
        } else {
            shuffledArray = combineArrays(selectedValues);
            shuffleArray(shuffledArray);
            //console.log(shuffledArray[0]);
            document.getElementById('cards').style.display = 'block';
            document.getElementById('selectScales').style.display = 'none';
            document.getElementById('nextButton').textContent = 'Next';
            displayContent();
        } // if
    } else {
        // changes to reset button which will restart the randomization process
        document.getElementById('scaleOnScreen').textContent = 'You practiced all the scales!';
        document.getElementById('nextButton').textContent = 'Reset';
    } // if
}); 

// "Back to selection" button functionality, allows user to reselect scale types
document.getElementById('backButton').addEventListener('click', function(event) {
    document.getElementById('warning').style.display = 'none';
    document.getElementById('cards').style.display = 'none';
    document.getElementById('selectScales').style.display = 'block';
});

// Home button functionality, simply takes user back to start screen
document.getElementById('homeButton').addEventListener('click', function(event) {
    document.getElementById('cards').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
});


// Displays next scale on screen and displays image according to checkbox selections
function displayContent() {
    document.getElementById('scaleOnScreen').textContent = shuffledArray[0][0];
    if (document.getElementById('insertImageCheckBox').checked) {
        document.getElementById('scaleImage').style.display = 'block';
        if (document.getElementById('insertFingeringsCheckBox').checked) {
            document.getElementById('scaleImage').src = shuffledArray[0][2];
        } else {
            document.getElementById('scaleImage').src = shuffledArray[0][1];
        } // if
    } else {
        document.getElementById('scaleImage').style.display = 'none';
    } //if

    if (document.getElementById('insertArpeggioCheckBox').checked) {
        document.getElementById('arpeggioImage').style.display = 'block';
        if (document.getElementById('insertFingeringsCheckBox').checked) {
            document.getElementById('arpeggioImage').src = shuffledArray[0][4];
        } else {
            document.getElementById('arpeggioImage').src = shuffledArray[0][3];
        } // if
    } else {
        document.getElementById('arpeggioImage').style.display = 'none';
    } //if
    shuffledArray.shift();
} // placeImage

// returns a new array with combined values from all arrays that were selected.
// Takes in selected checkbox values as param
function combineArrays(selected) {
    let combinedArray = [];
    // for each selected scale type, push the corresponding scale array into combinedArray
        if (selected.includes('majorCheckBox')) {
            combinedArray.push(...majorScales);
        } 
        if (selected.includes('naturalMinorCheckBox')) {
           combinedArray.push(...naturalMinorScales);
        } 
        if (selected.includes('harmonicMinorCheckBox')) {
           combinedArray.push(...harmonicMinorScales);
        } 
        if (selected.includes('melodicMinorCheckBox')){
           combinedArray.push(...melodicMinorScales);
        } // if
    return combinedArray;
} // combineArrays

// shuffles the combined array which is then used to output 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}