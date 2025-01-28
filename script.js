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
