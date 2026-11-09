let balance = 1000;
const PIN = 7293;
let DayLimit = 2000;
let LimitRemoved = 0;
let operations = 0;
let WithdrawnMoney = 0;
let deposit = 0;
const USD = 1.75;
const EUR = 1.95;
let i = 0;

while(i<3)
{
    let EnteredPin = Number(prompt("Введите PIN код: "));
    if(EnteredPin == PIN){

        let choice;

        while(true){
            console.log("===== Банкомат =====");
            console.log("1 - Баланс");
            console.log("2 - Снять");
            console.log("3 - Пополнить");
            console.log("4 - баланс в USD и EUR");
            console.log("0 - Выход");
            choice = Number(prompt("Ваш выбор:"));

            switch(choice){
                case 0:
                    console.log("===== Статистика операций =====");
                    console.log("Снято - " + WithdrawnMoney + "AZN");
                    console.log("Пополнено - " + deposit + "AZN");
                    console.log("Количество операций - " + operations);
                    console.log("Баланс - " + balance + "AZN");

                    break;

                case 1:
                    console.log("Ваш баланс" + balance + "AZN");
                    break;
                

                case 2:
                    let money = Number(prompt("Сумма для снятия: "));
                    let comission = 0;

                    if(money > balance){
                        console.log("Сумма превышает баланс");
                        break;
                    }

                    if(money > 500){
                        comission = money * 0.01;    
                    }

                    if(money + comission > balance){
                        console.log("Недостаточно средств с учетом комиссии");
                        break;
                    }

                    if(LimitRemoved + money > DayLimit){
                        console.log("Превышает дневной лимит");
                        break;
                    }

                    if(money > 0 && money % 5 == 0){
                        balance = balance - (money + comission);
                        WithdrawnMoney = WithdrawnMoney + money;
                        LimitRemoved = LimitRemoved + money + comission;
                        operations++;

                        console.log("Снято - " + money + "AZN");
                        console.log("Комиссия - " + comission + "AZN");
                        console.log("Баланс - " + balance + "AZN");
                    }
                    else{
                        console.log("Сумма должна быть больше нуля и кратным 5");
                    }

                    break;

                case 3:
                    let TopUpAmount = Number(prompt("Введите сумму попалнения:"));

                    if(TopUpAmount > 0 && TopUpAmount % 5 == 0){
                        balance = balance + TopUpAmount;
                        deposit = deposit + TopUpAmount;
                        operations++;

                        console.log("Пополнение счета на " + TopUpAmount + "AZN");
                        console.log("Баланс - " + balance + "AZN");

                        break;
                    }
                    else{
                        console.log("Сумма должна быть положительной и кратна 5");
                        break;
                    }

                case 4:
                    let UsdBalance = balance / USD;
                    let EurBalance = balance / EUR;

                    console.log("===== Баланс в разных валютах =====");
                    console.log("AZN - " + balance);
                    console.log("USD - " + UsdBalance);
                    console.log("EUR - " + EurBalance);

                    break;

                default:
                    console.log("Неверный пункт меню");
                    break;
            }

            if(choice == 0){
                break;
            }

        }

        break;
    }
    else{
        console.log("Неверный PIN код");
        i++;
    }
}

if(i == 3){
    console.log("Карта заблокирована");
}
