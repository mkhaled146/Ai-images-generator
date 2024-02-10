const api = "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";
const inp = document.getElementById('inp')
const images = document.querySelector('.images')

const getImage = async () => {
  const methods = {
    method: "POST",
    Headers: {
      "content-Type": "appliction/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      prompt: inp.ariaValue,
      n: 3,
      size: "256x256",
    }),
  };
  const res = await fetch("https://api.openai.com/v1/images/edits", methods);
  const data= await res.json()
  const listImages =data.data;
  images.innerHTML=''
  listImages.map(photo => {
    const container =document.createElementN("div")
    images.append(container)
    const img = document.createElementN("img")
    container.append(img)
    img.src=photo.url

  })
}