// Inisialisasi Firebase dengan konfigurasi Anda
const firebaseConfig = {
    apiKey: "AIzaSyD_9Z_WF1S9Sp67hlI8tUyNVr_499cvW0Y",
    authDomain: "safebite-abd6c.firebaseapp.com",
    projectId: "safebite-abd6c",
    storageBucket: "safebite-abd6c.appspot.com",
    messagingSenderId: "748801823602",
    appId: "1:748801823602:web:d7bbc2ab72c188b817c3eb",
    measurementId: "G-SFCCRD39SF"
};
firebase.initializeApp(firebaseConfig);

// Dapatkan referensi Firestore
var db = firebase.firestore();

// Simpan data umur dan teks OCR ke Firestore
function saveData(age, text) {
    db.collection("data").add({
        age: age,
        text: text
    })
    .then(function(docRef) {
        console.log("Data berhasil disimpan dengan ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error menyimpan data: ", error);
    });
}

// Panggil fungsi saveData dengan nilai yang sesuai
saveData(25, "Hasil OCR pengguna");
