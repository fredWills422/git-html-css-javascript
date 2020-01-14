class UserCommon {

 
    static display= (user) => {
        $("#pId").val(user.id);
        $("#pUserName").val(user.userName);
        $("#pPassword").val(user.password);
        $("#pFirstName").val(user.firstName);
        $("#pLastName").val(user.lastName);
        $("#pPhone").val(user.phone);
        $("#pEmail").val(user.email);
        $("#pAdmin").prop("checked", user.admin);
        $("#pReviewer").prop("checked", user.reviewer);
      }


    static save = () =>{
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
       return user;
    };
}