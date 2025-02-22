import { FaStar, FaRegStar } from "react-icons/fa";
import "../style/Ranked.css";

const RankedContent = () => {
    return (
        <div className="ranked-container">
            <div className="card">
                <img
                    src="https://s3-alpha-sig.figma.com/img/44a6/5714/6cbbc9450f732b1d21b0bf53e8d2f23a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JNN1SpwrIt74ziRjpU8hrOY~w-Wvcx7krDusqufmSQCH~K9tMuv8WYYBozYeLXHrnD2QBw3JLYDBOz5RJKWuL4BmBkZml9880rgIg6bPosq36vT5sy03B52LU3I8j6uSBTrIu3~5I8h--z5uNBDu8gx3KGk4Q3l6mqty6LOqPwT1Q0GLmI6fHMpP9LYcf-ko16oZ4BTQ-p2CmNYdDWrFonkMtwkSnCrO7wFKA~7uklm7ViFvM1foYFiSlmzZKYecTrHETKhzMAhGHf9NxvL~xhPZgZGFL4FdFdyUrDz3jOXFqURYJrF1E9LDclTFkSlCoxvlC2apevLKZSuebK7CPg__"
                    alt="Award Badge"
                />

                <div className="rating">
                    <p>4.3</p>
                    <span className="stars">
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaRegStar color="#FFD700" />
                    </span>
                </div>
            </div>

            <div className="text-section">
                <h2>Top-Ranked Collaboration Tool</h2>
                <p>
                    As a developer using this platform, I'm impressed. Building workflows
                    with the ready-made components made the product immediately
                    valuable.
                </p>
            </div>
        </div>
    );
};

export default RankedContent;