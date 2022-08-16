  const xhr = new XMLHttpRequest();

  const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-16`

  xhr.open('GET', url)

  xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
          const response = JSON.parse(xhr.responseText)
          console.log(response)

          let template = ''
          for(let i=0; i < 10; i++) {
              template += `
              <div class="container text-center" style="border: 3px solid black;margin-top: 2em;">
              <div class="row">
                <div class="col -sm-1">
                  Id : ${response[i].id}
                </div>
                <div class="col -sm-4">
                  Name : ${response[i].name}
                </div>
                <div class="col -sm-4">
                  UserName : ${response[i].username}
                </div>
                <div class="col">
                  Email : ${response[i].email}
                </div>
              </div>
              <div class="row">
                <div class="col -sm-1">
                  <b>Address:</b>
                </div>
                <div class="col -sm-3">
                  Street : ${response[i].address.street}
                </div>
                <div class="col -sm-2">
                  Suite : ${response[i].address.suite}
                </div>
                <div class="col -sm-1">
                  City : ${response[i].address.city}
                </div>
                <div class="col -sm-1">
                  Zipcode : ${response[i].address.zipcode}
                </div>
                <div class="col -sm-1">
                  <b>Geo:</b>
                </div>
                <div class="col">
                  Latitude : ${response[i].address.geo.lat}
                </div>
                <div class="col">
                  Longitude : ${response[i].address.geo.lng}
                </div>
              </div>
              <div class="row">
                <div class="col col-sm-4">
                  Phone : ${response[i].phone}
                </div>
                <div class="col col-sm-8">
                  Website : ${response[i].website}
                </div>
              </div>
              <div class="row">
                <div class="col -sm-1">
                  <b>Company:</b>
                </div>
                <div class="col">
                  name : ${response[i].company.name}
                </div>
                <div class="col">
                  CatchPhrase : ${response[i].company.catchPhrase}
                </div>
                <div class="col">
                  bs : ${response[i].company.bs}
                </div>
              </div>
            </div>
              `
          }

          document.querySelector('#my-container').innerHTML = template
      }
  }

  xhr.send()
