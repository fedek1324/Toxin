console.log('hi im input')

for (let i = 0; i < document.getElementsByClassName("b-input-field__e-input_is-dropdown").length; i++) {
    const dropdownIcon = document.getElementsByClassName('b-input-field__e-icon_is-chevron-icon')[i];
    const dropdownContent = document.getElementsByClassName('b-input-field__e-dropdown')[i];
    const input = document.getElementsByClassName("b-input-field__e-input_is-dropdown")[i];
    dropdownContent.hidden = true;

    let enabled = false;
    dropdownContent.style.width = input.offsetWidth + "px";
    dropdownIcon.onclick = function(event) {
        event.preventDefault();
        enabled = !enabled;
        // dropdownContent.style.display = enabled ? '' : 'none';
        input.classList.toggle("b-input-field__e-input_expanded");
        dropdownContent.hidden = !enabled;
    };

}
