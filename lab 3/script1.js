let age = parseInt(prompt("Пожалуйста, введите ваш возраст:"));

    if (isNaN(age) || age < 14) {
        alert("Странный возраст");
    } else if (age >= 14) {
        let password;
        
        if (age >= 14 && age <= 18) {
            password = prompt("Введите пароль:");
        } else if (age > 18) {
            password = prompt("Введите пароль:");
        }
        
        if (password === null) {
            alert("Вход отменён");
        } else if (
            (age >= 14 && age <= 18 && password === "Родительский контроль") ||
            (age > 18 && password === "Я взрослый")
        ) {
            alert("Добро пожаловать!");
        } else {
            alert("Пароль неверен");
        }
    } 
    else {
        alert("Странный возраст");
    }
