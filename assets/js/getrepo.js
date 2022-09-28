// Octokit.js
// https://github.com/octokit/core.js#readme
// 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


function requestUserRepos(username){
    
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}/repos`;
   
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    
    // When request is received
    // Process it here
    xhr.onload = function () {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        
        // Loop over each object in data array
        for (let i in data) {

            if (!data[i].name.includes("gatsby")){

                // Get the div with id of of userRepos
                let div = document.getElementById('userRepos');
        
                // Create variable that will create article's to be added to div
                let article = document.createElement('article');   
                
                // Add Bootstrap list item class to each article
                article.classList.add('col-6','col-12-xsmall', 'work-item')

                // Add topics as ul element
                let Len = data[i].topics.length;
                let skill = '<ul class="skill-tags">';
                for (let z = 0; z < Len; z++) {
                  skill += "<li>#"+data[i].topics[z]+"</li>";
                }
                skill += "</ul>";

                // Clean repo name
                let repoName = data[i].name;
                repoName = (repoName.replace(/-|\./gi," ")).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

                // Create the html markup for each article
                article.innerHTML = (`
                	<a href="${data[i].html_url}" target="_blank" rel="noopener noreferrer" class="image fit thumb"><img src="images/thumbs/${data[i].name}.png" alt="" style="height: 250px; object-fit: cover;" /></a>
                	<h3><a href="${data[i].html_url}" target="_blank" rel="noopener noreferrer"> ${repoName}</a></h3>
                	<p>${data[i].description}</p>
                `+skill);

                // Append each article to the div
                div.appendChild(article);
            }
        }

    }
    
    // Send the request to the server
    xhr.send();
    
}

// Call function passing in 'facebook' as GitHub username
requestUserRepos('Bicheng-G');