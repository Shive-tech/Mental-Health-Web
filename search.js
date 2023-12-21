document.addEventListener('DOMContentLoaded', function () {
    // Get the input element and search results container
    var searchInput = document.getElementById('search-input');
    var searchOutput = document.getElementById('search-output');
  
    // Add an event listener to the input for handling keyup events
    searchInput.addEventListener('keyup', function () {
      // Get the search query
      var query = searchInput.value.toLowerCase();
  
      // Call a function to perform the search and display results
      performSearch(query);
    });
  
    // Function to perform the search
    function performSearch(query) {
      // Replace this with your actual data or API call
      var data = [
        // Sample data - replace with your actual data
        { title: 'How to Deal With Toxic Masculinity<br>' , link: 'index.html' },
        { title: 'Helpful Resources<br>', link: 'findhelp.html' },
        { title: '', link: 'index.html' },
        { title: '', link: 'index.html' },
        { title: '', link: 'index.html' },
        { title: '', link: 'index.html' },
        { title: '', link: 'index.html' },
        { title: '', link: 'index.html' },
        // Add more items as needed
      ];
  
      // Filter the data based on the search query
      var results = data.filter(function (item) {
        return item.title.toLowerCase().includes(query);
      });
  
      // Display the results in the search output container
      displayResults(results);
    }
  
    // Function to display search results
    function displayResults(results) {
      var outputHTML = '';
  
      if (results.length > 0) {
        // Build HTML for each result
        outputHTML = results.map(function (result) {
          return '<a href="' + result.link + '">' + result.title + '</a>';
        }).join('');
      } else {
        // Display a message for no results
        outputHTML = 'Sorry, no results';
      }
  
      // Update the content of the search results container
      searchOutput.innerHTML = outputHTML;
    }
  });
  