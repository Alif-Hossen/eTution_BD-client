{import('tailwindcss').Config} 
export default {
  darkMode: 'class', // এটিই ডার্ক মোড চালু করবে
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BCE955', // তোমার প্রিয় লাইম কালারটি এখানে সেভ করে দিলাম
      },
    },
  },
  plugins: [],
}