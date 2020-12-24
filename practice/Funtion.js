function check(form){
    if(form.userid.value =="skh0818" && form.userpassword.value =="tjrkdgnl0818"){
        window.open("Home.html")
    }
    else{
        alert('아이디나 패스워드가 일치하지 않습니다.')
    }
}


function tableSetting(){
    var tableBody = document.getElementById('table-body')

    var row = '<tr>' + 
    '<td>' + document.getElementById("roll").value + '</td>' +
    '<td>' + document.getElementById("name").value + '</td>' +
    '<td>' + document.getElementById("age").value + '</td>' +
    '<td>' + document.getElementById("gender").value + '</td>' +
    '<td>' + document.getElementById("address").value + '</td>' +"</tr>"

    tableBody.innerHTML += row
}


function getApi(){
    $.ajax({
        type:"GET",
        url:"http://dev.jeoksyeo.com/v1/alcohols?f=WI&c=20&p=1",
        beforeSend:(xhr)=>{
            xhr.setRequestHeader("X-Request-ID","575e23b6-6509-4374-9af8-e6c6d524c338")
            
        },
        success:(obj)=>{alert("성공"+obj)},
        error:(log)=>{alert("실패 "+log)}
    })
}