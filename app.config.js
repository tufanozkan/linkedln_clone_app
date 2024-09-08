import "dotenv/config";

export default {
  expo: {
    name: "linkedln_clone_app",
    slug: "linkedln_clone_app",
    scheme: "acme",
    web: {
      bundler: "metro",
    },
    plugins: ["expo-router"],
    extra: {
      RAPID_API_KEY: process.env.RAPID_API_KEY, // Ortam değişkenini buraya ekleyin
    },
  },
};
