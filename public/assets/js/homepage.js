
/**
 * Get Mitra
 */
function getMitra() {
	$('.simple-cta').removeClass("d-none");

	axios.get(`${APIURL}/mitra/getmitra`)
	.then(res => {
		let elMitra = ''
		res.data.data.forEach(e => {
			elMitra += `<div class="col-12 col-sm-6 col-md-4 mb-5 h-100">
				<div class="card h-100" style="display:flex;flex-direction:column;justify-content:center;align-items:center;border:none;background-color: rgba(0,0,0,0);">
					<img src="${e.icon}" style="width:60%;"/>
				</div>
			</div>`;
		});

		$('#container-mitra').html(elMitra);
	})
	.catch(err => {
		$('.simple-cta').addClass("d-none");
	});
}
getMitra();

/* 
-------------- 
send kritik 
--------------
*/
$('#contact').on('submit', function(e) {
	e.preventDefault();
	
	if (doValidate()) {
		showLoadingSpinner();

		let form = new FormData(e.target);

		axios
		.post(`${APIURL}/nasabah/sendkritik`,form, {
			headers: {
				// header options 
			}
		})
		.then((response) => {
			hideLoadingSpinner();
			$('#contact-name').val('');
			$('#contact-email').val('');
			$('#contact-message').val('')

			setTimeout(() => {
				Swal.fire({
					icon : 'success',
					title : 'Success',
					text : 'Pesan Telah Terkirim',
					showConfirmButton: false, 
					timer: 2000
				});
			}, 500);
		})
		.catch((error) => {
			hideLoadingSpinner();

			// error server
			if (error.response.status == 500) {
				showAlert({
					message: `<strong>Ups . . .</strong> terjadi kesalahan pada server, coba sekali lagi`,
					autohide: true,
					type:'danger'
				})
			}
		})
	}
});
