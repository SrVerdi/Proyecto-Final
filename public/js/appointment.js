// SEND A POST OF APPOINTMENT, WITH THE INFORMATION OF #form.
$("#form").submit(async (error) => {
    error.preventDefault();
    let name = $("#name").val();
    let address = $("#address").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let serviceSelect = $("#serviceSelect").val();
    let daySelect = $("#daySelect").val();
    // GENERATED A REQUEST WITH URL AND POST.
    const response = await fetch("http://localhost:8080/setAppointment", {
        method: "POST",
        body: JSON.stringify({
            name,
            address,
            phone,
            email,
            serviceSelect,
            daySelect,
        }),
    });
    $("#name").val("");
    $("#address").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#serviceSelect").val("");
    $("#daySelect").val("");
    alert("Te contactaremos para confirmar la cita solicitada");
    location.reload();
});
// GENERATED A REQUEST GET WITH A URL AND CREATE OPTIONS WITH THE AVAILABLE DAY OF TABLE "days" .
async function getDaysWeeks() {
    const response = await fetch("http://localhost:8080/getDays");
    let data = await response.json();
    $("#daySelect").html(
        "<option disable selected></option>"
    );
    $.each(data, (i, table) => {
        $("#daySelect").append(
            `<option value="${table.day}">${table.day}</option>`
        );
    });
};
getDaysWeeks();