// vite.config.ts
import path from "path";
import { defineConfig } from "file:///D:/UIT-DKHP/K%E1%BB%B3%206/C%C3%B4ng%20ngh%E1%BB%87%20truy%E1%BB%81n%20th%C3%B4ng%20%C4%91a%20ph%C6%B0%C6%A1ng%20ti%E1%BB%87n/computer_vision/node_modules/vite/dist/node/index.js";
import react from "file:///D:/UIT-DKHP/K%E1%BB%B3%206/C%C3%B4ng%20ngh%E1%BB%87%20truy%E1%BB%81n%20th%C3%B4ng%20%C4%91a%20ph%C6%B0%C6%A1ng%20ti%E1%BB%87n/computer_vision/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\UIT-DKHP\\K\u1EF3 6\\C\xF4ng ngh\u1EC7 truy\u1EC1n th\xF4ng \u0111a ph\u01B0\u01A1ng ti\u1EC7n\\computer_vision";
var vite_config_default = defineConfig(async () => ({
  plugins: [react()],
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVSVQtREtIUFxcXFxLXHUxRUYzIDZcXFxcQ1x1MDBGNG5nIG5naFx1MUVDNyB0cnV5XHUxRUMxbiB0aFx1MDBGNG5nIFx1MDExMWEgcGhcdTAxQjBcdTAxQTFuZyB0aVx1MUVDN25cXFxcY29tcHV0ZXJfdmlzaW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxVSVQtREtIUFxcXFxLXHUxRUYzIDZcXFxcQ1x1MDBGNG5nIG5naFx1MUVDNyB0cnV5XHUxRUMxbiB0aFx1MDBGNG5nIFx1MDExMWEgcGhcdTAxQjBcdTAxQTFuZyB0aVx1MUVDN25cXFxcY29tcHV0ZXJfdmlzaW9uXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9VSVQtREtIUC9LJUUxJUJCJUIzJTIwNi9DJUMzJUI0bmclMjBuZ2glRTElQkIlODclMjB0cnV5JUUxJUJCJTgxbiUyMHRoJUMzJUI0bmclMjAlQzQlOTFhJTIwcGglQzYlQjAlQzYlQTFuZyUyMHRpJUUxJUJCJTg3bi9jb21wdXRlcl92aXNpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKCkgPT4gKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcblxyXG4gIC8vIFZpdGUgb3B0aW9ucyB0YWlsb3JlZCBmb3IgVGF1cmkgZGV2ZWxvcG1lbnQgYW5kIG9ubHkgYXBwbGllZCBpbiBgdGF1cmkgZGV2YCBvciBgdGF1cmkgYnVpbGRgXHJcbiAgLy9cclxuICAvLyAxLiBwcmV2ZW50IHZpdGUgZnJvbSBvYnNjdXJpbmcgcnVzdCBlcnJvcnNcclxuICBjbGVhclNjcmVlbjogZmFsc2UsXHJcbiAgLy8gMi4gdGF1cmkgZXhwZWN0cyBhIGZpeGVkIHBvcnQsIGZhaWwgaWYgdGhhdCBwb3J0IGlzIG5vdCBhdmFpbGFibGVcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDE0MjAsXHJcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgLy8gMy4gdGVsbCB2aXRlIHRvIGlnbm9yZSB3YXRjaGluZyBgc3JjLXRhdXJpYFxyXG4gICAgICBpZ25vcmVkOiBbXCIqKi9zcmMtdGF1cmkvKipcIl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxZCxPQUFPLFVBQVU7QUFDdGUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYSxhQUFhO0FBQUEsRUFDdkMsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2pCLGFBQWE7QUFBQTtBQUFBLEVBRWIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osT0FBTztBQUFBO0FBQUEsTUFFTCxTQUFTLENBQUMsaUJBQWlCO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
