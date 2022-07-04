// Api for Searching Indian Pincode Details
// 
document.getElementById('validatebtn').addEventListener('click', ()=>{
	var template = "";
	let temppincode = document.getElementById('pincode').value
	let inputer = document.getElementById('inputer');
	let ValidateBtn = document.getElementById('validatebtn');
	let loading = document.getElementById('loading');
	let resultMsg = document.getElementById('Massage');
	let Reloadbtn = document.getElementById('Reloadbtn');

	inputer.style.display = 'none'
	ValidateBtn.style.display = 'none'
	loading.style.display = 'block'
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'Content-Type': 'application/json',
			'X-RapidAPI-Host': 'pincode.p.rapidapi.com',
			'X-RapidAPI-Key': 'aefb3fa51fmsha59d973a9f83424p149b2bjsn70bd6dd35de3'
		},
		body: '{"searchBy":"pincode","value":'+temppincode+'}'
	};
	fetch('https://pincode.p.rapidapi.com/', options)
		.then(response => response.json())
		.then(response => response.forEach(element => {
			console.log(element);
			template += `<div class="jumbotron jumbotron-fluid centre">
			<div class="container">
			  <h1 class="display-4">${element.office} Post office Details</h1>
			  <p class="lead">
				<table>
				  <tr>
					<th>Prifix</th>
					<th>Details</th>
				  </tr>
				  <tr>
					<td>Pincode</td>
					<td>${element.pin}</td>
				  </tr>
				  <tr>
					<td>Office</td>
					<td>${element.office}}</td>
				  </tr>
				  <tr>
					<td>Office-type</td>
					<td>${element.office_type}</td>
				  </tr>
				  <tr>
				  <td>Delivery</td>
				  <td>${element.delivery}</td>
				</tr>
				  <tr>
					<td>Division</td>
					<td>${element.division}</td>
				  </tr>
				  <tr>
					<td>Region</td>
					<td>${element.region}</td>
				  </tr>
				  <tr>
					<td>Circle</td>
					<td>${element.circle}</td>
				  </tr>
				  <tr>
					<td>Taluk</td>
					<td>${element.taluk}</td>
				  </tr>
				  <tr>
					<td>District</td>
					<td>${element.district}</td>
				  </tr>
				  <tr>
					<td>State ID</td>
					<td>${element.state_id}</td>
				  </tr>
				  <tr>
					<td>Phone Number</td>
					<td>${element.phone}</td>
				  </tr>
				  <tr>
					<td>Related Sub-office</td>
					<td>${element.related_suboffice}</td>
				  </tr>
				  <tr>
					<td>Related Head-office</td>
					<td>${element.related_headoffice}</td>
				  </tr>
				</table>
			  </p>
			</div>
			</div>`
			loading.style.display = 'none'
			resultMsg.style.color = 'green'
			resultMsg.innerText = 'Successfully Get All Results'
			Reloadbtn.style.display = 'block'
			// document.getElementById('afterresult').style.display = 'block'
			document.getElementById('resultTable').innerHTML = template;
		}));
		})
		.catch(err => {
			loading.style.display = 'none'
			resultMsg.style.color = 'red'
			resultMsg.innerText = 'Unknown Error Recieved from Server'
			Reloadbtn.style.display = 'block'
		});