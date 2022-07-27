import { ConfigEnv, UserConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type

  const isBuild = command === "build";
  console.log("command", command, "mode", mode, "isBuild", isBuild);
  return {
    base: "/",
    root,
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/",
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/",
        },
      ],
    },

    build: {
      target: "es2015",
      cssTarget: "chrome86",
      outDir: "dist",
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: true,
        },
      },
      chunkSizeWarningLimit: 2000,
    },

    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `@import "./src/assets/default/basic.scss";@import "./src/assets/default/common.scss";`,
        },
      },
    },

    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
    plugins: [vue()],
    // server: {
    //   // Listening on all local IPs
    //   host: true,
    //   port: VITE_PORT,
    //   // Load proxy configuration from .env
    //   proxy: createProxy(VITE_PROXY),
    // },
    optimizeDeps: {
      // @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly
      include: ["@vue/runtime-core", "@vue/shared", "@iconify/iconify"],
    },
  };
};
