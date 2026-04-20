document.getElementById('qr-form').addEventListener('submit', function (e) {
	e.preventDefault();

	const id = document.getElementById('qr-id').value;
	const price = document.getElementById('qr-price').value;

	fetch("https://qr-code-generator-r8kt.onrender.com/generate-qr", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data: { id, price } }) // ✅ matches backend
	})
		.then(res => res.blob()) // ✅ matches backend response
		.then(blob => {
			const qrResultDiv = document.getElementById('qr-result');
			qrResultDiv.innerHTML = '';

			const img = document.createElement('img');
			img.src = URL.createObjectURL(blob);
			img.style.width = "200px";

			qrResultDiv.appendChild(img);
		})
		.catch(err => console.error("Error:", err));
});
