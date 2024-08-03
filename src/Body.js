import React from "react";
import './Body.css';

function Body() {
    return (
        <div>
            <h1 className="GMH" id="GM">Why Golden Milk</h1>
            
            <div className="ImageSectone">
                <div className="text-container">
                 <h3>Rich in Spices</h3>
                <h4>Golden Milk Consists of a premium Mix of Natural Products:</h4>
                  <ul>
                     <li>Turmeric Powder</li>
                     <li>Ginger</li>
                     <li>Pepper</li>
                     <li>Cardamom</li>
                     <li>Coriander</li>
                    <li>Star Anise</li>
                 </ul>
                </div>
                 <img src="./Assets/Spices.jpeg" alt="Golden Milk Spices" className="ISone" />
            </div>

            <div className="ImageSecttwo">
                <img src="./Assets/img2.webp" alt="Golden Milk is Coffee Replacement" className="IStwo" />
                <div className="text-container-two">
                    <h3>Perfect Coffee Replacement</h3>
                    <h4>Are you trying to cut-down on Coffee? Golden Milk could be an ideal choice.</h4>
                </div>
            </div>

            <div className="ImageSectthree">
                <div className="text-container-three">
                    <h3>Digestive Health Supporter</h3>
                    <h4>Turmeric has been shown to aid digestion and may help soothe digestive issues such as bloating or gas.</h4>
                </div>
                <img src="./Assets/img 3.jpg" alt="Golden Milk good for Digestive Health" className="ISthree" />
            </div>

        </div>
    );
}

export default Body;