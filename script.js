function updateTotal() {
			var total = 0;
			var rows = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
			for (var i = 0; i < rows.length; i++) {
				var amount = parseInt(rows[i].getElementsByTagName('td')[3].innerText);
				total += amount;
			}
			document.getElementById('total').innerText = total;
		}

		updateTotal();