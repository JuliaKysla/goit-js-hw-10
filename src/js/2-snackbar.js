import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');


formElem.addEventListener('submit', onFormElemSubmit);

function onFormElemSubmit(e){
e.preventDefault();
const delay = e.target.elements.delay.value;
const state = e.target.elements.state.value;
    const promise = creatPromise(delay, state)
    promise.then((delay) => {
        iziToast.success({
            message: `✅ Fulfilled promise in ${delay}ms`,
        });
    }).catch((delay) => {
        iziToast.error({
            message: `❌ Rejected promise in ${delay}ms`,})

    })
}



function creatPromise (delay, status){
const promise = new Promise((resolve, reject) => {
setTimeout(() => {
    if(status === 'fulfilled'){
        resolve(delay);
    }else {
        reject(delay);
    }
},delay)
})
return promise;
}

