
//Exercise 1
var person = {
    _salary: 1000,
    getSecretSalaryInfo: function (){
        return this._salary;
    }
};

var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo());
console.log(stoleSalaryInfo);

//Exercise 2
class Person {
    constructor(name) {
      this.name = name;
      this.planet = "Земя";
    }

    print(){
        console.log(`Здравей [${this.name}] от планетата [${this.planet}]`);
    }

}

var chuck = new Person("Чък Норис");
chuck.print();
var pavel = new Person("Павел Григоров");
pavel.print();
var peter = new Person("Петър Георгиев");
peter.print();

//Exercise 3
class Item {
    constructor(name, discount) {
      this.name = name;
      this.discount = discount;
    }

    getBasePrice(){
        return 1000;
    }

    getPrice(){
        return  this.getBasePrice() - (this.getBasePrice()/100)*this.discount;
    }
}

//Exercise 4
class PrivatePerson {
    constructor(){}
    getSalary(){
        let salary = 1000;
        return salary;
    }
}

//Exercise 5
function changeColors(sColor1, sColor2){
    var x = document.getElementsByTagName("p");
    var y = document.getElementsByClassName("headertitle");
    console.log(x.length);
    console.log(y.length);

    for(el of x)
    {
        el.style.backgroundColor = sColor1;
    }

    for(el of y)
    {
        el.style.backgroundColor = sColor2;
    }

    var title = document.getElementsByTagName("title")[0];
    title.innerHTML = "";
    title.appendChild(document.createTextNode(`${x.length} параграфа,
    ${y.length} елемента с клас <headertitle>`));

}
changeColors("red", "green");

//Exercise 6
//създава нов таб с таблицата
function createTable()
{
    var tab = window.open("");
    tab.document.write("<html><body></body></html>");

    let table = tab.document.createElement("table");
    let border = tab.document.createAttribute("border");
    border.value = "1";
    table.setAttributeNode(border);

    let caption = tab.document.createElement("caption");
    caption.appendChild(tab.document.createTextNode("Table caption"));
    table.appendChild(caption);

    let tr1 = tab.document.createElement("tr");
    let tr2 = tab.document.createElement("tr");
    let tr3 = tab.document.createElement("tr");

    let th1 = tab.document.createElement("th");
    th1.appendChild(tab.document.createTextNode("Evidence Rating"));
    let th2 = tab.document.createElement("th");
    th2.appendChild(tab.document.createTextNode("Effect"));
    let th3 = tab.document.createElement("th");
    th3.appendChild(tab.document.createTextNode("Efficacy"));
    let th4 = tab.document.createElement("th");
    th4.appendChild(tab.document.createTextNode("Consensus"));
    let th5 = tab.document.createElement("th");
    th5.appendChild(tab.document.createTextNode("Comments"));
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);

    let td1 = tab.document.createElement("td");
    td1.appendChild(tab.document.createTextNode("A"));
    let td2 = tab.document.createElement("td");
    td2.appendChild(tab.document.createTextNode("Power Output"));
    let td3 = tab.document.createElement("td");
    td3.appendChild(tab.document.createTextNode("3 Stars"));
    let td4 = tab.document.createElement("td");
    td4.appendChild(tab.document.createTextNode("80%"));
    td4.appendChild(tab.document.createElement("br"));
    td4.appendChild(tab.document.createTextNode("18 studies"));
    let td5 = tab.document.createElement("td");
    td5.appendChild(tab.document.createTextNode("Lorem ipsum dolor sit amet."));
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);

    let td6 = tab.document.createElement("td");
    td6.appendChild(tab.document.createTextNode("B"));
    let td7 = tab.document.createElement("td");
    td7.appendChild(tab.document.createTextNode("Weight"));
    let td8 = tab.document.createElement("td");
    td8.appendChild(tab.document.createTextNode("4 Stars"));
    let td9 = tab.document.createElement("td");
    td9.appendChild(tab.document.createTextNode("100%"));
    td9.appendChild(tab.document.createElement("br"));
    td9.appendChild(tab.document.createTextNode("65 studies"));
    let td10 = tab.document.createElement("td");
    td10.appendChild(tab.document.createTextNode("Lorem ipsum."));
    tr3.appendChild(td6);
    tr3.appendChild(td7);
    tr3.appendChild(td8);
    tr3.appendChild(td9);
    tr3.appendChild(td10);

    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    
    tab.document.body.appendChild(table);

}

createTable();

//Exercise 7
//в конзолата на отворената от 6 страница
var button = document.createElement("button");
var functionality = document.createAttribute("onclick");
functionality.value = "swap()";
button.setAttributeNode(functionality);
document.body.appendChild(button);

function swap() {
    document.getElementsByTagName("table")[0].insertBefore(document.getElementsByTagName("tr")[2], document.getElementsByTagName("tr")[1]);
}
