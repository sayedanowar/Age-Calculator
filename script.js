const btn = document.getElementById('btn')

const birthday = document.getElementById('birthday')

const result = document.getElementById('result')

function calculate() {
    const birthdayValue = birthday.value;
    if (birthdayValue === '') {
        alert('Please Enter Your Date Of Birth');
    }
    else {
        const age = getAge(birthdayValue);
        result.innerHTML = `You Are ${age} ${age > 1 ? 'Years' : 'year'} Old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}

btn.addEventListener('click', calculate)