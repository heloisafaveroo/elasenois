document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openCadastroModal');
    const cadastroModal = document.getElementById('cadastroModal');
    const closeButton = document.querySelector('#cadastroModal .close-button');
    const cadastroFormModal = document.getElementById('cadastroFormModal');
    const emailInputModal = document.getElementById('emailModal');
    const passwordInputModal = document.getElementById('passwordModal');
    const confirmPasswordInputModal = document.getElementById('confirmPasswordModal');
    const messageDisplayModal = document.getElementById('messageModal');

    // Open the modal
    if (openModalBtn) {
        openModalBtn.addEventListener('click', () => {
            cadastroModal.style.display = 'flex'; // Use flex to center
        });
    }

    // Close the modal when clicking on the close button
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            cadastroModal.style.display = 'none';
            messageDisplayModal.textContent = ''; // Clear message on close
            cadastroFormModal.reset(); // Clear the form
        });
    }

    // Close the modal when clicking outside of it
    if (cadastroModal) {
        window.addEventListener('click', (event) => {
            if (event.target === cadastroModal) {
                cadastroModal.style.display = 'none';
                messageDisplayModal.textContent = ''; // Clear message on close
                cadastroFormModal.reset(); // Clear the form
            }
        });
    }

    // Handle form submission within the modal
    if (cadastroFormModal) {
        cadastroFormModal.addEventListener('submit', async function(event) {
            event.preventDefault();

            const email = emailInputModal.value;
            const password = passwordInputModal.value;
            const confirmPassword = confirmPasswordInputModal.value;

            if (password !== confirmPassword) {
                displayMessageModal('As senhas não coincidem.', 'error');
                return;
            }

            if (password.length < 6) {
                displayMessageModal('A senha deve ter pelo menos 6 caracteres.', 'error');
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/api/register', { // Use your backend URL
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email, password: password }),
                });

                const data = await response.json();

                if (data.success) {
                    displayMessageModal('Cadastro realizado com sucesso! Você começará a receber nossas atualizações.', 'success');
                    cadastroFormModal.reset(); // Clear the form
                    // Optionally, close the modal after a short delay
                    setTimeout(() => {
                        cadastroModal.style.display = 'none';
                    }, 2000); 
                } else {
                    displayMessageModal(data.message || 'Erro ao cadastrar. Tente novamente.', 'error');
                }
            } catch (error) {
                console.error('Erro:', error);
                displayMessageModal('Ocorreu um erro na rede. Tente novamente mais tarde.', 'error');
            }
        });
    }

    function displayMessageModal(message, type) {
        messageDisplayModal.textContent = message;
        messageDisplayModal.className = 'message ' + type;
    }
});