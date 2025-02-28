
//Market Content
var shop = [
    {
        title: '$350',
        image: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Tiggy',
        breed: 'tiger',
        disposition: 'friendly',
        description: 'Friendly and curious'
    },
    {
        title: '$825',
        image: 'https://images.unsplash.com/photo-1716064554838-f9ae49db992b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcHliYXJhfGVufDB8MHwwfHx8Mg%3D%3D',
        name: 'Fern',
        breed: 'Capybara',
        disposition: 'sassy',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quibusdam!"
    },
    {
        title: '$400',
        image: 'https://images.unsplash.com/photo-1559084906-27df42f15c5f?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Pattie',
        breed: 'Parrot',
        disposition: 'friendly',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quibusdam!'
    },
    {
        title: '$2,000',
        image: 'https://images.unsplash.com/photo-1516590914727-51e55df118d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBmb3h8ZW58MHwwfDB8fHwy',
        name: 'Snowdrop',
        breed: 'Arctic Fox',
        disposition: 'friendly',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quibusdam!'
    },
    {
        title: '$80',
        image: 'https://images.unsplash.com/photo-1636370395847-e0781efa45e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVubnklMjBhbmltYWx8ZW58MHwwfDB8fHwy',
        name: 'Sunflower',
        breed: 'Gecko',
        disposition: 'funny',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quibusdam!'
    },
    {
        title: '$650',
        image: 'https://images.unsplash.com/photo-1512988442538-a42600ac4634?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbGNvbnxlbnwwfDB8MHx8fDI%3D',
        name: 'Sharpie',
        breed: 'Falcon',
        disposition: 'fast',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quibusdam!'
    },



]

var postHTML = " "


for (var i = 0; i < shop.length; i++) {
    var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>';
    var image = '<img src="' + shop[i].image + '" alt="' + shop[i].title + '"/>';
    var name = '<p> ' + shop[i].name + '</p></span>';
    var breed = '<p> ' + shop[i].breed + '</p></span>';
    var description = `
        <div class="product-details" style="display: none;">  <p>${shop[i].description}</p></div>
        <button class="btn btn-warning show-details" type="button">See More</button>
    </div>`; 

    var concatThis = heading + image + name + breed + description;
    postHTML += concatThis; // Use += for string concatenation
}

document.getElementById('market').innerHTML = postHTML;

// Styles  
const body = document.body;
body.style.backgroundImage = "url('https://images.unsplash.com/photo-1508802153073-e549b30d1ac0?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";

const market = document.getElementById('market'); 

market.style.display = "grid";
market.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))"; 
market.style.gridGap = "20px";
market.style.marginBottom = "20px";


const products = document.querySelectorAll('.product'); 

products.forEach(product => {
    product.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    product.style.padding = "20px";
    product.style.borderRadius = "10px";
    product.style.margin = "10px";
    product.style.cursor = "pointer";
    product.style.transition = "transform 0.3s";

    product.addEventListener('mouseover', () => {
        product.style.transform = "scale(1.04)";
    });

    product.addEventListener('mouseout', () => {
        product.style.transform = "scale(1)"; 
    });

    const img = product.querySelector('img');
    img.style.maxWidth = "100%";
    img.style.height = "auto";
    img.style.borderRadius = "10px";
    img.style.marginBottom = "10px";

    const h5 = product.querySelector('h5');
    h5.style.fontSize = "larger";
    h5.style.fontWeight = "bold";

    const p = product.querySelector('p');
    p.style.marginBottom = "5px";

});


// Description Toggle
const showDetailsButtons = document.querySelectorAll('.show-details');

showDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productDetails = button.previousElementSibling; 
        productDetails.style.display = productDetails.style.display === "block" ? "none" : "block"; 
        button.textContent = productDetails.style.display === "block" ? "See Less" : "See More"; 
    });
});