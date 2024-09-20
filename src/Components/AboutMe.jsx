import React from 'react'
import Me from "../assets/color_stripe_crop.jpg"

function Intro() {
    return (
        <div className="flex justify-center my-40" id="about">
            <div class="grid grid-cols-2 max-w-[1000px] w-[100%]">
                <div class="">
                    <div class="">
                        <img class="rounded-md" src={Me}></img>
                    </div>
                </div>
                <div class="flex flex-col justify-center">
                    <h1 class="text-[clamp(30px,10vw,40px)] font-[var(--max-weight)] text-[var(--dark-txt)] mb-4">
                        About me
                    </h1>
                    <p class="text-[var(--light-txt)] mb-8 text-[clamp(16px,1.2vw,20px)]">
                        Hi, I'm Shivdutt Bhadakwad, a Fullstack Developer with a strong passion for Machine Learning.
                        <br></br>
                        <br></br>
                        Currently, I'm in my second year of studying Computer Engineering in Pune, India, where I'm actively building my skills and knowledge in both web development and cutting-edge technologies like AI.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro