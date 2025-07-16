// src/utils/headerUpdater.js

import { getCurrentUser, logout } from "./authHelper";

export const updateHeaderAfterLogin = () => {
  const user = getCurrentUser();
  if (!user) return;

  // Cập nhật tên người dùng trong header desktop
  const accountSpan = document.querySelector(
    ".hidden.sm\\:inline.text-gray-700.text-sm.font-medium"
  );
  if (accountSpan) accountSpan.textContent = user.name;

  // Cập nhật avatar chữ cái đầu tiên
  const avatarDiv = document.querySelector(
    ".w-9.h-9.rounded-full.bg-gradient-to-r.from-blue-400.to-purple-500"
  );
  if (avatarDiv) avatarDiv.textContent = user.name.charAt(0).toUpperCase();

  // Lắng nghe sự kiện click vào nút avatar để can thiệp dropdown sau khi nó được render
  const avatarButton = document.querySelector(
    ".flex.items-center.gap-2.focus\\:outline-none.group"
  );

  if (avatarButton) {
    const observer = new MutationObserver(() => {
      const dropdownMenu = document.getElementById("user-dropdown");
      if (dropdownMenu && !dropdownMenu.dataset.updated) {
        dropdownMenu.innerHTML = `
          <div class="py-2">
            <button id="logoutBtn" class="flex items-center gap-3 w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
              Đăng xuất
            </button>
          </div>
        `;
        dropdownMenu.dataset.updated = "true"; // Đánh dấu đã cập nhật

        // Gắn sự kiện click cho nút Đăng xuất
        document.getElementById("logoutBtn")?.addEventListener("click", () => {
          logout();
        });
      }
    });

    // Theo dõi khi dropdown được thêm vào DOM
    observer.observe(avatarButton.parentNode, {
      childList: true,
      subtree: true,
    });
   

  }

 // Cập nhật menu mobile
  updateMobileMenu();

}



export const updateMobileMenu = () => {
  const user = getCurrentUser();
  if (!user) return;

  const mobileNav = document.getElementById("molbie-header");
  if (!mobileNav) return;

  // Xóa các nút Đăng nhập / Đăng ký nếu có
  const loginLink = mobileNav.querySelector("#mobile-login");
  const registerLink = mobileNav.querySelector("#mobile-register");

  if (loginLink) loginLink.remove();
  if (registerLink) registerLink.remove();

  // Nếu đã có phần tử người dùng rồi thì không thêm nữa
  if (mobileNav.querySelector("#mobile-user-info")) return;

  // Tạo phần tử mới
  const userContainer = document.createElement("div");
  userContainer.className = "flex flex-col space-y-3";
  userContainer.id = "mobile-user-info";

  // Avatar chữ cái đầu tiên
  const avatarDiv = document.createElement("div");
  avatarDiv.className =
    "w-9 h-9 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold shadow-sm";
  avatarDiv.textContent = user.name.charAt(0).toUpperCase();

  // Tên người dùng
  const nameSpan = document.createElement("span");
  nameSpan.className = "text-gray-800 text-sm font-medium mt-2";
  nameSpan.textContent = user.name;

  // Nút Đăng xuất
  const logoutBtn = document.createElement("button");
  logoutBtn.className =
    "mt-4 flex items-center gap-2 text-red-600 py-2 px-3 rounded hover:bg-red-50 cursor-pointer";
  logoutBtn.textContent = "Đăng xuất";
  logoutBtn.onclick = (e) => {
    e.preventDefault();
    logout(); // Gọi hàm logout từ authHelper
  };

  // Kết hợp lại
  userContainer.appendChild(avatarDiv);
  userContainer.appendChild(nameSpan);
  userContainer.appendChild(logoutBtn);

  // Chèn vào đầu menu mobile
  const firstChild = mobileNav.firstChild;
  mobileNav.insertBefore(userContainer, firstChild);
};