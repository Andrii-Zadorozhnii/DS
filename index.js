let vesselName = document.querySelector('.vessel-name__input');
let portName = document.querySelector('.port-name__input');
let cargoName = document.querySelector('.cargo-name__input');
let initialDate = document.querySelector('.initial-data__date-input');
let finalDate = document.querySelector('.final-data__date-input');

let initialDraftPortForward = document.querySelector(".initial-data__drafts-Port-Df-input");
let initialDraftPortMiddle = document.querySelector('.initial-data__drafts-Port-Dm-input');
let initialDraftPortAft = document.querySelector('.initial-data__drafts-Port-Da-input');

let initialDraftStbdForward = document.querySelector(".initial-data__drafts-Stbd-Df-input");
let initialDraftStbdMiddle = document.querySelector('.initial-data__drafts-Stbd-Dm-input');
let initialDraftStbdAft = document.querySelector('.initial-data__drafts-Stbd-Da-input');

let finalDraftPortForward = document.querySelector(".final-data__drafts-Port-Df-input");
let finalDraftPortMiddle = document.querySelector('.final-data__drafts-Port-Dm-input');
let finalDraftPortAft = document.querySelector('.final-data__drafts-Port-Da-input');

let finalDraftStbdForward = document.querySelector(".final-data__drafts-Stbd-Df-input");
let finalDraftStbdMiddle = document.querySelector('.final-data__drafts-Stbd-Dm-input');
let finalDraftStbdAft = document.querySelector('.final-data__drafts-Stbd-Da-input');

//Initial Mean draft calculation
let initialDraftMeanForward = document.querySelector(".initial-data__drafts-Mean-Df");
let initialDraftMeanMiddle = document.querySelector(".initial-data__drafts-Mean-Dm");
let initialDraftMeanAft = document.querySelector(".initial-data__drafts-Mean-Da");

// Final Mean draft calculation

let finalDraftMeanForward = document.querySelector(".final-data__drafts-Mean-Df");
let finalDraftMeanMiddle = document.querySelector(".final-data__drafts-Mean-Dm");
let finalDraftMeanAft = document.querySelector(".final-data__drafts-Mean-Da");

//density

let initialWaterDensity = document.querySelector('.initial-data__density-input');
let finalWaterDensity = document.querySelector('.final-data__density-input');

//TBM

let initialTBM = document.querySelector('.initial-data__trim-BTM');
let finalTBM = document.querySelector('.final-data__trim-BTM');


function MeanDraftCalculation(PortDraft, StbdDraft) {
    let meanDraft = (PortDraft + StbdDraft) / 2;
    return meanDraft;
}



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
initialDraftPortForward.addEventListener('input', () => {
    localStorage.setItem('initialDraftPortForward', initialDraftPortForward.value);
    let meanDraft = MeanDraftCalculation(parseFloat(initialDraftPortForward.value), parseFloat(initialDraftStbdForward.value));
    initialDraftMeanForward.textContent = meanDraft.toFixed(3);
    localStorage.setItem('initialMeanDraftForward', meanDraft.toFixed(3));
    let tbm = (localStorage.getItem('initialMeanDraftAft')-(localStorage.getItem('initialMeanDraftForward')));
    initialTBM.textContent = tbm.toFixed(3);
});

initialDraftPortMiddle.addEventListener('input', () => {
    localStorage.setItem('initialDraftPortMiddle', initialDraftPortMiddle.value);
    let meanDraft = MeanDraftCalculation(parseFloat(initialDraftPortMiddle.value), parseFloat(initialDraftStbdMiddle.value));
    initialDraftMeanMiddle.textContent = meanDraft.toFixed(3);
    localStorage.setItem('initialMeanDraftMiddle', meanDraft.toFixed(3));

});

