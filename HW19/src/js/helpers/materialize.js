import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';


//init select
const select = document.querySelectorAll('#currency');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
    return M.FormSelect.getInstance(elem)
}

//init date-picker
const datePicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datePicker);

export function getDatePickerInstance(elem) {
    return M.Datepicker.getInstance(elem)
}
//init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
const options = {
    data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
    }
}
M.Autocomplete.init(autocomplete, options);

export function getAutocompleteInstance(elem) {
    return M.Autocomplete.getInstance(elem)
}