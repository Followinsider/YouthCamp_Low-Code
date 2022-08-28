export default function () {
    const temp = [
        '<!doctype html>',
        '<html>',
        '<head>',
        window.document.head.innerHTML.replace(/<(link|script)[^>]*>/gi, ''),
        '</head>',
        '<body>',
        this.$refs.container.querySelector('.canvas-container').innerHTML,
        `<script>
            let picture_publish = document.querySelectorAll('#canvas_publish');
            console.log(picture_publish)
            function convertCanvasToImage(canvas) {
                const image = new Image();
                image.src = canvas.toDataURL("image/jpg");
                return image;
            }

            for(let i = 0; i < picture_publish.length; i++) {
                const temp = picture_publish[i].parentElement
                const oldImg = picture_publish[i]
                const newImg = convertCanvasToImage(oldImg)
                temp.replaceChild(newImg,oldImg)
            }
        <\/script>`,
        '</body>',
        '</html>',
    ]
    return temp.join('')
}