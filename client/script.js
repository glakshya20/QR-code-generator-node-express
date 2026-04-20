document.getElementById('qr-form').addEventListener('submit', function (e) {
	e.preventDefault();

	const id = document.getElementById('qr-id').value;
	const price = document.getElementById('qr-price').value;

	fetch("https://qr-code-generator-r8kt.onrender.com/generate-qr", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id, price }) // ✅ FIXED
	})
		.then(response => response.json())
        .then(data => {
	const qrImage = document.createElement('img');
	qrImage.src = data.qr;

	const qrResultDiv = document.getElementById('qr-result');
	qrResultDiv.innerHTML = '';
	qrResultDiv.appendChild(qrImage);
})

			const qrResultDiv = document.getElementById('qr-result');
			qrResultDiv.innerHTML = '';
			qrResultDiv.appendChild(qrImage);
		})
		.catch(error => console.error('Error generating QR code:', error));
});
