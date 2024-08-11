import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
<<<<<<< HEAD
  
=======

  server:{
    proxy:{
'/api':'http://localhost:8083'
    }
  },
>>>>>>> ab405a563132112b44205774ff97772987bf5229
  plugins: [react()],

})
