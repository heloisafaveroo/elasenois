const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Caminho para o arquivo JSON de cadastros
const CADASTROS_FILE = path.join(__dirname, '../data/cadastros.json');

// Garantir que o diretório data existe
async function garantirDiretorioData() {
    const dataDir = path.join(__dirname, '../data');
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
    }
}

// Ler cadastros do arquivo
async function lerCadastros() {
    try {
        await garantirDiretorioData();
        const data = await fs.readFile(CADASTROS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // Se o arquivo não existe, retorna array vazio
        if (error.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}

// Salvar cadastros no arquivo
async function salvarCadastros(cadastros) {
    await garantirDiretorioData();
    await fs.writeFile(CADASTROS_FILE, JSON.stringify(cadastros, null, 2), 'utf8');
}

// GET - Listar todos os cadastros
router.get('/', async (req, res) => {
    try {
        const cadastros = await lerCadastros();
        res.json(cadastros);
    } catch (error) {
        console.error('Erro ao ler cadastros:', error);
        res.status(500).json({ error: 'Erro ao buscar cadastros' });
    }
});

// POST - Criar novo cadastro
router.post('/', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'E-mail é obrigatório' });
        }

        const cadastros = await lerCadastros();

        // Verificar se o e-mail já existe
        if (cadastros.some(cadastro => cadastro.email === email)) {
            return res.status(409).json({ error: 'Este e-mail já está cadastrado' });
        }

        // Criar novo cadastro
        const novoCadastro = {
            email,
            dataCadastro: new Date().toISOString()
        };

        cadastros.push(novoCadastro);
        await salvarCadastros(cadastros);

        res.status(201).json({ 
            message: 'Cadastro realizado com sucesso!',
            cadastro: novoCadastro
        });
    } catch (error) {
        console.error('Erro ao criar cadastro:', error);
        res.status(500).json({ error: 'Erro ao criar cadastro' });
    }
});

// DELETE - Excluir cadastro por e-mail
router.delete('/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const cadastros = await lerCadastros();

        const novosCadastros = cadastros.filter(cadastro => cadastro.email !== email);

        if (novosCadastros.length === cadastros.length) {
            return res.status(404).json({ error: 'E-mail não encontrado' });
        }

        await salvarCadastros(novosCadastros);

        res.json({ message: 'Cadastro excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir cadastro:', error);
        res.status(500).json({ error: 'Erro ao excluir cadastro' });
    }
});

// GET - Exportar cadastros como CSV
router.get('/export/csv', async (req, res) => {
    try {
        const cadastros = await lerCadastros();

        // Criar CSV
        const cabecalho = 'E-mail,Data de Cadastro\n';
        const linhas = cadastros.map(c => 
            `${c.email},${new Date(c.dataCadastro).toLocaleString('pt-BR')}`
        ).join('\n');

        const csv = cabecalho + linhas;

        // Configurar headers para download
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename=cadastros_${new Date().toISOString().split('T')[0]}.csv`);
        res.send('\uFEFF' + csv); // BOM para UTF-8
    } catch (error) {
        console.error('Erro ao exportar CSV:', error);
        res.status(500).json({ error: 'Erro ao exportar CSV' });
    }
});

module.exports = router;
