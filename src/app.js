import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let prefixes = ['awesome', 'super', 'cool','epic']; 
  let nouns = ['website', 'site', 'domain','developer', 'coder', 'project'];
  let domains = ['.com', '.net','.org'];

  const domainNames = document.getElementById("domainName")

 

  for (let i = 0; i < prefixes.length; i++) {
    for (let j = 0; j < nouns.length; j++) {
      for (let k = 0; k < domains.length; k++) {
        let domainName = prefixes[i] + nouns[j] + domains[k];
          const domainDiv = document.createElement('div');
                domainDiv.textContent = domainName;
                domainNames.appendChild(domainDiv);
       }
      }
    }

   
       
  
};

  


  

