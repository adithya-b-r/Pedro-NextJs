import type { NextConfig } from "next";

// https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [{ hostname: "upload.wikimedia.org"}]
  }
};


export default nextConfig;
