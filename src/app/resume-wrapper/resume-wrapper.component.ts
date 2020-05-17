import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-wrapper',
  templateUrl: './resume-wrapper.component.html',
  styleUrls: ['./resume-wrapper.component.css']
})
export class ResumeWrapperComponent implements OnInit {
  sampleEducation = '<p><span style=\'color: rgb(0, 0, 0); font-family: "Open Sans", Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati<\/span><\/p>\r\n<ol>\r\n    <li><span style=\'color: rgb(0, 0, 0); font-family: "Open Sans", Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\'>&nbsp;cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.<\/span><\/li>\r\n    <li><span style=\'color: rgb(0, 0, 0); font-family: "Open Sans", Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\'>&nbsp;Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.<\/span><\/li>\r\n<\/ol>';
  sampleExp = [
    '<ul style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;">\r\n    <li style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt; list-style-type:disc;"><span data-preserver-spaces="true" style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;">Created an online development environment with source control. shell access and deployment centre using Theia and GKE.<\/span><\/li>\r\n    <li style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt; list-style-type:disc;"><span data-preserver-spaces="true" style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;">Created a code compilation system which is a docker based sandbox to run the code and return the output to the app. This service is serverless using Google Cloud-Run.<\/span><\/li>\r\n    <li style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt; list-style-type:disc;"><span data-preserver-spaces="true" style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;">Interviewed prospective employees and mentored junior software developers on the team<\/span><\/li>\r\n<\/ul>\r\n<p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br><\/p>',
    '<ul style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;">\r\n    <li style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt; list-style-type:disc;"><span data-preserver-spaces="true" style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;">Created an ATS in Juntrax Platform which is highly appreciated by clients.<\/span><\/li>\r\n    <li style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt; list-style-type:disc;"><span data-preserver-spaces="true" style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;">Created a report generation tool which is highly customizable using MongoDb aggregate and AWS lambda.<\/span><\/li>\r\n    <li style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt; list-style-type:disc;"><span data-preserver-spaces="true" style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;">Created and optimized graphic prototype websites and applications interfaces using HTML and CSS.<\/span><\/li>\r\n<\/ul>\r\n<p style="color: rgb(14, 16, 26); background: transparent; margin-top:0pt; margin-bottom:0pt;"><br><\/p>'
  ];
  ResumeData = {
    firstName: 'imran',
    lastName: 'ahamed',
    jobTitle: 'Fullstack Developer',
    email: 'imrahamed@gmail.com',
    dateOfBirth: '1994-12-18T00:00:00.000Z',
    phone: {
      code: '+91',
      number: '9566724968'
    },
    website: 'imrahamed.in',
    location: 'Bengaluru, India',
    careerObjective: '<ul><li>Full Stack development for Medical Staffing company with tens of thousands of job postings.</li><li>Ruby on Rails setup with Unicorn on Nginx.</li><li>Integrated all jobs postings with Schema tags and Google map listings.</li><li>MYSQL Database Architecture and Administration.</li><li>Custom User authentication.</li><li>Technologies used: Ruby, Ruby on Rails, MYSQL, NGINX, AWS, Git.</li></ul>',
    skills: [
      {
        skillName: 'Angular',
        skillRating: 4.6
      },
      {
        skillName: 'Ionic',
        skillRating: 4.4
      },
      {
        skillName: 'Html',
        skillRating: 4.3
      },
      {
        skillName: 'CSS',
        skillRating: 3.8
      },
      {
        skillName: 'Jquery',
        skillRating: 4.4
      },
      {
        skillName: 'Meteor',
        skillRating: 4.2
      },
      {
        skillName: 'React.js',
        skillRating: 4.3
      },
      {
        skillName: 'Mysql',
        skillRating: 4.2
      },
      {
        skillName: 'MongoDb',
        skillRating: 3.8
      },
      {
        skillName: 'Sequelize',
        skillRating: 4.1
      },
      {
        skillName: 'Javascript',
        skillRating: 4.2
      },
      {
        skillName: 'Typescript',
        skillRating: 4.3
      },
      {
        skillName: 'Express',
        skillRating: 4.3
      },
      {
        skillName: 'Hapi.js',
        skillRating: 4.4
      },
      {
        skillName: 'Node.js',
        skillRating: 4.1
      },
      {
        skillName: 'Docker & K8',
        skillRating: 4.3
      }
    ],
    education: [
      {
        degree: 'Master of Computer Applications',
        college: 'Kumaraguru College of Technology',
        startDate: '2015-05-20T09:57:41.237Z',
        endDate: '2017-05-01T09:57:59.763Z',
        description: '<ol><li class="ql-align-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. </li><li class="ql-align-justify">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </li><li class="ql-align-justify">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</li></ol><p><br></p>'
      },
      {
        degree: 'B.sc Information Technology',
        college: 'SHASC, Keelakarai',
        startDate: '2012-05-17T09:59:40.577Z',
        endDate: '2015-04-16T09:59:49.086Z',
        description: '<ul><li class="ql-align-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"</li><li class="ql-align-justify"> (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</li></ul><p><br></p>'
      }
    ],
    employment: [
      {
        jobTitle: 'Fullstack Developer',
        employer: 'Examly',
        startDate: '2017-01-05T10:00:36.993Z',
        endDate: '2018-05-03T10:00:49.929Z',
        description: '<ul><li><span style="background-color: transparent;">Created an online development environment with source control. shell access and deployment centre using Theia and GKE.</span></li><li><span style="background-color: transparent;">Created a code compilation system which is a docker based sandbox to run the code and return the output to the app. This service is serverless using Google Cloud-Run.</span></li><li><span style="background-color: transparent;">Interviewed prospective employees and mentored junior software developers on the team</span></li></ul><p><br></p>'
      },
      {
        jobTitle: 'Fullstack Developer',
        employer: 'Juntrax Solutions',
        startDate: '2018-05-10T10:02:18.849Z',
        endDate: '2019-05-17T10:02:57.189Z',
        description: '<ul><li><span style="background-color: transparent;">Created an ATS in Juntrax Platform which is highly appreciated by clients.</span></li><li><span style="background-color: transparent;">Created a report generation tool which is highly customizable using MongoDb aggregate and AWS lambda.</span></li><li><span style="background-color: transparent;">Created and optimized graphic prototype websites and applications interfaces using HTML and CSS.</span></li></ul><p><br></p>'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
