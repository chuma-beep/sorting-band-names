//bands array
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//strip using regex
function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

//sort
const bandList  = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

//grab text and insert
document.querySelector('#bands').innerHTML = bandList.map(band => `<li>${band}</li>`).join('');