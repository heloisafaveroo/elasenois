import React, { useState } from 'react';
import AdminPanel from './admin';
import './cadastro.css';

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });
    const [mostrarAdmin, setMostrarAdmin] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setMessage({ text: 'As senhas não coincidem.', type: 'error' });
            return;
        }

        if (password.length < 6) {
            setMessage({ text: 'A senha deve ter pelo menos 6 caracteres.', type: 'error' });
            return;
        }

        try {
            const novoUsuario = {
                email: email,
                dataCadastro: new Date().toISOString()
            };

            const usuariosExistentes = JSON.parse(localStorage.getItem('usuariosCadastrados') || '[]');
            
            if (usuariosExistentes.some(usuario => usuario.email === email)) {
                setMessage({ text: 'Este e-mail já está cadastrado.', type: 'error' });
                return;
            }

            usuariosExistentes.push(novoUsuario);
            localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosExistentes));

            setMessage({ 
                text: 'Cadastro realizado com sucesso! Você começará a receber nossas atualizações.', 
                type: 'success' 
            });
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch (error) {
            console.error('Erro:', error);
            setMessage({ text: 'Ocorreu um erro. Tente novamente mais tarde.', type: 'error' });
        }
    };

    const irParaAdmin = () => {
        setMostrarAdmin(true);
    };

    const voltarParaCadastro = () => {
        setMostrarAdmin(false);
    };

    if (mostrarAdmin) {
        return <AdminPanel onVoltar={voltarParaCadastro} />;
    }

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '80vh', 
            padding: '20px',
            flexDirection: 'column',
            gap: '20px'
        }}>
            {/* Botão para o Painel Admin */}
            <button 
                onClick={irParaAdmin}
                style={{
                    background: 'linear-gradient(135deg, #6C2D2D 0%, #5c1919 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 15px rgba(108, 45, 45, 0.3)',
                    transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(108, 45, 45, 0.4)';
                }}
                onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(108, 45, 45, 0.3)';
                }}
            >
                👩‍💼 Acessar Painel Admin
            </button>

            {/* Formulário de Cadastro */}
            <div className="modal-content" style={{ 
                position: 'relative', 
                animation: 'none', 
                display: 'block',
                maxWidth: '500px',
                width: '100%'
            }}>
                <h1>Receba Nossas Atualizações e Participe!</h1>
                <p>Ao se cadastrar, você receberá por e-mail todas as novidades do nosso site, informações sobre eventos futuros, e conteúdos exclusivos do "Elas por Elas". Mantenha-se conectada e faça parte da nossa comunidade!</p>
                
                <form id="cadastroFormModal" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="emailModal">E-mail:</label>
                        <input 
                            type="email" 
                            id="emailModal" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordModal">Criar Senha:</label>
                        <input 
                            type="password" 
                            id="passwordModal" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPasswordModal">Confirmar Senha:</label>
                        <input 
                            type="password" 
                            id="confirmPasswordModal" 
                            name="confirmPassword" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="submit-btn">Cadastrar</button>
                    {message.text && <p className={`message ${message.type}`}>{message.text}</p>}
                </form>
            </div>
        </div>
    );
};

export default Cadastro;