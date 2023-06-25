console.log('hi im input')

// const dropdown = document.getElementsByClassName('b-input-field__e-dropdown')[0];
const dropdownIcon = document.getElementsByClassName('b-input-field__e-icon_is-chevron-icon')[0];
const dropdownContent = document.getElementsByClassName('b-input-field__e-dropdown')[0];
let enabled = false;
dropdownIcon.onclick = function() {
    enabled = !enabled;
    dropdownContent.style.display = enabled ? '' : 'none';
};