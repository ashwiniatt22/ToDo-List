var itemArr = localStorage.getItem("itemArr") ? JSON.parse(localStorage.getItem("itemArr")) : [];

function postItem() {

    let input = document.getElementById('input').value;
    itemArr.push(input);

    localStorage.setItem("itemArr", JSON.stringify(itemArr))
    location.reload();

}
window.onload = function getList() {

    var ul = document.querySelector('.ul')
    for (var i = 0; i < itemArr.length; i++) {

        let elem = document.createElement('li');
        let btn2 = document.createElement('button');

        elem.style.display = 'flex'
        elem.style.justifyContent = 'space-between'
        elem.style.padding = '3px'
        elem.style.margin = '3px'
        elem.style.borderRadius = '5px'
        elem.style.border = '1px solid black'
        btn2.style.padding = '2px 10px'

        btn2.innerText = "delete";
        elem.innerText = itemArr[i]

        ul.appendChild(elem)
        elem.appendChild(btn2)

        btn2.addEventListener('click',
            function (e) {
                elem.remove();
                e.currentTarget.innerText = ""
                let itemId = itemArr.indexOf(e.currentTarget.parentNode.innerText)

                JSON.parse(localStorage.getItem(itemArr))
                itemArr.splice(itemId, 1);
                localStorage.setItem("itemArr", JSON.stringify(itemArr));
            })
    }
}

document.getElementById("btn").addEventListener("click",
    function () {
        let input = document.getElementById('input').value
        if (input != "") {
            postItem();
        };
        document.getElementById('input').value = "";

    })
