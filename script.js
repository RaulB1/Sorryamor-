document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').innerText = '¡Gracias por perdonarme mi amor! Te amo mucho mi corazon de melons <3.';
    const responseImage = document.createElement('img');
    responseImage.src = 'imagenfinal.jpg'; // Cambia esto a la URL de tu imagen de agradecimiento
    responseImage.alt = 'Imagen de agradecimiento';
    responseImage.id = 'responseImage';
    document.querySelector('.container').appendChild(responseImage);
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
