document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío por defecto del formulario

        // Obtener los valores de los campos
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validar que no haya campos vacíos
        if (!name || !email || !message) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }

        // Validar formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        // Simulación de envío exitoso
        alert(`Gracias, ${name}. Tu mensaje ha sido enviado exitosamente.`);
        form.reset(); // Limpia el formulario
    });
});
