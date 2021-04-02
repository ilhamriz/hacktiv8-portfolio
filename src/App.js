import { Component } from 'react';
import About from './organisms/About';
import Awards from './organisms/Awards';
import Education from './organisms/Education';
import Experience from './organisms/Experience';
import Interest from './organisms/Interest';
import Sidebar from './organisms/Sidebar'
import Skills from './organisms/Skills';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      biodata: {
        name: 'Muhammad Ilham Rizky',
        profession: 'Frontend Developer',
        contact: '+62 822 7464 9029',
        email: 'milhamrizky7@gmail.com',
        summary: 'Information Technology graduate with good experience on Web Development. Having good teamwork ethic on team-based project. I have been involved in some organization such as student department association and department annual event. I like challenge and problem solving in programming.'
      },
      navItems: [
        "About",
        "Experience",
        "Education",
        "Skills",
        "Interests",
        "Awards",
      ],
      expList: [
        {
          date: 'Sep 2020',
          title: 'Workshop Speaker for BEM POLTEKESOS',
          details: ['Explain and practice the basics of web programming.']
        },
        {
          date: 'Mar - Apr 2020',
          title: 'KawalCovid19Sumut Website Project',
          subTitle: 'Volunteer - Frontend',
          details: ['Responsible for creating UI website.','Responsible for develop Frontend code.']
        }
      ],
      eduList: [
        {
          date: 'Mar - May 2021',
          title: 'Hacktiv8 Indonesia',
          subTitle: 'React and React Native Basic',
          details: ['Learn Javascript Modern','Introduction to React','Management State Redux','Create Application']
        },
        {
          date: '2015 - 2021',
          title: 'University of Sumatera Utara',
          subTitle: 'Bachelor of Information Technology (S.Kom)',
          details: ['GPA 3.57','Undergraduate thesis titled : “Information Extraction in Medical Record Using Named Entity Recognition (NER) Method”.']
        }
      ],
      skills: [
        {
          title: 'Tools',
          items: ['Git','Figma','Adobe XD',' Adobe Illustrator']
        },
        {
          title: 'Skills',
          items: ['HTML','CSS','Javascript','Bootstrap','Rest APIs','MongoDB','Express.js','React','Node.js']
        }
      ],
      awards: ['2nd winner in futsal competition','2nd winner in basketball competition','Cloud Computing training participants on the 2019 Digital Talent Scholarship','Completing JavaScript Development Course in Medan Batch 004']
    };
  }

  render() {
    const { biodata, navItems, expList, eduList, skills, awards } = this.state;
    return (
      <>
        <Sidebar navItems={navItems}/>
        <About biodata={biodata}/>
        <Experience expList={expList}/>
        <Education eduList={eduList}/>
        <Skills skills={skills}/>
        <Interest />
        <Awards awards={awards} />
      </>
    );
  }
}