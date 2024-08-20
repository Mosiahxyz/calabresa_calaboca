
const API_BASE_URL = 'http://localhost:3000'; // Substitua pelo URL base da sua API

// Função para obter todos os modelos
async function getModelos() {
    try {
        const response = await fetch(`${API_BASE_URL}/modelos`);
        if (!response.ok) throw new Error('Erro ao buscar modelos');
        const modelos = await response.json();
        return modelos;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Função para criar um novo modelo
async function criarNovoModelo(imagem, titulo, corpo_redacao) {
    try {
        const response = await fetch(`${API_BASE_URL}/novomodelo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imagem, titulo, corpo_redacao })
        });
        if (!response.ok) throw new Error('Erro ao criar novo modelo');
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Função para editar um modelo existente
async function editarModelo(id, imagem, titulo, corpo_redacao) {
    try {
        const response = await fetch(`${API_BASE_URL}/editar/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imagem, titulo, corpo_redacao })
        });
        if (!response.ok) throw new Error('Erro ao editar modelo');
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
