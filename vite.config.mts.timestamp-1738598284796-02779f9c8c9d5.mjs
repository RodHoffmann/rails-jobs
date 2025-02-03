// vite.config.mts
import { defineConfig } from "file:///Users/rodhoffmann/code/RodHoffmann/rails-jobs/.yarn/__virtual__/vite-virtual-63e1d3aa9d/4/.yarn/berry/cache/vite-npm-5.4.14-4903607bfe-10c0.zip/node_modules/vite/dist/node/index.js";
import RubyPlugin from "file:///Users/rodhoffmann/code/RodHoffmann/rails-jobs/.yarn/__virtual__/vite-plugin-ruby-virtual-960f0040a5/4/.yarn/berry/cache/vite-plugin-ruby-npm-5.1.1-79312225a4-10c0.zip/node_modules/vite-plugin-ruby/dist/index.js";
import ViteRails from "file:///Users/rodhoffmann/code/RodHoffmann/rails-jobs/.yarn/__virtual__/vite-plugin-rails-virtual-10ebffe42f/4/.yarn/berry/cache/vite-plugin-rails-npm-0.5.0-1dae732232-10c0.zip/node_modules/vite-plugin-rails/dist/index.js";
import tailwindcss from "file:///Users/rodhoffmann/code/RodHoffmann/rails-jobs/.yarn/__virtual__/@tailwindcss-vite-virtual-e4f039a4e0/4/.yarn/berry/cache/@tailwindcss-vite-npm-4.0.3-f162b3a440-10c0.zip/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    RubyPlugin(),
    tailwindcss(),
    ViteRails({
      envVars: { RAILS_ENV: "development" },
      envOptions: { defineOn: "import.meta.env" },
      fullReload: {
        additionalPaths: ["config/routes.rb", "app/views/**/*"],
        delay: 300
      }
    })
  ],
  build: { sourcemap: false }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3JvZGhvZmZtYW5uL2NvZGUvUm9kSG9mZm1hbm4vcmFpbHMtam9ic1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3JvZGhvZmZtYW5uL2NvZGUvUm9kSG9mZm1hbm4vcmFpbHMtam9icy92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3JvZGhvZmZtYW5uL2NvZGUvUm9kSG9mZm1hbm4vcmFpbHMtam9icy92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFJ1YnlQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tcnVieSdcbmltcG9ydCBWaXRlUmFpbHMgZnJvbSBcInZpdGUtcGx1Z2luLXJhaWxzXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBSdWJ5UGx1Z2luKCksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgICBWaXRlUmFpbHMoe1xuICAgICAgZW52VmFyczogeyBSQUlMU19FTlY6IFwiZGV2ZWxvcG1lbnRcIiB9LFxuICAgICAgZW52T3B0aW9uczogeyBkZWZpbmVPbjogXCJpbXBvcnQubWV0YS5lbnZcIiB9LFxuICAgICAgZnVsbFJlbG9hZDoge1xuICAgICAgICBhZGRpdGlvbmFsUGF0aHM6IFtcImNvbmZpZy9yb3V0ZXMucmJcIiwgXCJhcHAvdmlld3MvKiovKlwiXSxcbiAgICAgICAgZGVsYXk6IDMwMCxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7IHNvdXJjZW1hcDogZmFsc2UgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThULFNBQVMsb0JBQW9CO0FBQzNWLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZUFBZTtBQUN0QixPQUFPLGlCQUFpQjtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQUEsSUFDWCxZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsTUFDUixTQUFTLEVBQUUsV0FBVyxjQUFjO0FBQUEsTUFDcEMsWUFBWSxFQUFFLFVBQVUsa0JBQWtCO0FBQUEsTUFDMUMsWUFBWTtBQUFBLFFBQ1YsaUJBQWlCLENBQUMsb0JBQW9CLGdCQUFnQjtBQUFBLFFBQ3RELE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTyxFQUFFLFdBQVcsTUFBTTtBQUM1QixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
