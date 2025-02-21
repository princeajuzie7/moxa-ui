import sharedConfig from "@workspace/ui/tailwind.config";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  ...sharedConfig, // Spread shared config
  content: [
    ...sharedConfig.content, // Ensure previous content paths are included
    "../ui/**/*.{js,jsx,ts,tsx}",
    "../ui/tailwind.config.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default tailwindConfig;
