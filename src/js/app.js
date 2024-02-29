//Data Load
const dataLoad = async (searchText = '13',loadAllItems) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayData(phones, loadAllItems);
}
//Display Data;
const displayData = (phones, loadAllItems) => {
    const cardContainer = document.getElementById('card-container');
    //clear before card for add new card
    cardContainer.textContent = '';
    //if more then 12 phones
    const phoneLength = phones.length;
    const showAll = document.getElementById('show-all');
    if(phoneLength > 12 && !loadAllItems){
        showAll.classList.remove('hidden');
    }else{
        showAll.classList.add('hidden');
    }
    //for show 12 items if not show all button click
    if(!loadAllItems){
        phones = phones.slice(0,12);
    }
    phones.forEach(phone => {
        const createDiv = document.createElement('div');
        createDiv.classList = `card w-full bg-neutral text-white shadow-xl mx-auto`;
        createDiv.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p class="my-5"></p>
            <div class="card-actions">
                <button onclick="showDetailsHandler('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>`;
        cardContainer.appendChild(createDiv);
    });
    toggleHandler(false);
}


//Search Handler
const searchHandler = (loadAllItems) =>{
    const searchText = document.getElementById('search').value;
    dataLoad(searchText, loadAllItems);
    toggleHandler(true);
}


//toggle handler
const toggleHandler = (toggleTrue) =>{
    const toggleHandler = document.getElementById('toggle');
    if(toggleTrue){
        toggleHandler.classList.remove('hidden');
    }else{
        toggleHandler.classList.add('hidden');
    }
}

//Show Details
const showDetailsHandler = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(phone);
}
const showPhoneDetails = (phone) =>{
    showModal_details.showModal();
    console.log(phone)
    const showDetailsContainer = document.getElementById('showDetailsContainer');
    const showDetailsContent = document.createElement('div');
    showDetailsContainer.innerHTML = '';
    showDetailsContent.innerHTML = `
    <div class="card w-full shadow-xl">
        <figure class="pt-10">
            <img src="${phone.image}" alt="Shoes"
                class="rounded-xl" />
        </figure>
        <div class="card-body">
            <h2 class="card-title"> ${phone.name}</h2>
            <p> Phone Description</p>
            <p><strong>Storage: </strong>${phone?.mainFeatures?.storage}</p>
               <p><strong>Display Size: </strong>${phone?.mainFeatures?.displaySize}</p>
               <p><strong>Chip set: </strong>${phone?.mainFeatures?.chipSet}</p>
               <p><strong>Memory: </strong>${phone?.mainFeatures?.memory}</p>
               <p><strong>ID: </strong>${phone?.slug}</p>
               <p><strong>Release Date: </strong>${phone?.mainFeatures?.releaseDate}</p>
            <p><strong>Brand: </strong>${phone?.brand}</p>
            <p><strong>Gps: </strong>${phone?.others?.GPS || "No Data Found"}</p> 
        </div>
    </div>
    `
    showDetailsContainer.appendChild(showDetailsContent);
}
//show all button
const loadAll = () =>{
    searchHandler(true)
}

///default
dataLoad();