initialDraftPortAft.addEventListener('input', () => {
    localStorage.setItem('initialDraftPortAft', initialDraftPortAft.value);
    let meanDraft = MeanDraftCalculation(parseFloat(initialDraftPortAft.value), parseFloat(initialDraftStbdAft.value));
    initialDraftMeanAft.textContent = meanDraft.toFixed(3);
    localStorage.setItem('initialMeanDraftAft', meanDraft.toFixed(3));
    let tbm = (localStorage.getItem('initialMeanDraftAft')-(localStorage.getItem('initialMeanDraftForward')));
    initialTBM.textContent = tbm.toFixed(3);
});


initialDraftStbdForward.addEventListener('input', () => {
    localStorage.setItem('initialDraftStbdForward', initialDraftStbdForward.value);
    let meanDraft = MeanDraftCalculation(parseFloat(initialDraftPortForward.value), parseFloat(initialDraftStbdForward.value));
    initialDraftMeanForward.textContent = meanDraft.toFixed(3);
    localStorage.setItem('initialMeanDraftForward', meanDraft.toFixed(3));
    let tbm = (localStorage.getItem('initialMeanDraftAft')-(localStorage.getItem('initialMeanDraftForward')));
    initialTBM.textContent = tbm.toFixed(3);
});

initialDraftStbdMiddle.addEventListener('input', () => {
    localStorage.setItem('initialDraftStbdMiddle', initialDraftStbdMiddle.value);
    let meanDraft = MeanDraftCalculation(parseFloat(initialDraftPortMiddle.value), parseFloat(initialDraftStbdMiddle.value));
    initialDraftMeanMiddle.textContent = meanDraft.toFixed(3);
    localStorage.setItem('initialMeanDraftMiddle', meanDraft.toFixed(3));
});

initialDraftStbdAft.addEventListener('input', () => {
    localStorage.setItem('initialDraftStbdAft', initialDraftStbdAft.value);
    let meanDraft = MeanDraftCalculation(parseFloat(initialDraftPortAft.value), parseFloat(initialDraftStbdAft.value));
    initialDraftMeanAft.textContent = meanDraft.toFixed(3);
    localStorage.setItem('initialMeanDraftAft', meanDraft.toFixed(3));
    let tbm = (localStorage.getItem('initialMeanDraftAft')-(localStorage.getItem('initialMeanDraftForward')));
    initialTBM.textContent = tbm.toFixed(3);
});

// Final Drafts

finalDraftPortForward.addEventListener('input', () => {
    localStorage.setItem('finalDraftPortForward', finalDraftPortForward.value);
    let meanDraft = MeanDraftCalculation(parseFloat(finalDraftPortForward.value), parseFloat(finalDraftStbdForward.value));
    finalDraftMeanForward.textContent = meanDraft.toFixed(3);
    localStorage.setItem('finalMeanDraftForward', meanDraft.toFixed(3));
});

finalDraftPortMiddle.addEventListener('input', () => {
    localStorage.setItem('finalDraftPortMiddle', finalDraftPortMiddle.value);
    let meanDraft = MeanDraftCalculation(parseFloat(finalDraftPortMiddle.value), parseFloat(finalDraftStbdMiddle.value));
    finalDraftMeanMiddle.textContent = meanDraft.toFixed(3);
    localStorage.setItem('finalMeanDraftMiddle', meanDraft.toFixed(3));
});

finalDraftPortAft.addEventListener('input', () => {
    localStorage.setItem('finalDraftPortAft', finalDraftPortAft.value);
    let meanDraft = MeanDraftCalculation(parseFloat(finalDraftPortAft.value), parseFloat(finalDraftStbdAft.value));
    finalDraftMeanAft.textContent = meanDraft.toFixed(3);
    localStorage.setItem('finalMeanDraftAft', meanDraft.toFixed(3));
});


finalDraftStbdForward.addEventListener('input', () => {
    localStorage.setItem('finalDraftStbdForward', finalDraftStbdForward.value);
    let meanDraft = MeanDraftCalculation(parseFloat(finalDraftPortForward.value), parseFloat(finalDraftStbdForward.value));
    finalDraftMeanForward.textContent = meanDraft.toFixed(3);
    localStorage.setItem('finalMeanDraftForward', meanDraft.toFixed(3));
});

