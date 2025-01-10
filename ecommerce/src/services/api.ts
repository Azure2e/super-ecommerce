import axios from 'axios';
// Configuração da instância do Axios
const api = axios.create({
  baseURL: 'http://localhost:5000', // Substitua pela URL do seu backend
  timeout: 10000, // Tempo limite para requisições em milissegundos
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para buscar produtos por categoria
export const fetchProductsByCategory = async (category: string) => {
  try {
    const response = await api.get(`/products?category=${category}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};

// Função para buscar detalhes de um produto
export const fetchProductDetails = async (id: number) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do produto:', error);
    throw error;
  }
};

// Função para criar um pedido
export const createOrder = async (orderData: any) => {
  try {
    const response = await api.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    throw error;
  }
};

// Função para buscar informações de contato do supermercado
export const fetchContactInfo = async () => {
  try {
    const response = await api.get('/contact');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar informações de contato:', error);
    throw error;
  }
};

export default api;