document.addEventListener('DOMContentLoaded', () => {
    const inputFecha = document.getElementById('const-fecha');
    if (inputFecha) inputFecha.valueAsDate = new Date();
});

let listaConstancias = [];

document.getElementById('const-dui')?.addEventListener('input', (e) => {
    const dui = e.target.value.trim();
    const inputUltima = document.getElementById('const-ultima');

    const previo = listaConstancias.find(item => item.dui === dui);
    if (previo) {
        inputUltima.value = `${previo.fecha} (Anterior)`;
    } else {
        inputUltima.value = "NUNCA";
    }
});

document.getElementById('constancia-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevaConstancia = {
        fecha: document.getElementById('const-fecha').value,
        nombre: document.getElementById('const-nombre').value,
        dui: document.getElementById('const-dui').value,
        empresa: document.getElementById('const-empresa').value,
        entrada: document.getElementById('const-entrada').value,
        salida: document.getElementById('const-salida').value,
        motivo: document.getElementById('const-motivo').value,
        ejecutivo: document.getElementById('const-ejecutivo').value,
        observacion: document.getElementById('const-obs').value,
        ultima: document.getElementById('const-ultima').value
    };

    listaConstancias.unshift(nuevaConstancia);
    actualizarTablaConstancias();
    alert("Constancia registrada exitosamente.");
    e.target.reset();
    document.getElementById('const-fecha').valueAsDate = new Date();
});

function actualizarTablaConstancias() {
    const tbody = document.getElementById('tabla-constancias-body');
    if (!tbody) return;

    tbody.innerHTML = listaConstancias.map(c => `
        <tr>
            <td>${c.fecha}</td>
            <td>${c.nombre}</td>
            <td>${c.dui}</td>
            <td>${c.empresa}</td>
            <td>${c.entrada} - ${c.salida}</td>
            <td>${c.motivo}</td>
            <td>${c.ejecutivo}</td>
            <td>${c.ultima}</td>
        </tr>
    `).join('');
}

function enviarCorreoVirtual() {
    const correo = document.getElementById('const-correo').value;
    const nombre = document.getElementById('const-nombre').value;

    if (!correo) {
        alert("Por favor ingrese un correo electrónico válido.");
        return;
    }

    alert(`Enviando Constancia de Permanencia digital a: ${correo} para el usuario: ${nombre}...`);
}
