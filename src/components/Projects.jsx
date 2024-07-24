import React from "react";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import cnn from "./images/cnn.png";
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
    return (
        <div className="projComp">
            <h2 className="ptext">Projects</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <img src={img1} class="card-img-top cImg" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Virtual Bookshelf</h5>
                        <p class="card-text">This project is a MERN full stack based webapp where users can manage their books and virtually bookmark the pages. This provides a perfect way to manage your book collection.</p>
                        <a href='https://github.com/patil-om-3012/Virtual-Bookshelf-Manager' target="_blank" rel="noopener noreferrer"> <GitHubIcon/> </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src={img2} class="card-img-top cImg" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Aifoil self noise prediciton</h5>
                        <p class="card-text">This app predicts air-foil self noise where the predictions are fetched using a Flask backend API based on a trained model using the XGBoost regression algorithm.</p>
                        <a href='https://github.com/patil-om-3012/Airfoil-self-noise' target="_blank" rel="noopener noreferrer"> <GitHubIcon/> </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src={cnn} class="card-img-top cImg" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Brain tumor classification</h5>
                        <p class="card-text">The model is trained using the Convulational Neural Networks on the dataset images and can diagnose brain tumor based on medical images of brain scans. </p>
                        <a href='https://github.com/patil-om-3012/Brain-tumor-classification' target="_blank" rel="noopener noreferrer"> <GitHubIcon/> </a>
                    </div>
                </div>
            </div>
            <div class="col">

            </div>
        </div>
        </div>
    )
}

export default Projects;
