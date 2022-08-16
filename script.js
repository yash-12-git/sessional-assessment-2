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
                  <div class="info-box" style="width: 100%; margin: 1.2em;">
                  <h5>${response[i].id}</h5>
                      <p style="color: gray">Name : ${response[i].name}</p>
                      <p style="color: gray">UserName :${response[i].username}</p><p style="color: gray">${response[i].email}</p><p style="color: gray">Address - street :${response[i].address.street}</p>
                      <p style="color: gray">Suite :${response[i].address.suite}</p>
                      <p style="color: gray">City :${response[i].address.city}</p>
                      <p style="color: gray">Zipcode :${response[i].address.zipcode}</p>
                      <p style="color: gray">Geo - Latitude :${response[i].address.geo.lat}</p>
                      <p style="color: gray">Geo - Longitude :${response[i].address.geo.lng}</p>
                      <p style="color: gray">Phone :${response[i].phone}</p>
                      <p style="color: gray">Website :${response[i].website}</p>
                      <p style="color: gray">Company-Name :${response[i].company.name}</p>
                      <p style="color: gray">Company-CatchPhrase :${response[i].company.catchPhrase}</p>
                      <p style="color: gray">Company-Bs : ${response[i].company.bs}</p>

                      
                  </div>
              `
          }

          document.querySelector('#my-container').innerHTML = template
      }
  }

  xhr.send()
