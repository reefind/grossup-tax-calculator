// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get all relevant elements
    const uangMasukRekeningInput = document.getElementById('uangMasukRekening');
    const tarifPPNSelect = document.getElementById('tarifPPN');
    const hitungPPNButton = document.getElementById('hitungPPNButton');

    // New PPN applicable checkbox
    const ppnApplicableCheckbox = document.getElementById('ppnApplicable');

    const hargaJualSebelumPPNSpan = document.getElementById('hargaJualSebelumPPN');
    const besarPPNSpan = document.getElementById('besarPPN');

    // PPh 21 elements
    const pph21ApplicableCheckbox = document.getElementById('pph21Applicable');
    const tarifPPh21Select = document.getElementById('tarifPPh21');
    const dppPPh21Span = document.getElementById('dppPPh21');
    const besarPPh21Span = document.getElementById('besarPPh21');

    // PPh 23 elements
    const pph23ApplicableCheckbox = document.getElementById('pph23Applicable');
    const tarifPPh23Select = document.getElementById('tarifPPh23');
    const dppPPh23Span = document.getElementById('dppPPh23');
    const besarPPh23Span = document.getElementById('besarPPh23');

    // PPh 4(2) elements
    const pph42ApplicableCheckbox = document.getElementById('pph42Applicable');
    const tarifPPh42Select = document.getElementById('tarifPPh42');
    const dppPPh42Span = document.getElementById('dppPPh42');
    const besarPPh42Span = document.getElementById('besarPPh42');

    // Summary elements - Pastikan ID ini unik di HTML Anda
    const summaryHargaJualSpan = document.getElementById('summaryHargaJual');
    const summaryBesarPPNSpan = document.getElementById('summaryBesarPPN');
    const totalPPhDipotongSpan = document.getElementById('totalPPhDipotong');
    const uangDiterimaSpan = document.getElementById('uangDiterima');

    // Set initial value for Uang Masuk Rekening to 10,000,000 (plain number)
    uangMasukRekeningInput.value = 10000000;

    // Function to format number as Indonesian Rupiah (with currency symbol)
    const formatRupiah = (amount) => {
        // Ensure amount is a valid number before formatting
        if (isNaN(amount) || !isFinite(amount)) {
            return "Rp 0"; // Return a default value for invalid numbers
        }
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    // Function to clean and parse number from formatted string (still useful for internal calculations)
    const parseNumber = (formattedString) => {
        // Remove all non-digit characters (including dots for IDR thousands separator)
        // and replace comma with dot for decimal if needed (not for IDR in this case, but good practice)
        return parseFloat(formattedString.replace(/\./g, '').replace(/,/g, '.'));
    };

    // Main calculation function
    function calculateAll() {
        console.log("Calculating all...");
        // 1. Get Uang Masuk Rekening (Desired Net Amount to receive)
        // Parse the number from the raw input value (no real-time formatting to parse from)
        const uangMasukRekeningTarget = parseFloat(uangMasukRekeningInput.value) || 0;
        console.log("Uang Masuk Rekening Target:", uangMasukRekeningTarget);

        // Initialize PPN and PPh rates
        let ppnRateDecimal = 0;
        if (ppnApplicableCheckbox.checked) { // Check if PPN is applicable
            ppnRateDecimal = (parseFloat(tarifPPNSelect.value) || 0) / 100;
        }
        console.log("PPN Rate Decimal:", ppnRateDecimal);


        let pph21RateDecimal = 0;
        if (pph21ApplicableCheckbox.checked) {
            pph21RateDecimal = (parseFloat(tarifPPh21Select.value) || 0) / 100;
        }
        console.log("PPh21 Rate Decimal:", pph21RateDecimal);


        let pph23RateDecimal = 0;
        if (pph23ApplicableCheckbox.checked) {
            pph23RateDecimal = (parseFloat(tarifPPh23Select.value) || 0) / 100;
        }
        console.log("PPh23 Rate Decimal:", pph23RateDecimal);


        let pph42RateDecimal = 0;
        if (pph42ApplicableCheckbox.checked) {
            pph42RateDecimal = (parseFloat(tarifPPh42Select.value) || 0) / 100;
        }
        console.log("PPh42 Rate Decimal:", pph42RateDecimal);


        // Calculate total PPh deduction rate for the denominator
        const totalPPhDeductionRate = pph21RateDecimal + pph23RateDecimal + pph42RateDecimal;
        console.log("Total PPh Deduction Rate:", totalPPhDeductionRate);


        let hargaJualSebelumPPN = 0;
        let besarPPN = 0;
        let besarPPh21 = 0;
        let besarPPh23 = 0;
        let besarPPh42 = 0;
        let totalPPhDipotong = 0;
        let uangDiterimaFinal = 0;

        // Applying the requested formula for Harga Jual (as Harga Jual Sebelum PPN)
        // Formula: Harga Jual = Uang yang diharapkan masuk ke Rekening Bank / ( 1 + Tarif PPN - Tarif PPh 21 - Tarif PPh 23 - Tarif PPh 4(2))
        // Note: ppnRateDecimal will be 0 if ppnApplicableCheckbox is not checked
        const denominator = 1 + ppnRateDecimal - totalPPhDeductionRate;
        console.log("Denominator:", denominator);


        if (denominator !== 0) {
            hargaJualSebelumPPN = uangMasukRekeningTarget / denominator;
            // Round hargaJualSebelumPPN to nearest integer to avoid floating point issues
            hargaJualSebelumPPN = Math.round(hargaJualSebelumPPN);
        } else {
            // Handle cases where the denominator is zero, which would lead to Infinity or NaN
            hargaJualSebelumPPN = 0; // Set to 0 to avoid invalid numbers
            console.error("Denominator is zero (1 + PPN - Total PPh). Cannot calculate Harga Jual with the given rates.");
        }
        console.log("Harga Jual Sebelum PPN:", hargaJualSebelumPPN);


        // Calculate PPN based on the determined 'Harga Jual Sebelum PPN'
        // This will be 0 if ppnApplicableCheckbox is not checked because ppnRateDecimal would be 0
        besarPPN = hargaJualSebelumPPN * ppnRateDecimal;
        besarPPN = Math.round(besarPPN); // Round PPN as well
        console.log("Besar PPN:", besarPPN);


        // Calculate individual PPh amounts based on 'Harga Jual Sebelum PPN'
        if (pph21ApplicableCheckbox.checked) {
            besarPPh21 = hargaJualSebelumPPN * pph21RateDecimal;
            besarPPh21 = Math.round(besarPPh21); // Round PPh values
        }
        console.log("Besar PPh21:", besarPPh21);

        if (pph23ApplicableCheckbox.checked) {
            besarPPh23 = hargaJualSebelumPPN * pph23RateDecimal;
            besarPPh23 = Math.round(besarPPh23); // Round PPh values
        }
        console.log("Besar PPh23:", besarPPh23);

        if (pph42ApplicableCheckbox.checked) {
            besarPPh42 = hargaJualSebelumPPN * pph42RateDecimal;
            besarPPh42 = Math.round(besarPPh42); // Round PPh values
        }
        console.log("Besar PPh42:", besarPPh42);


        // Calculate total PPh deducted
        totalPPhDipotong = besarPPh21 + besarPPh23 + besarPPh42;
        console.log("Total PPh Dipotong:", totalPPhDipotong);


        // Calculate final amount received using the requested formula
        // Formula: uangDiterimaFinal = hargaJualSebelumPPN + besarPPN - totalPPhDipotong
        uangDiterimaFinal = hargaJualSebelumPPN + besarPPN - totalPPhDipotong;
        // Round the final received amount to ensure consistency
        uangDiterimaFinal = Math.round(uangDiterimaFinal);
        console.log("Uang Diterima Final:", uangDiterimaFinal);


        // Update PPN section results
        hargaJualSebelumPPNSpan.textContent = formatRupiah(hargaJualSebelumPPN);
        besarPPNSpan.textContent = formatRupiah(besarPPN);

        // Update PPh 21 results
        dppPPh21Span.textContent = formatRupiah(hargaJualSebelumPPN);
        besarPPh21Span.textContent = formatRupiah(besarPPh21);

        // Update PPh 23 results
        dppPPh23Span.textContent = formatRupiah(hargaJualSebelumPPN);
        besarPPh23Span.textContent = formatRupiah(besarPPh23);

        // Update PPh 4(2) results
        dppPPh42Span.textContent = formatRupiah(hargaJualSebelumPPN);
        besarPPh42Span.textContent = formatRupiah(besarPPh42);

        // Update Summary elements
        summaryHargaJualSpan.textContent = formatRupiah(hargaJualSebelumPPN);
        summaryBesarPPNSpan.textContent = formatRupiah(besarPPN);
        totalPPhDipotongSpan.textContent = formatRupiah(totalPPhDipotong);
        uangDiterimaSpan.textContent = formatRupiah(uangDiterimaFinal);
    }

    // Removed the complex input formatting listener for uangMasukRekeningInput
    // The input will now behave like a standard number input (or text if you set type="text" in HTML)
    // and you can type numbers directly. The display of results will still be formatted.
    uangMasukRekeningInput.addEventListener('input', calculateAll); // Only trigger calculation on input

    // Add other event listeners
    tarifPPNSelect.addEventListener('change', calculateAll);
    hitungPPNButton.addEventListener('click', calculateAll);

    ppnApplicableCheckbox.addEventListener('change', calculateAll);
    pph21ApplicableCheckbox.addEventListener('change', calculateAll);
    tarifPPh21Select.addEventListener('change', calculateAll);

    pph23ApplicableCheckbox.addEventListener('change', calculateAll);
    tarifPPh23Select.addEventListener('change', calculateAll);

    pph42ApplicableCheckbox.addEventListener('change', calculateAll);
    tarifPPh42Select.addEventListener('change', calculateAll);

    // Initial calculation on page load
    calculateAll();
});
