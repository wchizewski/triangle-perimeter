// Triangle Perimeter Assignment Start Code
document.getElementById("calc").addEventListener("click", calculate)

function calculate() {
    let xA = +document.getElementById("xA").value;
    let yA = +document.getElementById("yA").value;
    let xB = +document.getElementById("xB").value;
    let yB = +document.getElementById("yB").value;
    let xC = +document.getElementById("xC").value;
    let yC = +document.getElementById("yC").value;

    let AB = dist(xA, yA, xB, yB);
    let AC = dist(xA, yA, xC, yC);
    let BC = dist(xB, yB, xC, yC);
    let perimeter = AB + AC + BC;

    document.getElementById("ab").innerHTML = "AB = " + AB
    document.getElementById("ac").innerHTML = "AC = " + AC
    document.getElementById("bc").innerHTML = "BC = " + BC
    document.getElementById("perimeter").innerHTML = "Perimeter of ABC = " + perimeter


}

function dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
}