finalDraftStbdMiddle.addEventListener('input', () => {
    localStorage.setItem('finalDraftStbdMiddle', finalDraftStbdMiddle.value);
    let meanDraft = MeanDraftCalculation(parseFloat(finalDraftPortMiddle.value), parseFloat(finalDraftStbdMiddle.value));
    finalDraftMeanMiddle.textContent = meanDraft.toFixed(3);
    localStorage.setItem('finalMeanDraftMiddle', meanDraft.toFixed(3));
});

finalDraftStbdAft.addEventListener('input', () => {
    localStorage.setItem('finalDraftStbdAft', finalDraftStbdAft.value);
    let meanDraft = MeanDraftCalculation(parseFloat(finalDraftPortAft.value), parseFloat(finalDraftStbdAft.value));
    finalDraftMeanAft.textContent = meanDraft.toFixed(3);
    localStorage.setItem('finalMeanDraftAft', meanDraft.toFixed(3));
});

// Water density

initialWaterDensity.addEventListener('input', () => {
    localStorage.setItem('initialWaterDensity', initialWaterDensity.value);
});
finalWaterDensity.addEventListener('input', () => {
    localStorage.setItem('finalWaterDensity', finalWaterDensity.value);
});

// TBM






// get data from local storage
vesselName.value = localStorage.getItem('vesselName') || '';
portName.value = localStorage.getItem('portName') || '';
cargoName.value = localStorage.getItem('cargoName') || '';
initialDate.value = localStorage.getItem('initialDate') || '';
finalDate.value = localStorage.getItem('finalDate') || '';

initialDraftPortForward.value = localStorage.getItem('initialDraftPortForward') || '';
initialDraftPortMiddle.value = localStorage.getItem('initialDraftPortMiddle') || '';
initialDraftPortAft.value = localStorage.getItem('initialDraftPortAft') || '';

initialDraftStbdForward.value = localStorage.getItem('initialDraftStbdForward') || '';
initialDraftStbdMiddle.value = localStorage.getItem('initialDraftStbdMiddle') || '';
initialDraftStbdAft.value = localStorage.getItem('initialDraftStbdAft') || '';

finalDraftPortForward.value = localStorage.getItem('finalDraftPortForward') || '';
finalDraftPortMiddle.value = localStorage.getItem('finalDraftPortMiddle') || '';
finalDraftPortAft.value = localStorage.getItem('finalDraftPortAft') || '';

finalDraftStbdForward.value = localStorage.getItem('finalDraftStbdForward') || '';
finalDraftStbdMiddle.value = localStorage.getItem('finalDraftStbdMiddle') || '';
finalDraftStbdAft.value = localStorage.getItem('finalDraftStbdAft') || '';

initialDraftMeanForward.value = localStorage.getItem('initialMeanDraftPortForward') || '';
initialDraftMeanMiddle.value = localStorage.getItem('initialMeanDraftPortMiddle') || '';
initialDraftMeanAft.value = localStorage.getItem('initialMeanDraftPortAft') || '';

finalDraftMeanForward.value = localStorage.getItem('finaMeanDraftPortForward') || '';
finalDraftMeanMiddle.value = localStorage.getItem('finaMeanDraftPortMiddle') || '';
finalDraftMeanAft.value = localStorage.getItem('finaMeanDraftPortAft') || '';

finalDraftMeanAft.textContent = localStorage.getItem('finalMeanDraftAft') || '';
finalDraftMeanForward.textContent = localStorage.getItem('finalMeanDraftForward') || '';
finalDraftMeanMiddle.textContent = localStorage.getItem('finalMeanDraftMiddle') || '';

initialDraftMeanAft.textContent = localStorage.getItem('initialMeanDraftAft') || '';
initialDraftMeanForward.textContent = localStorage.getItem('initialMeanDraftForward') || '';
initialDraftMeanMiddle.textContent = localStorage.getItem('initialMeanDraftMiddle') || '';



initialWaterDensity.value = localStorage.getItem('initialWaterDensity') || '';
finalWaterDensity.value = localStorage.getItem('finalWaterDensity') || '';