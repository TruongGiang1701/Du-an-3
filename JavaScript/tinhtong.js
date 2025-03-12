function calculateEvenSum() {
    let sum = 0;
    let entry;

    while (true) {
        entry = prompt("Nhập một số (hoặc nhấn 'Hủy' để kết thúc):");

        if (entry === null) {
            break;
        }
        let number = parseInt(entry);
        if (!isNaN(number) && number % 2 === 0) {
            sum += number;
        }
    }

    document.getElementById("result").innerHTML = "Tổng các số chẵn là: " + sum;

    
}
//array
let sum = 0;
let arr_number = [1,2,3,4,5];
console.log(arr_number[0]);
 for(let i = 0; i < arr_number.length(); i++){
    sum += arr_number[i];
 }
