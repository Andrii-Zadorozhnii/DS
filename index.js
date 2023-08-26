let vesselName = document.querySelector('.vessel-name__input');
let portName = document.querySelector('.port-name__input');
let cargoName = document.querySelector('.cargo-name__input');
let initialDate = document.querySelector('.initial-data__date-input');
let finalDate = document.querySelector('.final-data__date-input');

// Initial Drafts
let initialDraftForward = document.querySelector(".initial-data__drafts-Df-input");
let initialDraftMiddle = document.querySelector('.initial-data__drafts-Dm-input');
let initialDraftAft = document.querySelector('.initial-data__drafts-Da-input');

// Final Drafts
let finalDraftForward = document.querySelector(".final-data__drafts-Df-input");
let finalDraftMiddle = document.querySelector('.final-data__drafts-Dm-input');
let finalDraftAft = document.querySelector('.final-data__drafts-Da-input');


// Load values from Local Storage if available
vesselName.value = localStorage.getItem('vesselName') || '';
portName.value = localStorage.getItem('portName') || '';
cargoName.value = localStorage.getItem('cargoName') || '';
initialDate.value = localStorage.getItem('initialDate') || '';
finalDate.value = localStorage.getItem('finalDate') || ''

initialDraftForward.value = localStorage.getItem('initialDraftForward') || ''
initialDraftMiddle.value = localStorage.getItem('initialDraftMiddle') || ''
initialDraftAft.value = localStorage.getItem('initialDraftAft') || ''

finalDraftForward.value = localStorage.getItem('finalDraftForward') || ''
finalDraftMiddle.value = localStorage.getItem('finalDraftMiddle') || ''
finalDraftAft.value = localStorage.getItem('finalDraftAft') || ''

// Event listener to update Local Storage and log values
vesselName.addEventListener('input', () => {
    localStorage.setItem('vesselName', vesselName.value);
});

portName.addEventListener('input', () => {
    localStorage.setItem('portName', portName.value);
});

cargoName.addEventListener('input', () => {
    localStorage.setItem('cargoName', cargoName.value);
});

initialDate.addEventListener('input', () => {
    localStorage.setItem('initialDate', initialDate.value);
});

finalDate.addEventListener('input', () => {
    localStorage.setItem('finalDate', finalDate.value);
});

// initial Drafts 
initialDraftForward.addEventListener('input', () => {
    localStorage.setItem('initialDraftForward', initialDraftForward.value);
});

initialDraftMiddle.addEventListener('input', () => {
    localStorage.setItem('initialDraftMiddle', initialDraftMiddle.value);
});

initialDraftAft.addEventListener('input', () => {
    localStorage.setItem('initialDraftAft', initialDraftAft.value);
});

// Final Drafts

finalDraftForward.addEventListener('input', () => {
    localStorage.setItem('finalDraftForward', finalDraftForward.value);
});

finalDraftMiddle.addEventListener('input', () => {
    localStorage.setItem('finalDraftMiddle', finalDraftMiddle.value);
});

finalDraftAft.addEventListener('input', () => {
    localStorage.setItem('finalDraftAft', finalDraftAft.value);
});