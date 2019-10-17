// У вас на странице есть три инпута, чекбокс(галочка) и кнопка "отправить" (итого: пять элементов).
// Ваша задача - написать валидацию. То есть, пользователь заполняет все поля, нажимает на кнопку
// "Отправить", а вы проверяете все ли поля заполнены корректно.
// Результат вывести в консоль (все хорошо/всё плохо).
// Список полей:
// Имя (больше 2-х символов и меньше - 40)
// Логин (должен быть заполнен/не пустой)
// Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)
// Галочка - "Прочитал условия" (должна быть включена)
// Если хоть одно из условий не совпадает, то форма не валидна.



const input1 = document.querySelector('input[name="name"]');
const input2 = document.querySelector('input[name="login"]');
const input3 = document.querySelector('input[name="password"]');
const input4 = document.querySelector('input[name="checkbox"]');

const btn = document.getElementById('apply');

btn.addEventListener('click', function () {
    let result = 1;
    if (input1.value.length > 5 && input1.value.length < 40 &&
        input2.value !== '' && input3.value.length > 8 &&
        input3.value.replace(/[^0-9]/g,"") && input3.value.replace(/[^A-Z]/g,"") &&
        input4.checked === true) {
        result = 'Все хорошо';
        console.log(result)
    } else {
        result = 'Все плохо';
        console.log(result)
    }
    alert(result);
    return result
});

