document.addEventListener('DOMContentLoaded', () => {
    // Data produk untuk setiap kategori
    // Pastikan nama file gambar di sini sama persis dengan nama file di folder Anda
    // (termasuk huruf besar/kecil dan ekstensi .png, .jpg, dll.)
    const allProducts = {
        dog: [
            { img: 'dogfood1.png', name: 'Dry Food Chicken', price: '$50', rating: '⭐ 4.8' },
            { img: 'dogfood2.png', name: 'Chicken & Cheese', price: '$60', rating: '⭐ 4.7' },
            { img: 'dogfood3.png', name: 'Salmon & Vegetables', price: '$45', rating: '⭐ 4.9' },
            { img: 'dogfood4.png', name: 'Chicken Crispy', price: '$55', rating: '⭐ 4.8' },
            { img: 'dogfood5.png', name: 'NutriMeal', price: '$60', rating: '⭐ 4.7' },
            { img: 'dogcollar.png', name: 'Dog Collar', price: '$15', rating: '⭐ 4.5' },
            { img: 'dogtoy.png', name: 'Chew Toy', price: '$10', rating: '⭐ 4.6' }
        ],
        cat: [
            { img: 'catfood1.png', name: 'Tuna Delight', price: '$40', rating: '⭐ 4.9' },
            { img: 'catfood2.png', name: 'Fish Medley', price: '$35', rating: '⭐ 4.7' },
            { img: 'cattoy.png', name: 'Laser Pointer', price: '$8', rating: '⭐ 4.2' },
            { img: 'catbed.png', name: 'Soft Cat Bed', price: '$25', rating: '⭐ 4.8' }
        ],
        rabbit: [
            { img: 'rabbitfood.png', name: 'Hay & Pellets', price: '$20', rating: '⭐ 4.6' },
            { img: 'rabbittoy.png', name: 'Rabbit Chews', price: '$7', rating: '⭐ 4.3' },
            { img: 'rabbithouse.png', name: 'Rabbit Hutch', price: '$70', rating: '⭐ 4.9' }
        ],
        bird: [
            { img: 'birdseed.png', name: 'Mixed Bird Seed', price: '$18', rating: '⭐ 4.5' },
            { img: 'birdcage.png', name: 'Bird Cage Medium', price: '$50', rating: '⭐ 4.7' },
            { img: 'birdperch.png', name: 'Wooden Perch', price: '$5', rating: '⭐ 4.1' }
        ],
        fish: [
            { img: 'fishfood.png', name: 'Flake Food', price: '$12', rating: '⭐ 4.4' },
            { img: 'fishtank.png', name: 'Small Fish Tank', price: '$80', rating: '⭐ 4.8' },
            { img: 'fishdecor.png', name: 'Aquarium Decor', price: '$10', rating: '⭐ 4.0' }
        ]
    };

    const productContainer = document.getElementById('productContainer');
    const categories = document.querySelectorAll('.category');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Fungsi untuk menampilkan produk berdasarkan kategori
    function displayProducts(category) {
        productContainer.innerHTML = ''; // Kosongkan container produk yang ada
        const productsToShow = allProducts[category] || []; // Ambil produk sesuai kategori

        productsToShow.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product', 'bg-white', 'p-4', 'rounded-xl', 'w-[150px]', 'shadow', 'flex-shrink-0');
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}" class="w-full mb-2">
                <h3 class="text-base my-2">${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.rating}</p>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    // Event listener untuk klik pada setiap kategori
    categories.forEach(categoryDiv => {
        categoryDiv.addEventListener('click', () => {
            // Hapus border aktif dari semua kategori
            categories.forEach(c => c.classList.remove('border-2', 'border-[#f44336]'));
            // Tambahkan border aktif ke kategori yang diklik
            categoryDiv.classList.add('border-2', 'border-[#f44336]');

            const selectedCategory = categoryDiv.dataset.category; // Ambil nilai dari data-category
            displayProducts(selectedCategory); // Tampilkan produk kategori yang dipilih
        });
    });

    // Fungsionalitas geser carousel untuk tombol sebelumnya
    prevBtn.addEventListener('click', () => {
        productContainer.scrollBy({
            left: -166, // Lebar produk (150px) + gap (16px)
            behavior: 'smooth' // Efek geser yang halus
        });
    });

    // Fungsionalitas geser carousel untuk tombol selanjutnya
    nextBtn.addEventListener('click', () => {
        productContainer.scrollBy({
            left: 166, // Lebar produk (150px) + gap (16px)
            behavior: 'smooth' // Efek geser yang halus
        });
    });

    // Secara default, tampilkan produk untuk kategori 'Dog' saat halaman pertama kali dimuat
    const defaultCategory = document.querySelector('.category[data-category="dog"]');
    if (defaultCategory) {
        defaultCategory.click(); // Simulasikan klik pada kategori 'Dog'
    }
});