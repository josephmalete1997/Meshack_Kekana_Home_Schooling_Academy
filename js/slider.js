let sliderImage = document.querySelector(".slider");

sliderImage.style.backgroundImage = "url(images/room.jpg)";
sliderImage.style.backgroundRepeat = "no-repeat";


const whyUs = [
    "Individualized Learning",
    "Passionate Tutors",
    "Holistic Development",
    "Flexible Schedules"
]
const Explain = [
    "We recognize that each student is unique, with their own strengths and challenges. Our personalized approach to education ensures that every child receives the attention and support they need to thrive.",
    " Our dedicated team of educators is passionate about teaching and committed to helping students reach their full potential. They create a nurturing atmosphere where students feel encouraged to explore, question, and excel.",
    " Beyond academics, we focus on character development, emotional intelligence, and social skills. We believe that a well-rounded education prepares students for success in all aspects of life.",
    "We understand the importance of flexibility in today's fast-paced world. Our academy offers flexible schedules to accommodate students' diverse needs and extracurricular interests."

]

for (let j = 0; j < 1; j++) {
    const explaining = document.createElement('div');
    explaining.setAttribute('class', 'describe');
    sliderImage.appendChild(explaining);
}
let explainingWhy = document.querySelector(".describe");

explainingWhy.innerHTML = "0";
explainingWhy.style.transition = "1s";
explainingWhy.style.transform = "scale(0)";



for (let i = 0; i < whyUs.length; i++) {
    const reason = document.createElement('div');
    reason.setAttribute('class', 'reasons');
    reason.style.transition = "1s";
    reason.innerHTML = whyUs[i];
    sliderImage.append(reason);
}


let ReasonUs = document.querySelectorAll(".reasons");

ReasonUs[0].style.display = "none";
ReasonUs[1].style.display = "none";
ReasonUs[2].style.display = "none";
ReasonUs[3].style.display = "none";

let count = 0;

function displayReasons() {
    count++;
    if (count < 10) {
        ReasonUs[0].style.display = "none";
        ReasonUs[1].style.display = "none";
        ReasonUs[2].style.display = "none";
        ReasonUs[3].style.display = "none";
        ReasonUs[0].style.transform = "scale(1)";
        ReasonUs[1].style.transform = "scale(1)";
        ReasonUs[2].style.transform = "scale(1)";
        ReasonUs[3].style.transform = "scale(1)";
    }
    if (count === 10) {
        ReasonUs[0].style.display = "block";
    } else if (count === 20) {
        ReasonUs[1].style.display = "block";
    } else if (count === 30) {
        ReasonUs[2].style.display = "block";
    } else if (count === 40) {
        ReasonUs[3].style.display = "block";
    } else if (count === 50) {
        ReasonUs[0].style.transform = "scale(0)";
        ReasonUs[1].style.transform = "scale(0)";
        ReasonUs[2].style.transform = "scale(0)";
        ReasonUs[3].style.transform = "translateX(200px)";
        explainingWhy.innerHTML = Explain[3];
        explainingWhy.style.transform = "scale(1)";
    } else if (count === 145) {
        explainingWhy.style.transform = "scale(0)";
    } else if (count === 150) {
        ReasonUs[0].style.transform = "scale(0)";
        ReasonUs[1].style.transform = "scale(0)";
        ReasonUs[2].style.transform = "scale(1)";
        ReasonUs[3].style.transform = "scale(0)";

        // ReasonUs[3].style.transform = "translateX(200px)";
        explainingWhy.innerHTML = Explain[2];
        explainingWhy.style.transform = "scale(1)";

    } else if (count === 245) {
        explainingWhy.style.transform = "scale(0)";
    } else if (count === 250) {
        ReasonUs[0].style.transform = "scale(0)";
        ReasonUs[1].style.transform = "scale(1)";
        ReasonUs[2].style.transform = "scale(0)";
        ReasonUs[3].style.transform = "scale(0)";

        ReasonUs[1].style.transform = "translateX(-150px)";
        explainingWhy.innerHTML = Explain[1];
        explainingWhy.style.transform = "scale(1)";

    } else if (count === 345) {
        explainingWhy.style.transform = "scale(0)";
    } else if (count === 350) {
        ReasonUs[0].style.transform = "scale(1)";
        ReasonUs[1].style.transform = "scale(0)";
        ReasonUs[2].style.transform = "scale(0)";
        ReasonUs[3].style.transform = "scale(0)";

        ReasonUs[0].style.transform = "translateX(-350px)";
        explainingWhy.innerHTML = Explain[0];
        explainingWhy.style.transform = "scale(1)";

    } else if (count === 450) {
        explainingWhy.style.transform = "scale(0)";
        ReasonUs[0].style.transform = "scale(0)";
        count = 0;
    }
}
setInterval(displayReasons, 150);



//Volume
const volumeUp = document.querySelector(".fa-volume-high")
const volumeDown = document.querySelector(".fa-volume-xmark")

volumeDown.addEventListener("click", () => {
    volumeDown.style.display = "none";
    volumeUp.style.display = "block";
});
volumeUp.addEventListener("click", () => {
    volumeDown.style.display = "block";
    volumeUp.style.display = "none";
});