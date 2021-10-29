// SEND A POST OF APPOINTMENT, WITH THE INFORMATION OF #form.
$("#form").submit(async (error) => {
    error.preventDefault();
    let names2 = $("#name").val();
    let address2 = $("#address").val();
    let phone2 = $("#phone").val();
    let email2 = $("#email").val();
    let serviceSelect2 = $("#serviceSelect").val();
    let daySelect2 = $("#daySelect").val();
    // GENERATED A REQUEST WITH URL AND POST.
    const response = await fetch("http://localhost:8080/setAppointment", {
        method: "POST",
        body: JSON.stringify({
            names2,
            address2,
            phone2,
            email2,
            serviceSelect2,
            daySelect2,
        }),
    });
    $("#name").val("");
    $("#address").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#serviceSelect").val("");
    $("#daySelect").val("");
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