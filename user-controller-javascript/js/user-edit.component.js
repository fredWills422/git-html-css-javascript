let user = null; 

$().ready(() => {

    let parms =getUrlParms();
    get(parms.id)
        .done((res) => {
            users = res.data;
            console.log(res);
            UserCommon.display(users);
        });

    $("#save").click(() =>{
        save();
    });
    
});

const save = () =>{
    let user = {};
    user.id= $("#pId").val();
    user.userName= $("#pUserName").val();
    user.password= $("#pPassword").val();
    user.firstName= $("#pFirstName").val();
    user.lastName= $("#pLastName").val();
    user.phone= $("#pPhone").val();
    user.email= $("#pEmail").val();
    user.admin= $("#pAdmin").prop("checked");
    user.reviewer= $("#pReviewer").prop("checked");
    change(user)
        .done((res) => {
            console.log("Change: ", res);
            window.location = "user-list.component.html";
        })
        .fail((err) => {
            console.error(res);
        });
};


// no longer needed because this block of code is in UserCommon class in user.common.js
// const display= (user) => {
//   $("#pId").val(user.id);
//   $("#pUserName").val(user.userName);
//   $("#pPassword").val(user.password);
//   $("#pFirstName").val(user.firstName);
//   $("#pLastName").val(user.lastName);
//   $("#pPhone").val(user.phone);
//   $("#pEmail").val(user.email);
//   $("#pAdmin").prop("checked", user.admin);
//   $("#pReviewer").prop("checked", user.reviewer);
// }

