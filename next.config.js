const { withKumaUI } = require("@kuma-ui/next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // importした画像の型定義設定を無効にする
        remotePatterns: [
          {
            protocol: "https",
            hostname: "via.placeholder.com",
            port: "",
          },
        ],
      },
}

module.exports = withKumaUI(nextConfig);
