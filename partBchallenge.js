
//Market Content
var shop = [
    {
        title: 'Welcome Package',
        image: 'https://images.pexels.com/photos/20607811/pexels-photo-20607811/free-photo-of-couple-expecting-a-baby-posing-in-a-studio-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: '15min, 3 prints, custom tag',
        price: '$150',
        description: 'Our welcome package is specially priced to capture your first professional photos with your adopted pet! Choose a custom tag from our collection, and we add the names and details of your newest family member for you while you snap photos. Welcome to the Pawsh family!'
    },
    {
        title: 'Birthday Session',
        image: 'https://images.pexels.com/photos/27176120/pexels-photo-27176120/free-photo-of-a-couple-wearing-party-hats-celebrating-their-dogs-birthday.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: '15min, 10 prints, 1 smash cake',
        price: '$300',
        description: "Whether it's yours, your fur family, or someone's birthday, this festive photoshoot comes with a pet-friendly 6 inch smash cake made by our local Pet Bakery for your pet to make an adorable mess of! Up to 5 other family members can join; additional members add $20 surcharge per person. Other services and additions priced a la carte."
    },
    {
        title: 'Family & Friends',
        image: 'https://images.unsplash.com/photo-1526363269865-60998e11d82d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFtaWx5JTIwd2l0aCUyMHBldHxlbnwwfDB8MHx8fDI%3D',
        name: '30min, 10 prints, unlimited family',
        price: '$350',
        description: 'Includes everything in the Welcome Package with as many family members, and family photos you want in a 30 minute session! 10 prints total included; other services/additions priced a la carte.'
    },
    {
        title: 'Paws & Prints',
        image: 'https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: '45min, Paw Plaque, 8x8 album',
        price: '$450',
        description: 'You and your family will cherish the beautiful memories made in this 45 minute session, which comes with a special "Paw Plaque" of your pet paws, an accessory/toy of your choice, and 20 prints in a 6x6 album.'
    },
    {
        title: 'Deluxe Dream',
        image: 'https://images.pexels.com/photos/573293/pexels-photo-573293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: '1hr & up, 8x8 album, designer detail',
        price: '$500+',
        description: 'No dream or demand is too large to fill! With the right photographer and the right vision, we can help you create the photos to cherish for a lifetime! Our photographers come to you at the location you desire for your once in a lifetime portraits. Comes with one 8x8 album of all photos you choose, a Paw Plaque, and our custom tag; other details and customizations upon request'
    },
    {
        title: 'Pawsh Patron',
        image: 'https://images.pexels.com/photos/10117520/pexels-photo-10117520.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Sponsor our Mission',
        price: '$500+',
        description: 'Give the gift of smiles for a lifetime! Your donation goes towards the care and training costs of other animals in our partner programs, so that they too can find their forever families. In turn you receive our Welcome Package, plus a plaque and special pin to display your contribution in caring for our animal friends.'
    },



]

var postHTML = " "


for (var i = 0; i < shop.length; i++) {
    var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>';
    var image = '<img src="' + shop[i].image + '" alt="' + shop[i].title + '"/>';
    var name = '<p> ' + shop[i].name + '</p></span>';
    var price = '<p> ' + shop[i].price + '</p></span>';
    var description = `
        <div class="product-details" style="display: none;">  <p>${shop[i].description}</p></div>
        <button class="btn btn-light show-details" type="button">See More</button>
    </div>`; 

    var concatThis = heading + image + name + price + description;
    postHTML += concatThis; // Use += for string concatenation
}

document.getElementById('market').innerHTML = postHTML;

// Styles  
const body = document.body;
body.style.backgroundImage = "url('https://images.unsplash.com/photo-1508802153073-e549b30d1ac0?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";
body.style.textAlign = "center";


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
    button.style.backgroundColor = "white"; 
    button.style.color = "black"; 
    button.style.border = 'none'; 
    button.style.padding = '8px 12px'; 
    button.style.borderRadius = '5px'; 
    button.style.cursor = 'pointer';
    button.addEventListener('click', () => {
        const productDetails = button.previousElementSibling; 
        productDetails.style.display = productDetails.style.display === "block" ? "none" : "block"; 
        button.textContent = productDetails.style.display === "block" ? "See Less" : "See More"; 
    });
});

const priceElements = document.querySelectorAll('.product p:nth-child(2)'); // Selects the second p element in each product div

priceElements.forEach(priceElement => {
    priceElement.style.fontSize = "1.3em";
    priceElement.style.fontWeight = "bold";
});