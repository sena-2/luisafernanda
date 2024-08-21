document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de clic a los botones de like
    document.querySelectorAll('[id^="like-btn-"]').forEach(button => {
        button.addEventListener('click', function() {
            const videoId = this.id.split('-')[2];
            const likeCountElem = document.getElementById(`like-count-${videoId}`);
            const currentCount = parseInt(likeCountElem.innerText.split(': ')[1]);
            likeCountElem.innerText = `Likes: ${currentCount + 1}`;
        });
    });

    // Agregar evento de clic a los botones de dislike
    document.querySelectorAll('[id^="dislike-btn-"]').forEach(button => {
        button.addEventListener('click', function() {
            const videoId = this.id.split('-')[2];
            const dislikeCountElem = document.getElementById(`dislike-count-${videoId}`);
            const currentCount = parseInt(dislikeCountElem.innerText.split(': ')[1]);
            dislikeCountElem.innerText = `Dislikes: ${currentCount + 1}`;
        });
    });
});
