import React, { useState, useEffect } from 'react';

const AdminPanel = ({ onVoltar }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState({ text: '', type: '' });

    // Senha de administrador (em produção, isso deve ser mais seguro)
    const ADMIN_PASSWORD = "elasporelas2025";

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setAuthenticated(true);
            setError('');
        } else {
            setError('Senha incorreta!');
        }
    };

    // Carrega usuários do backend (após autenticação)
    useEffect(() => {
        if (authenticated) {
            carregarUsuarios();
        }
    }, [authenticated]);

    const carregarUsuarios = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://elasporelas-0r2t.onrender.com/api/cadastros');
            if (response.ok) {
                const data = await response.json();
                setUsuarios(data);
            } else {
                setMensagem({ 
                    text: 'Erro ao carregar usuários do servidor', 
                    type: 'error' 
                });
            }
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
            setMensagem({ 
                text: 'Erro ao conectar com o servidor. Verifique se o backend está rodando.', 
                type: 'error' 
            });
        } finally {
            setLoading(false);
        }
    };

    // Filtrar usuários por e-mail
    const usuariosFiltrados = usuarios.filter(usuario =>
        usuario.email.toLowerCase().includes(filtro.toLowerCase())
    );

    // Excluir usuário
    const excluirUsuario = async (email) => {
        if (!window.confirm(`Tem certeza que deseja excluir o cadastro de ${email}?`)) {
            return;
        }

        try {
            const response = await fetch(`https://elasporelas-0r2t.onrender.com/api/cadastros/${encodeURIComponent(email)}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setMensagem({ 
                    text: 'Cadastro excluído com sucesso!', 
                    type: 'success' 
                });
                // Recarregar lista
                carregarUsuarios();
            } else {
                const data = await response.json();
                setMensagem({ 
                    text: data.error || 'Erro ao excluir cadastro', 
                    type: 'error' 
                });
            }
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            setMensagem({ 
                text: 'Erro ao conectar com o servidor', 
                type: 'error' 
            });
        }
    };

    // Exportar para CSV
    const exportarCSV = async () => {
        try {
            const response = await fetch('https://elasporelas-0r2t.onrender.com/api/cadastros/export/csv');
            
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `cadastros_${new Date().toISOString().split('T')[0]}.csv`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
                
                setMensagem({ 
                    text: 'CSV exportado com sucesso!', 
                    type: 'success' 
                });
            } else {
                setMensagem({ 
                    text: 'Erro ao exportar CSV', 
                    type: 'error' 
                });
            }
        } catch (error) {
            console.error('Erro ao exportar CSV:', error);
            setMensagem({ 
                text: 'Erro ao conectar com o servidor', 
                type: 'error' 
            });
        }
    };

    const handleLogout = () => {
        setAuthenticated(false);
        setPassword('');
    };

    // Tela de Login
    if (!authenticated) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #fce7e7 0%, #f8d7da 100%)'
            }}>
                <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 15px 35px rgba(92, 25, 25, 0.15)',
                    padding: '40px',
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center'
                }}>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, #5c1919 0%, #6C2D2D 100%)',
                            borderRadius: '50%',
                            margin: '0 auto 20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '2rem'
                        }}>
                            👩‍💼
                        </div>
                        <h1 style={{ color: '#5c1919', fontSize: '1.8rem', marginBottom: '10px' }}>
                            Painel Administrativo
                        </h1>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>
                            Acesso restrito, apenas administradoras podem acessar.
                        </p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                            <label style={{ 
                                display: 'block', 
                                marginBottom: '8px', 
                                color: '#5c1919', 
                                fontWeight: '600' 
                            }}>
                                Senha:
                            </label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '15px',
                                    border: '2px solid #e0e0e0',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: '#fafafa'
                                }}
                                placeholder="Digite a senha" 
                                required 
                            />
                        </div>

                        <button type="submit" style={{
                            width: '100%',
                            padding: '15px',
                            background: 'linear-gradient(135deg, #6C2D2D 0%, #5c1919 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(108, 45, 45, 0.3)'
                        }}>
                            Entrar
                        </button>
                        
                        {error && (
                            <div style={{ 
                                color: '#dc3545', 
                                fontSize: '0.875rem', 
                                marginTop: '10px' 
                            }}>
                                {error}
                            </div>
                        )}
                    </form>

                    <div style={{ marginTop: '20px' }}>
                        <button 
                            onClick={onVoltar}
                            style={{
                                color: '#6C2D2D',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                textDecoration: 'underline'
                            }}
                        >
                            ← Voltar para o cadastro
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Painel Administrativo (após login)
    return (
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Cabeçalho */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ color: '#6C2D2D', margin: 0 }}>👩‍💼 Painel Administrativo</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={handleLogout}
                        style={{
                            background: '#dc3545',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Sair
                    </button>
                    <button 
                        onClick={onVoltar}
                        style={{
                            background: '#6C2D2D',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        ← Voltar ao Cadastro
                    </button>
                </div>
            </div>

            {/* Mensagens */}
            {mensagem.text && (
                <div style={{
                    padding: '15px',
                    marginBottom: '20px',
                    borderRadius: '5px',
                    background: mensagem.type === 'success' ? '#d4edda' : '#f8d7da',
                    color: mensagem.type === 'success' ? '#155724' : '#721c24',
                    border: `1px solid ${mensagem.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                }}>
                    {mensagem.text}
                    <button 
                        onClick={() => setMensagem({ text: '', type: '' })}
                        style={{
                            float: 'right',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.2rem'
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            {/* Estatísticas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
                <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <h3 style={{ margin: 0, color: '#6C2D2D' }}>Total de Usuários</h3>
                    <p style={{ fontSize: '2em', margin: '10px 0', fontWeight: 'bold' }}>{usuarios.length}</p>
                </div>
                <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                    <h3 style={{ margin: 0, color: '#6C2D2D' }}>Cadastros Hoje</h3>
                    <p style={{ fontSize: '2em', margin: '10px 0', fontWeight: 'bold' }}>
                        {usuarios.filter(u => new Date(u.dataCadastro).toDateString() === new Date().toDateString()).length}
                    </p>
                </div>
            </div>

            {/* Controles */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <input
                    type="text"
                    placeholder="🔍 Filtrar por e-mail..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    style={{
                        flex: '1',
                        minWidth: '200px',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                    }}
                />
                <button
                    onClick={exportarCSV}
                    style={{
                        background: '#2d6c2d',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                    }}
                >
                    📥 Exportar CSV
                </button>
                <button
                    onClick={carregarUsuarios}
                    disabled={loading}
                    style={{
                        background: '#6C2D2D',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        whiteSpace: 'nowrap',
                        opacity: loading ? 0.6 : 1
                    }}
                >
                    {loading ? '🔄 Carregando...' : '🔄 Atualizar'}
                </button>
            </div>

            {/* Lista de Usuários */}
            <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                {loading ? (
                    <p style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                        Carregando dados...
                    </p>
                ) : (
                    <>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#6C2D2D', color: 'white' }}>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>E-mail</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Data de Cadastro</th>
                                    <th style={{ padding: '12px', width: '100px' }}>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuariosFiltrados.map((usuario, index) => (
                                    <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '12px' }}>{usuario.email}</td>
                                        <td style={{ padding: '12px' }}>
                                            {new Date(usuario.dataCadastro).toLocaleString('pt-BR')}
                                        </td>
                                        <td style={{ padding: '12px', textAlign: 'center' }}>
                                            <button
                                                onClick={() => excluirUsuario(usuario.email)}
                                                style={{
                                                    background: '#ff4444',
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '5px 10px',
                                                    borderRadius: '3px',
                                                    cursor: 'pointer',
                                                    fontSize: '12px'
                                                }}
                                            >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        {usuariosFiltrados.length === 0 && (
                            <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                                {filtro ? 'Nenhum usuário encontrado' : 'Nenhum usuário cadastrado'}
                            </p>
                        )}
                    </>
                )}
            </div>

            {/* Informação sobre o arquivo JSON */}
            <div style={{
                marginTop: '30px',
                padding: '15px',
                background: '#e7f3ff',
                border: '1px solid #b3d9ff',
                borderRadius: '5px',
                fontSize: '0.9rem'
            }}>
                <strong>📁 Localização do arquivo JSON:</strong><br />
                Os dados estão sendo salvos em: <code>server/data/cadastros.json</code><br />
                Você pode copiar este arquivo para usar em sistemas de disparo de e-mail.
            </div>
        </div>
    );
};

export default AdminPanel;
