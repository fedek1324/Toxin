export class ExpandableCheckboxList {

  static initExpandableCheckboxLists() {
    const blockName = 'b-expandable-checkbox-list';
    const expandableCheckboxLists = document.querySelectorAll(`.${blockName}`);
    expandableCheckboxLists.forEach((expandableCheckboxList) => {
      const titleRow = expandableCheckboxList.querySelector(`.${blockName}__e-title-row-container`);
      const checkboxesContainer = expandableCheckboxList.querySelector(`.${blockName}__e-checkboxes-container`);
      const chevron = expandableCheckboxList.querySelector(`.${blockName}__e-chevron`);
      // checkboxesContainer.style.visibility = 'hidden';
      checkboxesContainer.style.display = 'none';
      chevron.style.rotate = "0deg";

      const toggleDropdownVisibility = () => {
        const newVisibilityValue = checkboxesContainer.style.display === 'none' ? '' : 'none';
        const newChevronRotateValue = checkboxesContainer.style.display === 'none' ? '180deg' : '0deg';
        checkboxesContainer.style.display = newVisibilityValue;
        chevron.style.rotate = newChevronRotateValue;
      }
      const handleTitleRowClick = (event) => {
        event.preventDefault();
        toggleDropdownVisibility();
      };
      titleRow.addEventListener('click', handleTitleRowClick);

      if (expandableCheckboxList.dataset.openByDefault
        || expandableCheckboxList.dataset.openByDefault === '') {
        toggleDropdownVisibility();
      }
    });
  }

}
