//Data Load
const dataLoad = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayData(phones);
}
//Display Data;
const displayData = (phones) => {
    const cardContainer = document.getElementById('card-container');
    //clear before card for add new card
    cardContainer.textContent = '';
    phones.forEach(phone => {
        const createDiv = document.createElement('div');
        createDiv.classList = `card w-full bg-neutral text-white shadow-xl mx-auto`;
        createDiv.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>`;
        cardContainer.appendChild(createDiv);
    });
}


//Search Handler
const searchHandler = () =>{
    const searchText = document.getElementById('search').value;
    dataLoad(searchText);

}












// const loadPhone = async (searchText) => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
//     const data = await res.json();
//     const phones = data.data;
//     displayPhones(phones);
// }


// const displayPhones = phones => {
//     const divContainer = document.getElementById('card-container');
//     //Clear container before card add new card.
//     divContainer.textContent = '';
//     phones.forEach(phone => {
//         const cardDiv = document.createElement('div');
//                 cardDiv.classList = `card w-full bg-neutral text-white shadow-xl mx-auto`;
//                 cardDiv.innerHTML = `
//                         <figure class="px-10 pt-10">
//                             <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
//                         </figure>
//                         <div class="card-body items-center text-center">
//                         <h2 class="card-title">${phone.phone_name}</h2>
//                         <p>If a dog chews shoes whose shoes does he choose?</p>
//                         <div class="card-actions">
//                         <button class="btn btn-primary">Buy Now</button>
//                         </div>
//                     </div>
// `
//         divContainer.appendChild(cardDiv);
//     });
// }



// //search handler
// const searchHandler = () => {
//     const searchText = document.getElementById('search');
//     const searchValue = searchText.value;
//     loadPhone(searchValue);
// }