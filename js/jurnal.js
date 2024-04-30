document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
    if (blogForm) {
        blogForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const entry = { username, title, content }; 
            const posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push(entry);
            localStorage.setItem('posts', JSON.stringify(posts));
            window.location.href = 'post.html';
        });
    }
    const postsList = document.getElementById('postsList');
    if (postsList) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach(function(entry) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h3>${entry.title}</h3>
                <p>By: ${entry.username}</p>
                <p>${entry.content}</p>
            `;
            postsList.appendChild(postDiv);
        });
    }
});

const modeButton = document.getElementById('mode');
const body = document.body;
modeButton.addEventListener('click', toggleDarkMode);
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const icon = modeButton.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
}