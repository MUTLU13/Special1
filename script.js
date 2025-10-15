// ===============================================
// YENİ FONKSİYON: GALERİ FOTOĞRAFLARI YÜKLEME BÜYÜSÜ (BÜYÜ SIRASI)
// ===============================================
function castGalleryLoadSpell() {
    // Tüm anı konteynerlarını seçiyoruz
    const memoryContainers = document.querySelectorAll('.memory-container');
    
    // Her bir fotoğrafı sırayla yükle
    memoryContainers.forEach((container, index) => {
        // Gecikme süresi (Her fotoğraf için biraz daha uzun, 400ms farkla)
        const delay = index * 400 + 1000; // 1 saniye başlangıç gecikmesi ile
        
        // Bu gecikme sonrası fade-in efektini başlat
        setTimeout(() => {
            // CSS'teki opacity: 0 kuralını geçersiz kılarak fade-in'i başlatır
            container.style.opacity = '1';
            
            // Kısa bir parlama efekti vermek için box-shadow'u geçici olarak değiştiriyoruz
            container.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.7)'; // Gümüş parlama
            
            // Kısa bir süre sonra normal gölgeye dön
            setTimeout(() => {
                container.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.7)'; 
            }, 300); 

        }, delay);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const magicButton = document.getElementById('magicButton');
    const magicEffect = document.getElementById('magicEffect');
    const wand = document.getElementById('wand');
    const secretMessage = document.getElementById('secretMessage');
    
    // YENİ: Yıldız/Partikül Animasyonunu Başlat
    createStarAnimation();
    
    // YENİ: Sayfa yüklendiğinde Galeri Yükleme Büyüsünü çağır
    castGalleryLoadSpell();

    magicButton.addEventListener('click', (event) => {
        // Asa animasyonu (Hafifçe sallanma)
        wand.style.transform = 'rotate(30deg)';
        setTimeout(() => {
            wand.style.transform = 'rotate(0deg)';
        }, 300);

        // Büyü efekti (Mavi/Beyaz parlama)
        const buttonRect = magicButton.getBoundingClientRect();
        magicEffect.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
        magicEffect.style.top = `${buttonRect.top + buttonRect.height / 2}px`;

        magicEffect.classList.add('active');

        setTimeout(() => {
            magicEffect.classList.remove('active');
        }, 1000); 
        
        // Gizli mesajı gösterme
        if (!secretMessage.classList.contains('visible')) {
             secretMessage.classList.add('visible');
             magicButton.textContent = "Büyü Tamamlandı!";
             magicButton.disabled = true;
        }
    });

    // ===============================================
    // ARKA PLAN YILDIZ/PARTİKÜL ANİMASYONU
    // ===============================================
    function createStarAnimation() {
        const container = document.getElementById('star-container');
        const numStars = 50; // Oluşturulacak yıldız/partikül sayısı

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Konumlandırma
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Boyut ve Opaklık
            const size = Math.random() * 2 + 1; // 1px - 3px
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.opacity = Math.random(); // Rastgele parlaklık
            
            // Animasyon Süresi (Yavaş Hareket)
            star.style.animationDelay = `${Math.random() * 10}s`;
            star.style.animationDuration = `${Math.random() * 20 + 10}s`; // 10-30 saniye
            
            container.appendChild(star);
        }
    }
});
