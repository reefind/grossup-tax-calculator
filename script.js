// Fungsi utilitas untuk memformat angka ke rupiah
function formatRupiah(angka) {
    if (isNaN(angka) || !isFinite(angka)) {
        return 'Rp 0'; // Mengembalikan Rp 0 jika angka tidak valid
    }
    const fixedAngka = Math.round(angka); // Bulatkan angka untuk menghindari desimal yang tidak perlu di rupiah

    let rupiah = '';
    const angkarev = fixedAngka.toString().split('').reverse().join('');
    for (let i = 0; i < angkarev.length; i++) {
        if (i % 3 === 0) {
            rupiah += angkarev.substr(i, 3) + '.';
        }
    }
    // Hapus titik di akhir jika ada, dan kembalikan format yang benar
    return 'Rp ' + rupiah.split('', rupiah.length - 1).reverse().join('');
}

// Fungsi untuk membersihkan input (menghapus format rupiah, titik, dan koma)
function cleanInput(inputString) {
    if (typeof inputString !== 'string') {
        return inputString; // Kembalikan langsung jika bukan string (misal sudah number)
    }
    // Hapus semua karakter non-digit kecuali tanda minus di awal
    const cleaned = inputString.replace(/[^0-9-]/g, '');
    return parseFloat(cleaned) || 0; // Konversi ke float, kembalikan 0 jika NaN
}

