document.addEventListener('DOMContentLoaded', () => {
    const USER_VALIDO = "HMQ.ISSS.sv";
    const PASS_VALIDO = "Hmqisss2026";

    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const errorMsg = document.getElementById('error-msg');
    const logoutBtn = document.getElementById('logout-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('username').value.trim();
            const pass = document.getElementById('password').value.trim();

            if (user === USER_VALIDO && pass === PASS_VALIDO) {
                errorMsg.style.display = 'none';
                loginSection.classList.add('hidden');
                dashboardSection.classList.remove('hidden');
                dashboardSection.classList.add('fade-in');
            } else {
                errorMsg.style.display = 'flex';
                loginSection.classList.remove('shake');
                void loginSection.offsetWidth; 
                loginSection.classList.add('shake');
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            dashboardSection.classList.add('hidden');
            loginSection.classList.remove('hidden');
            loginForm.reset();
            errorMsg.style.display = 'none';
        });
    }
});

function navegar(modulo) {
    if (modulo === 'Constancias de Permanencia') {
        window.location.href = './constancias-permanencia/';
    } else {
        alert(`Accediendo al módulo: ${modulo}`);
    }
}
