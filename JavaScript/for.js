function calculateEvenSum() {
    let N = parseInt(prompt("Nhập vào số N:"));
    let sum = 0;

    if (isNaN(N) || N <= 0) {
        document.getElementById("result").innerHTML = "Vui lòng nhập một số nguyên dương!";
        return;
    }

    for (let i = 2; i < N; i += 2) {
        sum += i;
    }

    document.getElementById("result").innerHTML = "Tổng các số chẵn nhỏ hơn " + N + " là: " + sum;
}
