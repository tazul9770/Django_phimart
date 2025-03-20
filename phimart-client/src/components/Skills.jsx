import { useState } from "react";

const Skills = () => {

    const [skills, setSkills] = useState(['python', 'javascript'])

    const handleSkills = () => {
        // Add
        // setSkills([...skills, 'React'])

        //Remove
        // setSkills(skills.filter(item => item != 'python'))

        // update
        setSkills(skills.map(item => item == 'javascript' ? item = 'django': item))
    }
    return (
        <div>
            <ul className="m-10 list-disc">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <button className="m-5 px-3 py-2 bg-amber-500 rounded-sm" onClick={() => handleSkills()}>Add skill</button>
        </div>
    );
};

export default Skills;