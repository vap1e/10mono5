// スクロールエフェクトを適用
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    if (window.scrollY > 50) {
        heroSection.classList.add('scrolled');
    } else {
        heroSection.classList.remove('scrolled');
    }
});

//TUKURIKOMI
document.getElementById("explore-btn").addEventListener("click", function () {
    // URLセクションを取得
    const urlSection = document.getElementById("url-section");

    // セクションの表示・非表示を切り替え
    if (urlSection.classList.contains("hidden")) {
        urlSection.classList.remove("hidden");
        urlSection.style.opacity = "0"; // 初期状態の透明度を0に
        setTimeout(() => {
            urlSection.style.opacity = "1"; // 遅延してフェードイン
            urlSection.style.transform = "translateY(0)";
        }, 50); // 少し待ってからアニメーション
    } else {
        urlSection.style.opacity = "0"; // フェードアウト
        urlSection.style.transform = "translateY(-20px)"; // 上に戻るアニメーション
        setTimeout(() => {
            urlSection.classList.add("hidden");
        }, 300); // アニメーション終了後に非表示
    }
});

// 新しいボックスを表示するスクリプト
document.querySelector(".explore-btn").addEventListener("click", function () {
    const hiddenBoxes = document.getElementById("hidden-boxes");
    hiddenBoxes.classList.toggle("show"); // クラスを切り替え
});
