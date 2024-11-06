
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs a');
    const reviews = document.querySelectorAll('.review');


    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));

            tab.classList.add('active');

            const category = tab.textContent.trim();
            reviews.forEach(review => {
                if (category === 'Latest Reviews' || category === '+ New') {
                    review.style.display = 'flex';
                } else {
                    const genre = review.querySelector('h3').textContent.trim();
                    if (genre === category) {
                        review.style.display = 'flex'; // Show matching reviews
                    } else {
                        review.style.display = 'none'; // Hide others
                    }
                }
            });
        });
    });
});

// Like button
const likeButtons = document.querySelectorAll('.review-actions button:first-child');
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '❤️') {
            button.textContent = '💔';
        } else {
            button.textContent = '❤️';
        }
    });
});


// Follow/Unfollow users
const followButtons = document.querySelectorAll('.who-to-follow button');
followButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Follow') {
            button.textContent = 'Unfollow';
        } else {
            button.textContent = 'Follow';
        }
    });
});
