
const Code = (textType) => {

const main = `
██╗   ██╗███████╗███████╗██╗   ██╗ ██████╗ ██╗      ██████╗ ██████╗ 
██║   ██║██╔════╝██╔════╝██║   ██║██╔═══██╗██║     ██╔═══██╗██╔══██╗
██║   ██║███████╗█████╗  ██║   ██║██║   ██║██║     ██║   ██║██║  ██║
╚██╗ ██╔╝╚════██║██╔══╝  ╚██╗ ██╔╝██║   ██║██║     ██║   ██║██║  ██║
 ╚████╔╝ ███████║███████╗ ╚████╔╝ ╚██████╔╝███████╗╚██████╔╝██████╔╝
  ╚═══╝  ╚══════╝╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ 
                                                                    
    FullStack Developer JavaScript


    I am a Junior Frontend Developer seeking employment in the Israeli high-tech industry.
Skilled in Linux administration and device development with 2 years experience. Currently
enrolled in MASA Web program. Passionate about creating cutting-edge web solutions
that drive business success and enhance quality of life. Willing to learn and contribute
to the growth of a high-tech company in Israel.

╔══════════════╗        
║  My Skills:  ║
╠══════════════╣
║ • JavaScript ║
║ • React      ║
║ • Bootstrap  ║
║ • NodeJS     ║
║ • SCSS       ║
║ • AJAX       ║
║ • WEB API    ║
║ • MySQL      ║
║ • Git        ║
║ • Bash       ║
║ • Linux      ║
╚══════════════╝

`
const about =`
██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗███████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝██╔════╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   ███████╗
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   ╚════██║
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   ███████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚══════╝
                                                                     


LinkedIn
https://www.linkedin.com/in/vsevolod-usyskin-354872253/


Github:
https://github.com/sevauni


This Website:
https://vsevolod.tech
`


if(textType === 'about'){
    return about;
}

if(textType === 'main'){
    return main;
}
    
};

export default Code;