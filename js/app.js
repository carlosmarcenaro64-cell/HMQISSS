document.addEventListener('DOMContentLoaded', () => {
    const USER_VALIDO = "HMQ.ISSS.sv";
    const PASS_VALIDO = "Hmqisss2026";

    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const errorMsg = document.getElementById('error-msg');
    const logoutBtn = document.getElementById('logout-btn');

    // Verificar si ya existe una sesión activa al cargar o refrescar (F5)
    const sesionActiva = localStorage.getItem('hmq_sesion_activa');

    if (sesionActiva === 'true') {
        loginSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('username').value.trim();
            const pass = document.getElementById('password').value.trim();

            if (user === USER_VALIDO && pass === PASS_VALIDO) {
                // Guardar la sesión persistentemente
                localStorage.setItem('hmq_sesion_activa', 'true');

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
            // Eliminar la sesión guardada
            localStorage.removeItem('hmq_sesion_activa');

            dashboardSection.classList.add('hidden');
            loginSection.classList.remove('hidden');
            loginForm.reset();
            errorMsg.style.display = 'none';
        });
    }
});

function navegar(modulo) {
    const enlaces = {
        'Constancias de Permanencia': './constancias-permanencia/',
        'Web Impacto': 'http://salud/WDH/Login.aspx?ReturnUrl=%2fWDH%2fConsulta_DerechoXdoc.aspx',
        'Domiciliar': 'https://adminapp.isss.gob.sv/SMServicios/Reportes_Inscripciones.aspx',
        'Agenda Médica': 'http://salud/agendamedica/historicocitas.aspx',
        'Pantallas': 'https://app.isss.gob.sv/isss/r/app/tokentv/libera-tvs?clear=8&session=10082393612119&cs=3UgFtMKy5osP1mKh9KodsuK-b15nwzZV6RWSufO9GsKV2RMzu2Baixe5P-gFepeOVbhQzGxrAlQjRX999hzuxjg'
    };

    if (enlaces[modulo]) {
        // Los enlaces externos se abren en una nueva pestaña para mantener el portal abierto
        if (enlaces[modulo].startsWith('http')) {
            window.open(enlaces[modulo], '_blank');
        } else {
            window.location.href = enlaces[modulo];
        }
    } else {
        alert(`Módulo ${modulo} en proceso de configuración.`);
    }
}
