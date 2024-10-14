// comments.js
function displayComments() {
    const commentsList = document.getElementById('commentsList');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    commentsList.innerHTML = '';
    comments.forEach(({ nickname, comment }) => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>${nickname}:</strong> ${comment}`;
        commentsList.appendChild(commentElement);
    });
}

function submitComment() {
    const commentInput = document.getElementById('comment');
    const nicknameInput = document.getElementById('nickname');
    const message = document.getElementById('message');
    const comment = commentInput.value.trim();
    let nickname = nicknameInput.value;

    if (comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ nickname, comment });
        localStorage.setItem('comments', JSON.stringify(comments));
        commentInput.value = '';
        message.innerText = 'Comentário enviado com sucesso!';
        message.style.display = 'block';
        displayComments();
    } else {
        alert('Por favor, digite um comentário.');
    }
}

// Evento de clique para enviar comentários
document.getElementById('submitComment').addEventListener('click', submitComment);

// Carrega comentários ao iniciar a página
document.addEventListener('DOMContentLoaded', displayComments);
