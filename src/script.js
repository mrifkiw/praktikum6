var pilihan_kategory = ["Sosial", "Rumah", "Apartemen", "Industri", "Villa"];
let header_table = ["Jumlah", "Tarif (KwH)", "Abodomen", "Subtotal"];
let jenis_pelanggan = {
    "Sosial": {
        "abodemen": 10000,
        "tarif": 300,
        "pajak": 0
    }, "Rumah": {
        "abodemen": 30000,
        "tarif": 500,
        "pajak": 0.1
    }, "Apartemen": {
        "abodemen": 50000,
        "tarif": 750,
        "pajak": 0.15
    }, "Industri": {
        "abodemen": 75000,
        "tarif": 1000,
        "pajak": 0.2
    }, "Villa": {
        "abodemen": 100000,
        "tarif": 1250,
        "pajak": 0.25
    }
}




//select loop
pilihan_kategory.forEach(chooseCategory);

function chooseCategory(value, index, array) {
    var opt = document.createElement('option');
    opt.value = opt.innerHTML = value;
    document.getElementById('selectCategory').append(opt)
}

var form = document.getElementById("form_pelanggan")

form.addEventListener('submit', function (event) {
    event.preventDefault()
    var nama = document.getElementById("nama_pelanggan").value;
    var kategori = document.getElementById('selectCategory').value;
    var total_pemakaian = document.getElementById('jumlah_pemakaian').value;
    var jenisPelanggan = jenis_pelanggan[kategori];

    if (total_pemakaian ==="") {
        alert("fields jumlah pemakaian harus diisi");
    } else if (total_pemakaian > 30) {
        alert("Jumlah hari tidak valid");
    } else {
        var label = document.getElementById('label-table');
        let labelNama = '<tr><td>Nama Pelanggan</td>' + '<td>: ' + nama + '</td></tr>'
        let labelKategori = '<tr><td>Kategori</td>' + '<td>: ' + kategori + '</td></tr>'
        let labelJumlahPemakaian = '<tr><td>Kategori</td>' + '<td>: ' + total_pemakaian + '</td></tr>'
        label.innerHTML = labelNama + labelKategori + labelJumlahPemakaian;
        
        // //create table
        var tbody = document.getElementById('table_body');
        var thead = document.getElementById('table_header');
    
        //header
        for (let index = 0; index < header_table.length; index++) {
            thead.innerHTML += '<th>' + header_table[index] + '</th>';
        }
    
        for (let index = 0; index < total_pemakaian; index++) {
            tbody.innerHTML += '<tr><td>'+(index+1)+'</td>' + '<td>'+(jenisPelanggan.tarif*(index+1))+'</td>' + '<td>'+jenisPelanggan.abodemen+'</td>'+'<td>'+(jenisPelanggan.abodemen + (jenisPelanggan.tarif*(index+1)))+'</td></tr>'
        }
    }

    //Summary table
    var summary = document.getElementById('summary-table');
    let Subtotal = '<tr><td>Subtotal</td>' + '<td>: ' + (jenisPelanggan.abodemen*total_pemakaian) + '</td></tr>'
    let pajak = '<tr><td>Pajak</td>' + '<td>: ' + (jenisPelanggan.pajak*(jenisPelanggan.abodemen*total_pemakaian)) + '</td></tr>'
    let Bayar = '<tr><td>Total Pembayaran</td>' + '<td>: ' + ((jenisPelanggan.abodemen*total_pemakaian) + (jenisPelanggan.pajak*(jenisPelanggan.abodemen*total_pemakaian))) + '</td></tr>'
    summary.innerHTML = Subtotal + pajak + Bayar;
   
})


