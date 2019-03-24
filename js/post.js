$('#postform').submit(function () {
    console.log("we gsdfood");
    post();
    return false;
});


function post() {
    var title = document.getElementById("fullname").value;
    var location = document.getElementById("location").value;
    var address = document.getElementById("address").value;
    var time = document.getElementById("time").value;
    var description = document.getElementById("description").value;

    console.log(description);

    firebase.database().ref('events/' + title).set({
        location: location,
        address: address,
        date: date,
        time: time,
        description: description

    }, function (error) {
        if (error) {
            alert(error);
        }
        else {
            alert("Your event has been posted.");
            window.location.replace("contact.html");
            update(title)
        }
    })
}

function update(title) {
    firebase.database().ref('events/' + title).once('title').then(snap => {
        $("eventTable").append(`
        <a  class="job-item d-block d-md-flex align-items-center  border-bottom fulltime">
        <div class="job-details h-100">
        <div class="p-3 align-self-center">
            <h3>${snap.data().title}</h3>
            <div class="d-block d-lg-flex">
            <div class="mr-3"><span class="icon-suitcase mr-1"></span>${snap.data().location}</div>
            <div class="mr-3"><span class="icon-room mr-1"></span> ${snap.data().address}</div>
            <div><span class="icon-watch mr-1"></span> ${snap.data().time}</div>
            </div>
        </div>
        </div>
        <div class="job-category align-self-center">
        <div class="p-3">
        </div>
        </div>  
        </a>
    `)
    });

}