// =========================================================
// Logika Perhitungan untuk Kalkulator Net (Kolom 1)
// =========================================================
function calculateNet(inputAmount, columnSuffix) {
    const ppnApplicable = document.getElementById(`ppnApplicable_${columnSuffix}`).checked;
    const tarifPPN_raw = ppnApplicable ? parseFloat(document.getElementById(`tarifPPN_${columnSuffix}`).value) : 0;
    const tarifPPN_decimal = tarifPPN_raw / 100;

    const pph21Applicable = document.getElementById(`pph21Applicable_${columnSuffix}`).checked;
    const tarifPPh21_raw = pph21Applicable ? parseFloat(document.getElementById(`tarifPPh21_${columnSuffix}`).value) : 0;
    const tarifPPh21_decimal = tarifPPh21_raw / 100;

    const pph23Applicable = document.getElementById(`pph23Applicable_${columnSuffix}`).checked;
    const tarifPPh23_raw = pph23Applicable ? parseFloat(document.getElementById(`tarifPPh23_${columnSuffix}`).value) : 0;
    const tarifPPh23_decimal = tarifPPh23_raw / 100;

    const pph42Applicable = document.getElementById(`pph42Applicable_${columnSuffix}`).checked;
    const tarifPPh42_raw = pph42Applicable ? parseFloat(document.getElementById(`tarifPPh42_${columnSuffix}`).value) : 0;
    const tarifPPh42_decimal = tarifPPh42_raw / 100;

    let hargaJualSebelumPPN = 0;
    let besarPPN = 0;
    let totalPPhDipotong = 0;
    let dppPPh21 = 0;
    let besarPPh21 = 0;
    let dppPPh23 = 0;
    let besarPPh23 = 0;
    let dppPPh42 = 0;
    let besarPPh42 = 0;
    let uangDiterimaFinal = 0;

    if (inputAmount === 0) {
        // Reset tampilan jika input 0
        document.getElementById(`hargaJualSebelumPPN_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`besarPPN_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`dppPPh21_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`besarPPh21_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`dppPPh23_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`besarPPh23_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`dppPPh42_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`besarPPh42_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`summaryHargaJual_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`summaryBesarPPN_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`totalPPhDipotong_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`uangDiterima_${columnSuffix}`).textContent = formatRupiah(0);
        
        return {
            hargaJual: 0,
            besarPPN: 0,
            totalPPhDipotong: 0,
            uangDiterima: 0
        };
    }

    const totalEffectiveTaxRate = tarifPPN_decimal - tarifPPh21_decimal - tarifPPh23_decimal - tarifPPh42_decimal;
    const denominator = 1 + totalEffectiveTaxRate;
    
    if (denominator === 0) {
        hargaJualSebelumPPN = Infinity; 
    } else {
        hargaJualSebelumPPN = inputAmount / denominator;
    }
    if (isNaN(hargaJualSebelumPPN) || !isFinite(hargaJualSebelumPPN)) hargaJualSebelumPPN = 0;

    besarPPN = hargaJualSebelumPPN * tarifPPN_decimal;

    if (pph21Applicable) {
        dppPPh21 = hargaJualSebelumPPN;
        if (tarifPPh21_raw === 2.5) { 
            dppPPh21 = hargaJualSebelumPPN * 0.5; 
            besarPPh21 = dppPPh21 * (5 / 100); 
        } else { 
            besarPPh21 = dppPPh21 * tarifPPh21_decimal; 
        }
    }
    if (pph23Applicable) {
        dppPPh23 = hargaJualSebelumPPN;
        besarPPh23 = dppPPh23 * tarifPPh23_decimal;
    }
    if (pph42Applicable) {
        dppPPh42 = hargaJualSebelumPPN;
        besarPPh42 = dppPPh42 * tarifPPh42_decimal;
    }

    totalPPhDipotong = besarPPh21 + besarPPh23 + besarPPh42;

    uangDiterimaFinal = hargaJualSebelumPPN + besarPPN - totalPPhDipotong;

    // Update UI
    document.getElementById(`hargaJualSebelumPPN_${columnSuffix}`).textContent = formatRupiah(hargaJualSebelumPPN);
    document.getElementById(`besarPPN_${columnSuffix}`).textContent = formatRupiah(besarPPN);
    document.getElementById(`dppPPh21_${columnSuffix}`).textContent = formatRupiah(dppPPh21);
    document.getElementById(`besarPPh21_${columnSuffix}`).textContent = formatRupiah(besarPPh21);
    document.getElementById(`dppPPh23_${columnSuffix}`).textContent = formatRupiah(dppPPh23);
    document.getElementById(`besarPPh23_${columnSuffix}`).textContent = formatRupiah(besarPPh23);
    document.getElementById(`dppPPh42_${columnSuffix}`).textContent = formatRupiah(dppPPh42);
    document.getElementById(`besarPPh42_${columnSuffix}`).textContent = formatRupiah(besarPPh42);

    document.getElementById(`summaryHargaJual_${columnSuffix}`).textContent = formatRupiah(hargaJualSebelumPPN);
    document.getElementById(`summaryBesarPPN_${columnSuffix}`).textContent = formatRupiah(besarPPN);
    document.getElementById(`totalPPhDipotong_${columnSuffix}`).textContent = formatRupiah(totalPPhDipotong);
    document.getElementById(`uangDiterima_${columnSuffix}`).textContent = formatRupiah(uangDiterimaFinal);

    return {
        hargaJual: hargaJualSebelumPPN,
        besarPPN: besarPPN,
        totalPPhDipotong: totalPPhDipotong,
        uangDiterima: uangDiterimaFinal
    };
}

// =========================================================
// Logika Perhitungan untuk Kalkulator Gross (Kolom 2)
// =========================================================
function calculateGross(inputHargaJual, columnSuffix) {
    const ppnApplicable = document.getElementById(`ppnApplicable_${columnSuffix}`).checked;
    const tarifPPN_raw = ppnApplicable ? parseFloat(document.getElementById(`tarifPPN_${columnSuffix}`).value) : 0;
    const tarifPPN_decimal = tarifPPN_raw / 100;

    const pph21Applicable = document.getElementById(`pph21Applicable_${columnSuffix}`).checked;
    const tarifPPh21_raw = pph21Applicable ? parseFloat(document.getElementById(`tarifPPh21_${columnSuffix}`).value) : 0;
    const tarifPPh21_decimal = tarifPPh21_raw / 100;

    const pph23Applicable = document.getElementById(`pph23Applicable_${columnSuffix}`).checked;
    const tarifPPh23_raw = pph23Applicable ? parseFloat(document.getElementById(`tarifPPh23_${columnSuffix}`).value) : 0;
    const tarifPPh23_decimal = tarifPPh23_raw / 100;

    const pph42Applicable = document.getElementById(`pph42Applicable_${columnSuffix}`).checked;
    const tarifPPh42_raw = pph42Applicable ? parseFloat(document.getElementById(`tarifPPh42_${columnSuffix}`).value) : 0;
    const tarifPPh42_decimal = tarifPPh42_raw / 100;

    let hargaJual = inputHargaJual;
    let besarPPN = 0;
    let totalPPhDipotong = 0;
    let dppPPh21 = 0;
    let besarPPh21 = 0;
    let dppPPh23 = 0;
    let besarPPh23 = 0;
    let dppPPh42 = 0;
    let besarPPh42 = 0;
    let uangDiterima = 0;

    if (hargaJual === 0) {
        // Reset tampilan jika input 0
        document.getElementById(`hargaJualSebelumPPN_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`besarPPN_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`dppPPh21_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`besarPPh21_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`dppPPh23_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`besarPPh23_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`dppPPh42_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`besarPPh42_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`summaryHargaJual_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`summaryBesarPPN_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`totalPPhDipotong_${columnSuffix}`).textContent = formatRupiah(0);
        document.getElementById(`uangDiterima_${columnSuffix}`).textContent = formatRupiah(0);
        return {
            hargaJual: 0,
            besarPPN: 0,
            totalPPhDipotong: 0,
            uangDiterima: 0
        };
    }

    besarPPN = hargaJual * tarifPPN_decimal;

    if (pph21Applicable) {
        dppPPh21 = hargaJual;
        if (tarifPPh21_raw === 2.5) { 
            dppPPh21 = hargaJual * 0.5; 
            besarPPh21 = dppPPh21 * (5 / 100); 
        } else { 
            besarPPh21 = dppPPh21 * tarifPPh21_decimal; 
        }
    }

    if (pph23Applicable) {
        dppPPh23 = hargaJual;
        besarPPh23 = dppPPh23 * tarifPPh23_decimal;
    }

    if (pph42Applicable) {
        dppPPh42 = hargaJual;
        besarPPh42 = dppPPh42 * tarifPPh42_decimal;
    }

    totalPPhDipotong = besarPPh21 + besarPPh23 + besarPPh42;

    uangDiterima = hargaJual + besarPPN - totalPPhDipotong;

    // Update UI Kolom 2
    document.getElementById(`hargaJualSebelumPPN_${columnSuffix}`).textContent = formatRupiah(hargaJual);
    document.getElementById(`besarPPN_${columnSuffix}`).textContent = formatRupiah(besarPPN);
    document.getElementById(`dppPPh21_${columnSuffix}`).textContent = formatRupiah(dppPPh21);
    document.getElementById(`besarPPh21_${columnSuffix}`).textContent = formatRupiah(besarPPh21);
    document.getElementById(`dppPPh23_${columnSuffix}`).textContent = formatRupiah(dppPPh23);
    document.getElementById(`besarPPh23_${columnSuffix}`).textContent = formatRupiah(besarPPh23);
    document.getElementById(`dppPPh42_${columnSuffix}`).textContent = formatRupiah(dppPPh42);
    document.getElementById(`besarPPh42_${columnSuffix}`).textContent = formatRupiah(besarPPh42);

    document.getElementById(`summaryHargaJual_${columnSuffix}`).textContent = formatRupiah(hargaJual);
    document.getElementById(`summaryBesarPPN_${columnSuffix}`).textContent = formatRupiah(besarPPN);
    document.getElementById(`totalPPhDipotong_${columnSuffix}`).textContent = formatRupiah(totalPPhDipotong);
    document.getElementById(`uangDiterima_${columnSuffix}`).textContent = formatRupiah(uangDiterima);

    return {
        hargaJual: hargaJual,
        besarPPN: besarPPN,
        totalPPhDipotong: totalPPhDipotong,
        uangDiterima: uangDiterima
    };
}

// =========================================================
// Fungsi Wrapper untuk Kolom 1
// =========================================================
function hitungPajakKolom1() {
    const uangMasukRekening = cleanInput(document.getElementById('uangMasukRekening_col1') ? document.getElementById('uangMasukRekening_col1').value : 0);
    calculateNet(uangMasukRekening, 'col1');
}

// =========================================================
// Fungsi Wrapper untuk Kolom 2
// =========================================================
function hitungPajakKolom2() {
    const hargaJualInput = cleanInput(document.getElementById('hargaJual_col2') ? document.getElementById('hargaJual_col2').value : 0);
    calculateGross(hargaJualInput, 'col2');
}

// =========================================================
// Logika untuk Kolom 3: Selisih
// =========================================================
function hitungSelisih() {
    // Ambil nilai dari ringkasan Kolom 1
    const hargaJual_col1 = cleanInput(document.getElementById('summaryHargaJual_col1').textContent);
    const besarPPN_col1 = cleanInput(document.getElementById('summaryBesarPPN_col1').textContent);
    const totalPPhDipotong_col1 = cleanInput(document.getElementById('totalPPhDipotong_col1').textContent);
    const uangDiterima_col1 = cleanInput(document.getElementById('uangDiterima_col1').textContent);

    // Ambil nilai dari ringkasan Kolom 2
    const hargaJual_col2 = cleanInput(document.getElementById('summaryHargaJual_col2').textContent);
    const besarPPN_col2 = cleanInput(document.getElementById('summaryBesarPPN_col2').textContent);
    const totalPPhDipotong_col2 = cleanInput(document.getElementById('totalPPhDipotong_col2').textContent);
    const uangDiterima_col2 = cleanInput(document.getElementById('uangDiterima_col2').textContent);

    // Hitung selisih
    const diffHargaJual = hargaJual_col1 - hargaJual_col2;
    const diffBesarPPN = besarPPN_col1 - besarPPN_col2;
    const diffTotalPPH = totalPPhDipotong_col1 - totalPPhDipotong_col2;
    const diffUangDiterima = uangDiterima_col1 - uangDiterima_col2;

    // Update UI Kolom 3
    document.getElementById('diffHargaJual').textContent = formatRupiah(diffHargaJual);
    document.getElementById('diffBesarPPN').textContent = formatRupiah(diffBesarPPN);
    document.getElementById('diffTotalPPH').textContent = formatRupiah(diffTotalPPH);
    document.getElementById('diffUangDiterima').textContent = formatRupiah(diffUangDiterima);
}

// =========================================================
// Event Listeners
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk attach event listeners ke input/select dalam kolom tertentu
    function attachColumnListeners(columnSuffix, inputId, calculateFunction) {
        // Event listener untuk input utama
        const mainInput = document.getElementById(inputId);
        if (mainInput) {
            mainInput.addEventListener('input', () => {
                calculateFunction();
                hitungSelisih();
            });
        }
        
        // Daftar checkbox PPh untuk mutual exclusivity
        const pphCheckboxes = [
            document.getElementById(`pph21Applicable_${columnSuffix}`),
            document.getElementById(`pph23Applicable_${columnSuffix}`),
            document.getElementById(`pph42Applicable_${columnSuffix}`)
        ].filter(Boolean); // Filter out any nulls if an ID doesn't exist

        pphCheckboxes.forEach(checkbox => {
            if (checkbox) {
                // Set default to unchecked for PPh checkboxes on load (jika diinginkan)
                // checkbox.checked = false; 

                checkbox.addEventListener('change', function() {
                    // Jika checkbox PPh ini dicentang, batalkan centang semua checkbox PPh lainnya di kolom yang sama
                    if (this.checked) {
                        pphCheckboxes.forEach(otherCheckbox => {
                            if (otherCheckbox && otherCheckbox !== this) {
                                otherCheckbox.checked = false;
                            }
                        });
                    }
                    calculateFunction(); 
                    hitungSelisih();     
                });
            }
        });

        // Event listener untuk checkbox PPN (tidak termasuk dalam mutual exclusivity PPh)
        const ppnCheckbox = document.getElementById(`ppnApplicable_${columnSuffix}`);
        if(ppnCheckbox) {
            ppnCheckbox.addEventListener('change', () => {
                calculateFunction();
                hitungSelisih();
            });
        }
        
        // Event listeners untuk dropdown tarif pajak
        const tarifSelects = [
            document.getElementById(`tarifPPN_${columnSuffix}`),
            document.getElementById(`tarifPPh21_${columnSuffix}`),
            document.getElementById(`tarifPPh23_${columnSuffix}`),
            document.getElementById(`tarifPPh42_${columnSuffix}`)
        ];

        tarifSelects.forEach(select => {
            if (select) {
                select.addEventListener('change', () => {
                    calculateFunction();
                    hitungSelisih();
                });
            }
        });

        // Event listener untuk tombol hitung (jika ada)
        const hitungButton = document.getElementById(`hitungButton_${columnSuffix}`);
        if (hitungButton) {
            hitungButton.addEventListener('click', () => {
                calculateFunction();
                hitungSelisih();
            });
        }
    }

    // Attach listeners untuk Kolom 1 (Kalkulator Net)
    attachColumnListeners('col1', 'uangMasukRekening_col1', hitungPajakKolom1);
    
    // Attach listeners untuk Kolom 2 (Kalkulator Gross)
    attachColumnListeners('col2', 'hargaJual_col2', hitungPajakKolom2);

    // --- Sinkronisasi Checkbox Applicable Antar Kolom ---
    const checkboxPairs = [
        { id1: 'ppnApplicable_col1', id2: 'ppnApplicable_col2' },
        { id1: 'pph21Applicable_col1', id2: 'pph21Applicable_col2' },
        { id1: 'pph23Applicable_col1', id2: 'pph23Applicable_col2' },
        { id1: 'pph42Applicable_col1', id2: 'pph42Applicable_col2' }
    ];

    checkboxPairs.forEach(pair => {
        const checkbox1 = document.getElementById(pair.id1);
        const checkbox2 = document.getElementById(pair.id2);

        if (checkbox1 && checkbox2) {
            const syncCheckboxes = (sourceCheckbox, targetCheckbox) => {
                targetCheckbox.checked = sourceCheckbox.checked;
                hitungPajakKolom1();
                hitungPajakKolom2();
                hitungSelisih();
            };

            checkbox1.addEventListener('change', () => syncCheckboxes(checkbox1, checkbox2));
            checkbox2.addEventListener('change', () => syncCheckboxes(checkbox2, checkbox1));
        }
    });

    // --- Sinkronisasi Input Utama Antar Kolom ---
    const inputCol1 = document.getElementById('uangMasukRekening_col1'); 
    const inputCol2 = document.getElementById('hargaJual_col2');       

    if (inputCol1 && inputCol2) { 
        const syncInputs = (sourceInput, targetInput) => {
            const value = sourceInput.value;
            if (targetInput.value !== value) {
                targetInput.value = value;
            }
            hitungPajakKolom1();
            hitungPajakKolom2();
            hitungSelisih();
        };

        inputCol1.addEventListener('input', () => syncInputs(inputCol1, inputCol2));
        inputCol2.addEventListener('input', () => syncInputs(inputCol2, inputCol1));
    }

    // Panggil perhitungan awal saat halaman dimuat
    hitungPajakKolom1();
    hitungPajakKolom2();
    hitungSelisih();
});