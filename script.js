document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-password");
    const passwordInput = document.getElementById("password-input");
    const errorMessage = document.getElementById("error-message");
    const passwordScreen = document.getElementById("password-screen");
    const mainContent = document.getElementById("main-content");

    const correctPassword = "12345"; // パスワードを文字列に

    submitButton.addEventListener("click", () => {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            errorMessage.textContent = "";

            // パスワード画面をフェードアウト
            passwordScreen.style.transition = "opacity 0.5s ease";
            passwordScreen.style.opacity = "0";

            setTimeout(() => {
                passwordScreen.style.display = "none";
                mainContent.style.display = "block";
                mainContent.style.opacity = "0"; // 初期状態を透明に
                mainContent.style.transition = "opacity 0.5s ease";
            }, 500);

            setTimeout(() => {
                mainContent.style.opacity = "1"; // フェードイン
            }, 550);
        } else {
            errorMessage.textContent = "Incorrect password. Please try again.";
        }
    });
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

console.log("ボタンがクリックされました！");

document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".card-container");

    let isSwiping = false;
    let startX, scrollLeft, touchStartTime;

    // スマホのスワイプ対応（タッチイベント）
    cardContainer.addEventListener("touchstart", (e) => {
        if (e.touches.length > 1) return; // 複数タッチ無視

        isSwiping = true;
        startX = e.touches[0].clientX;
        scrollLeft = cardContainer.scrollLeft;
        touchStartTime = Date.now(); // タッチ時間を記録
    });

    cardContainer.addEventListener("touchend", (e) => {
        const touchDuration = Date.now() - touchStartTime;
        if (touchDuration > 300) {
            // 長押しだった場合、スワイプ無効（通常のタッチとして扱う）
            isSwiping = false;
            return;
        }
        isSwiping = false;
    });

    cardContainer.addEventListener("touchmove", (e) => {
        if (!isSwiping) return;
        const x = e.touches[0].clientX;
        const walk = (x - startX) * 2; // スクロール速度
        cardContainer.scrollLeft = scrollLeft - walk;
    });
});
