const airbnbRoomsUrl =
  "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"

async function getAirbnbRooms() {
  const result = fetch(airbnbRoomsUrl)
    .then(async (r) => await r.json())
    .catch((e) => "We couldn't get the airbnb rooms")

  setAirbnbRoomsInHtml(await result)
}

function setAirbnbRoomsInHtml(airbnbRooms) {
  const airbnbRoomsDiv = document.getElementById("airbnb-rooms")

  const airbnbCards = `
    <div class="row">
    ${airbnbRooms
      .map(
        (item) => `
        <div class="col-md-3">
            <div class="card mb-4 shadow-sm">
            <img src=${item.photo} class="room-img"/>
            <div class="card-body">
                <p class="card-text">${item.name}</p>
                <div class="d-flex justify-content-between align-items-center float">
                <h5>${item.property_type}</h5>
                <div class="badge badge-primary text-wrap ml-auto">
                    <h5 class="mb-0">R$${item.price}/noite</h5>
                </div>
                </div>
            </div>
            </div>
        </div>
        `
      )
      .join("")}
    </div>
  `
  airbnbRoomsDiv.innerHTML = airbnbCards
}
