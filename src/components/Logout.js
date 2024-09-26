
import axios from 'axios';
import Cookies from 'universal-cookie';
import { reqUrl } from './Constant';

const cookies= new Cookies();
const token=cookies.get('token');
export const logout = async () => {

  try {
    await axios.post(`${reqUrl}/logout`, { withCredentials: true });
    cookies.remove('token');
    window.location.href = '/signin';
  } catch (err) {
    console.error('Error logging out:', err);
  }
};
