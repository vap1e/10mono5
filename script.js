document.getElementById("submit-password").addEventListener("click", function () {
    const correctPassword = "12345"; // 正しいパスワード
    const userInput = document.getElementById("password-input").value.trim(); // 入力されたパスワード
    const errorMessage = document.getElementById("error-message");
    const passwordScreen = document.getElementById("password-screen");
    const mainContent = document.getElementById("main-content");

    // パスワード判定
    if (userInput === correctPassword) {
        // パスワードが正しい場合
        errorMessage.textContent = ""; // エラーをクリア
        passwordScreen.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        passwordScreen.style.opacity = "0"; // フェードアウト
        passwordScreen.style.transform = "translateY(-20px)"; // 上に移動するアニメーション

        setTimeout(() => {
            passwordScreen.style.display = "none"; // 非表示にする
            mainContent.style.display = "block"; // メインコンテンツを表示
            mainContent.style.opacity = "0"; // 初期状態で透明
            mainContent.style.transition = "opacity 0.5s ease";
            mainContent.style.opacity = "1"; // フェードイン
        }, 500); // フェードアウト後にメインコンテンツを表示
    } else {
        // パスワードが間違っている場合
        errorMessage.textContent = "Incorrect password. Please try again."; // エラーメッセージを表示
    }
});

// スクロールエフェクトを適用
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    if (window.scrollY > 50) {
        heroSection.classList.add('scrolled');
    } else {
        heroSection.classList.remove('scrolled');
    }
});

// ExploreボタンでURLセクションをトグル表示
document.getElementById("explore-btn").addEventListener("click", function () {
    const urlSection = document.getElementById("url-section");
    if (!urlSection) return; // URLセクションがない場合は終了

    if (urlSection.classList.contains("hidden")) {
        urlSection.classList.remove("hidden");
        urlSection.style.opacity = "0";
        setTimeout(() => {
            urlSection.style.opacity = "1";
            urlSection.style.transform = "translateY(0)";
        }, 50);
    } else {
        urlSection.style.opacity = "0";
        urlSection.style.transform = "translateY(-20px)";
        setTimeout(() => {
            urlSection.classList.add("hidden");
        }, 300);
    }
});

// 新しいボックスを表示するスクリプト
document.querySelector(".explore-btn").addEventListener("click", function () {
    const hiddenBoxes = document.getElementById("hidden-boxes");
    if (!hiddenBoxes) return; // ボックスがない場合は終了
    hiddenBoxes.classList.toggle("show");
});

