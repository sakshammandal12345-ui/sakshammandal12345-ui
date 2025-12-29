const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = "#6e8efb";
        skill.style.color = "white";
    });
    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = "white";
        skill.style.color = "#333";
    });
});
