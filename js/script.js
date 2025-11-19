// مثال تفاعل: زر يظهر رسالة عند الضغط
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".alert-button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("تم الضغط على الزر!");
        });
    });
});
