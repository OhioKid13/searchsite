// Add event listener to search bar input field
document.getElementById("searchBar").addEventListener("input", function(event) {
var searchValue = this.value.trim().toLowerCase();
var searchResults = document.getElementById("searchResults");

// Clear previous search results
searchResults.innerHTML = '';

// Define search result objects
var searchItems = [
{ name: "YouTube", url: "https://www.youtube.com/" },
{ name: "LDJAM", url: "https://shorturl.at/bEL05" },
{ name: "Google", url: "https://www.google.com/" },
{ name: "Firefox Download", url: "https://www.mozilla.org/en-CA/firefox/" },
{ name: "calculator", url: "https://calculator.apps.chrome/" },
{ name: "translator", url: "https://translate.google.com/" },
{ name: "Search Site", url: "index.html" },
{ name: "my itch io profile", url: "https://ohiokid13.itch.io/" },
{ name: "about searchsite", url: "about.html" }
];

// Filter search results based on search value
var filteredResults = searchItems.filter(function(item) {
return item.name.toLowerCase().includes(searchValue);
});

// Create list items for each search result
filteredResults.forEach(function(item) {
var listItem = document.createElement("li");
var link = document.createElement("a");
link.textContent = item.name;
link.href = item.url;
link.target = "_blank";
listItem.appendChild(link);
searchResults.appendChild(listItem);
});
});

// Function to refresh the page
function redirectToCustomUrl() {
location.reload();
}

function redirectToGoogle() {
window.open('https://google.com', '_blank');
}

function redirectToYoutube() {
window.open('https://www.youtube.com/@Acro_Studios', '_blank');
}

function redirectToAbout() {
window.open('about.html', '_blank');
}
