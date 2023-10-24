const displayTemples = (temples) => {
    temples.forEach((temple) => {
      let article = document.createElement("article");
  
      let templeName = document.createElement("h3");
      templeName.textContent = temple.templeName;
  
      let location = document.createElement("h4");
      location.textContent = temple.location;
  
      let dedicated = document.createElement("h4");
      dedicated.textContent = temple.dedicated;
  
      let img = document.createElement("img");
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", temple.templeName);
      img.classList.add("temple-img");
  
      article.appendChild(templeName);
      article.appendChild(location);
      article.appendChild(dedicated);
      article.appendChild(img);
  
      document.querySelector("#temples").appendChild(article);
    });
  };
  
  const getTemples = async () => {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    templeList = await response.json();
    displayTemples(templeList);
  };
  getTemples();
  

  const reset = () => {
    document.querySelector("#temples").innerHTML = "";
  };
  // CSS styles for grid and shadow
const style = document.createElement("style");
style.innerHTML = `
  #temples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .temple-article {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .temple-img {
    width: 100%;
    height: auto;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

// Append the styles to the document
document.head.appendChild(style);

const sortBy = (temples) => {
    reset();
  
    const compareDate = new Date(1950, 0, 1);
    let filter = document.querySelector("#sortBy").value;
  
    switch (filter) {
      case "utah":
        displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        break;
      case "notutah":
        displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter((temple) => {
          const templeDate = new Date(temple.dedicated.split(', ').reverse().join('-'));
          return templeDate < compareDate;
        }));
        break;
      default:
        displayTemples(temples);
    }
  };
  
  const templesList = [];
  
  document.querySelector("#sortBy").addEventListener("change", () => sortBy(templeList));
  getTemples();