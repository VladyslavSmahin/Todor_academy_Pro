const apiKey = "yJ1PJOZ4Ki8IUDRoUECcGbsIvj5ABROSuuNS2RSn";
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('title').textContent = data.title;
        document.getElementById('date').textContent = data.date;
        document.getElementById('explanation').textContent = data.explanation;

        // Обработка медиа (изображение или видео)
        const mediaContainer = document.getElementById('media-container');

        if (data.media_type === "image") {
            const img = document.createElement('img');
            img.src = data.url;
            img.alt = data.title;
            img.style.maxWidth = "100%";
            mediaContainer.appendChild(img);
        } else if (data.media_type === "video") {
            const iframe = document.createElement('iframe');
            iframe.src = data.url;
            iframe.width = "100%";
            iframe.height = "500px";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            mediaContainer.appendChild(iframe);
        }
    })
    .catch(error => console.error('Error fetching the NASA data:', error));