// src/utils/authHelper.js

/**
 * Giải mã payload của JWT token
 * @param {string} token - JWT token
 * @returns {Object|null} - Payload hoặc null nếu lỗi
 */
export const decodeToken = (token) => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid JWT token format");
    }

    // Lấy payload và chuyển từ base64url -> base64 chuẩn
    let payloadBase64 = parts[1];
    payloadBase64 = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");

    // Bổ sung padding nếu thiếu
    switch (payloadBase64.length % 4) {
      case 0:
        break;
      case 2:
        payloadBase64 += "==";
        break;
      case 3:
        payloadBase64 += "=";
        break;
      default:
        throw new Error("Invalid base64url string");
    }

    // Giải mã
    const decodedJson = atob(payloadBase64);
    return JSON.parse(decodedJson);
  } catch (error) {
    console.error("Lỗi giải mã token:", error);
    return null;
  }
};

/**
 * Kiểm tra xem token còn hiệu lực không
 * @param {string} token - JWT token
 * @returns {boolean} - true nếu hợp lệ và chưa hết hạn
 */
export const isTokenValid = (token) => {
  if (!token) return false;

  const payload = decodeToken(token);
  if (!payload) return false;

  const currentTime = Math.floor(Date.now() / 1000); // Thời gian hiện tại (giây)
  const expirationTime = payload.exp;

  return expirationTime > currentTime;
};

/**
 * Lấy thông tin người dùng từ token
 * @returns {Object|null} - Thông tin người dùng hoặc null nếu token không hợp lệ
 */
export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token || !isTokenValid(token)) return null;

  const payload = decodeToken(token);

  return {
    id: payload.nameid || payload.sub,
    email: payload.email,
    name: `Người dùng ${payload.nameid || payload.sub}`,
    role: payload.role || "user",
    exp: payload.exp,
  };
};
console.log(getCurrentUser())

/**
 * Hàm đăng xuất
 */
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";

const mobileUserInfo = document.getElementById("mobile-user-info");
  if (mobileUserInfo) mobileUserInfo.remove();

  window.location.href = "/";
};