import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {

  constructor(private _http: HttpClient) { }

  apiUrl = "https://arjunbala.com/DFaculty/api.php/records/faculty";

  getAllFacultyes() {
    return this._http.get(this.apiUrl)
  }

  getFacultyById(id: any) {
    return this._http.get(this.apiUrl + "/" + id);
  }

  deleteFaculty(id: any) {
    return this._http.delete(this.apiUrl + "/" + id);
  }

  addFaculty(form: any) {
    return this._http.post(this.apiUrl, form)
  }

  update(form: any, id: number) {
    return this._http.put(this.apiUrl + "/" + id, form)
  }

  object1: {} = {
    "FacultyName": "Prof. xyz",
    "FacultyDesignation": "Assistant Professor",
    "FacultyHighestEducation": "M.E. (CE)",
    "FacultyExperienceInYears": 12,
    "FacultyWorkingSince": "Jul-199",
    "FacultyMobileNumber": "9879879861",
    "FacultyEmailAddress": "xyz@?darshan.ac.in",
    "FacultySeating": "C-202",
    "FacultyProfileDescription": "Prof. xyz obtained B.E. (Computer) in 2004 from Rajkot and M.E. (Computer) in 2014 from Junagadh. He has been associated with Darshan Institute of Engineering and Technology-Rajkot as an Assistant Professor since July-2011. His areas of interest are Database System, Data Mining, Operating System and Apps as well as Website testing.",
    "FacultyAreaSpecialization": "Database System, Data Mining, Operating System and Apps as well as Website testing",
    "FacultySubjectsTaught": "C, C++, Database Management System, Relational Database Management System, Operating System, Operating System and Design, Advance Database, Data Mining",
    "FacultyImage": "https://source.unsplash.com/300x300/?colorfull",
    "FacultyDepartmentID": 1,
    "FacultySequence": 6
  }
  object2: {} = {
    "FacultyName": "Prof. Firoz Sherasiya",
    "FacultyDesignation": "Assistant Professor",
    "FacultyHighestEducation": "M.E. (CE)",
    "FacultyExperienceInYears": 15,
    "FacultyWorkingSince": "Jul-2011",
    "FacultyMobileNumber": "9879879861",
    "FacultyEmailAddress": "firoz.sherasiya@?darshan.ac.in",
    "FacultySeating": "C-202",
    "FacultyProfileDescription": "Prof. Firoz Sherasiya obtained B.E. (Computer) in 2004 from AITS-Rajkot and M.E. (Computer) in 2014 from Noble-Junagadh. He has been associated with Darshan Institute of Engineering and Technology-Rajkot as an Assistant Professor since July-2011. His areas of interest are Database System, Data Mining, Operating System and Apps as well as Website testing.",
    "FacultyAreaSpecialization": "Database System, Data Mining, Operating System and Apps as well as Website testing",
    "FacultySubjectsTaught": "C, C++, Database Management System, Relational Database Management System, Operating System, Operating System and Design, Advance Database, Data Mining",
    "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/06CEFAS_19042019_063811AM.jpg",
    "FacultyDepartmentID": 1,
    "FacultySequence": 6
  }
  object3: {} = {
    "FacultyName": "Prof. Rupesh Vaishnav",
    "FacultyDesignation": "Assistant Professor",
    "FacultyHighestEducation": "M.E. (CE)",
    "FacultyExperienceInYears": 13,
    "FacultyWorkingSince": "Jul-2013",
    "FacultyMobileNumber": "9428037452",
    "FacultyEmailAddress": "rupesh.vaishnav@?darshan.ac.in",
    "FacultySeating": "C-203",
    "FacultyProfileDescription": "Prof. Rupesh Vaishnav had completed his B.E.(Computer Engineering) from Atmiya Institute, Saurashtra University in 2008, M.E.(Computer Engineering) from Marwadi Institute, Gujarat Technological University in 2013. Before joining Darshan Institute he had worked as an Assistant Professor in RK College, Rajkot, and Om Shanti engineering college, Rajkot. His area of research is Cloud Computing Security and he has taught various subjects like Algorithms, Data Structures, C++, and Information Security. He is a member of iOS app development team at ASWDC in the department. He is also working as a Training and Placement Officer of the computer engineering department.",
    "FacultyAreaSpecialization": "iOS Programming, Cloud Computing Security",
    "FacultySubjectsTaught": "C++\r\n• Algorithms\r\n• Data Structures\r\n• Information Security\r\n• Computer Network\r\n• Programming & Problem Solving\r\n, • Information Theory and Coding\r\n• Computer Network Security\r\n• Strategic Management",
    "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/07CERGV_19042019_063838AM.jpg",
    "FacultyDepartmentID": 1,
    "FacultySequence": 7
  }
  object4: {} = {
    "FacultyName": "Prof. Swati Sharma",
    "FacultyDesignation": "Assistant Professor",
    "FacultyHighestEducation": "M.Tech. (CSE)",
    "FacultyExperienceInYears": 13,
    "FacultyWorkingSince": "Jul-2013",
    "FacultyMobileNumber": "9727747317",
    "FacultyEmailAddress": "swati.sharma@?darshan.ac.in",
    "FacultySeating": "C-310",
    "FacultyProfileDescription": "Prof. Swati Sharma is working as Assistant Professor in the Computer Engineering department since May 2013. She had completed B.E(Computer Engineering) in 2008 from AITS-Rajkot, M.Tech(Computer Science) in 2013 from Nirma University-Ahmedabad with a specialization in the area of Network Security. She is currently involved in teaching Advanced Java and Microprocessor. Her area of Interest is Java programming, Android programming, Computer Architecture, Microprocessor, and UML Modeling. She is also a member of the Android Development Team at ASWDC.",
    "FacultyAreaSpecialization": "• Ad-hoc Network\r\n• Intrusion Detection\r\n• Java",
    "FacultySubjectsTaught": "• Java\r\n• Advanced Java(J2EE)\r\n• Object Oriended Analysis Design with UML\r\n• Microprocessor and Interfacing\r\n• Computer Organization and Architecture\r\n• Mobile Computing and Wireless Communication",
    "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/08CESRS_19042019_063912AM.jpg",
    "FacultyDepartmentID": 1,
    "FacultySequence": 8
  }
  object5: {} = {
    "FacultyName": "Dr. Gopi Sanghani",
    "FacultyDesignation": "Head, Professor",
    "FacultyHighestEducation": "Ph.D. , M.E. (CE)",
    "FacultyExperienceInYears": 20,
    "FacultyWorkingSince": "Jul-2012",
    "FacultyMobileNumber": "1234567890",
    "FacultyEmailAddress": "gopi.sanghani@?darshan.ac.in",
    "FacultySeating": "C-201",
    "FacultyProfileDescription": "Dr. G. B. Sanghani has completed BE Computer Engineering from DDIT Nadiad, ME Computer Engineering from BVM Vallabh Vidyanagar and Ph.D. from Nirma University in the field of Text Mining using Machine Learning Techniques. She has coordinated and implemented various teaching-learning strategies at the department level. She has guided various research projects at both Under Graduate and Post Graduate Level. She has published several International Conference and Journal Papers. She has successfully coordinated a number of workshops and training programs for students and faculties. Her areas of interest are Algorithms, Machine Learning, Artificial Intelligence, and Text Mining.",
    "FacultyAreaSpecialization": "Artificial Intelligence",
    "FacultySubjectsTaught": "C, Operating Systems, Design & Analysis of Algorithms, System Programming, Distributed Operating System, Artificial Intelligence, Machine Learning",
    "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/0CEGBS_19042019_063636AM_21052019_045025AM.jpg",
    "FacultyDepartmentID": 1,
    "FacultySequence": 1
  }
  object6: {} = {
    "FacultyName": "Dr. Nilesh Gambhava",
    "FacultyDesignation": "Professor",
    "FacultyHighestEducation": "Ph.D. , M.E. (CE)",
    "FacultyExperienceInYears": 18,
    "FacultyWorkingSince": "Jul-2009",
    "FacultyMobileNumber": "9727747310",
    "FacultyEmailAddress": "vp@darshan.ac.in",
    "FacultySeating": "A-108",
    "FacultyProfileDescription": "Dr. Nilesh Gambhava is working as a professor at Computer Engineering Department. He has pursued B.E. from GCET, Vallabh Vidyanagar in 2001 and M.E. from BVM, Vallabh Vidyanagar in 2004. He was awarded Gold Medal in M.E. at Sardar Patel University. He has completed Ph.D. from Nirma University in the area of \"Web Mining in Social Networking\". He is in charge of the placement cell at the institute. He is actively guiding various web and application development projects at ASWDC in the Department. Dr. Gambhava is coordinating various engineering admission activities and awareness seminars. He has designed and developed more than 25 software and ERP systems for many reputed companies.",
    "FacultyAreaSpecialization": "Genetic Algorithm, Web Mining, Social Networking",
    "FacultySubjectsTaught": "C, C++, Discrete Mathematics, DBMS, Algorithm, Unix, Software Engineering, Artificial Intelligence, Computer Graphics, Software Engineering",
    "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg",
    "FacultyDepartmentID": 1,
    "FacultySequence": 2
  }
  object7: {} = {
    "FacultyName": "Dr. Pradyumansinh Jadeja",
    "FacultyDesignation": "Associate Professor",
    "FacultyHighestEducation": "Ph.D., M.E. (CE)",
    "FacultyExperienceInYears": 15,
    "FacultyWorkingSince": "Jul-2009",
    "FacultyMobileNumber": "9879461848",
    "FacultyEmailAddress": " pradyuman.jadeja@darshan.ac.in",
    "FacultySeating": "C-303",
    "FacultyProfileDescription": "Dr. Pradyumansinh Jadeja has completed BE Information Technology from VVP Engineering College, ME Computer Engineering from BVM Vallabh Vidyanagar, and Ph.D. from Nirma University in the field of Web Mining using Machine Learning Techniques. Dr. Jadeja has a professional experience of over 15 years (Academia and Industry).",
    "FacultyAreaSpecialization": "Data Structure, Web Mining, Artificial Intelligent, Operating System, .Net, Database Management System",
    "FacultySubjectsTaught": "Operating System, Data & File Structure, Database Management System, .Net, Web Application Development",
    "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/02CEPUJ_19042019_063653AM.jpg",
    "FacultyDepartmentID": 1,
    "FacultySequence": 3
  }
  object8: {} = {
    "FacultyName": "Prof. Dixita Kagathara",
    "FacultyDesignation": "Assistant Professor",
    "FacultyHighestEducation": "M.Tech. (Web Technology)",
    "FacultyExperienceInYears": 11,
    "FacultyWorkingSince": "Jul-2009",
    "FacultyMobileNumber": "9727747317",
    "FacultyEmailAddress": "dixita.kagathara@darshan.ac.in",
    "FacultySeating": "C-310",
    "FacultyProfileDescription": "Prof. Dixita Kagathara is working as an Assistant Professor in the Computer Engineering Department since July 2009. She has completed her B.E (CE) from Atmiya Institute of Engineering and Technology, Rajkot in 2009 and M.Tech (Web Technology) from Gujarat University in 2012. Her areas of interest are Theory of Computation, Compiler Design, and Android App Development. She is a member of the ASWDC Android team, involved in the designing and development of Android Applications.",
    "FacultyAreaSpecialization": "Web Technology",
    "FacultySubjectsTaught": "Computer Programming & Utilization, Theory Of Computation, Compiler Design, System Programming, Programming for Problem Solving, Design of Language Processor",
    "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/05CEDBK_19042019_063749AM.jpg",
    "FacultyDepartmentID": 1,
    "FacultySequence": 5
  }
  object9: {} = {
    "FacultyName": "Prof. Maulik Trivedi",
    "FacultyDesignation": "Assistant Professor",
    "FacultyHighestEducation": "M.Tech. (CSE)",
    "FacultyExperienceInYears": 13,
    "FacultyWorkingSince": "Jul-2009",
    "FacultyMobileNumber": "9998265805",
    "FacultyEmailAddress": "maulik.trivedi@darshan.ac.in",
    "FacultySeating": "C-202",
    "FacultyProfileDescription": "Prof. Maulik D. Trivedi qualified with a B.E. degree in Computer Engineering from Atmiya Institute of Tech. & Science, Rajkot, in 2008 and he has done his M.Tech. in Computer Science & Engineering Engineering from Nirma University, Ahmedabad in 2012. He is associated with Darshan Institute of Engineering and Technology, Rajkot since July-2009. His areas of interest are Wireless Network, Computer Networks, Cyber Security and Google Services. He has working as department placement coordinator from 2013 to 2018. Currently he is coordinating alumni relations matter in CE department. He is a life member of the Indian Society for Technical Education (ISTE).",
    "FacultyAreaSpecialization": "Cyber Security,Wireless Network,Wireless Sensor,Network,Network Security",
    "FacultySubjectsTaught": "UG:Computer Networks, Cyber Security, Mobile Computing and Wireless Communication, Advance Computer Networks, Computer Programming & Utilization, Programming for Problem Solving,\r\nPG: Internet Technology, Wireless Communication",
    "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/CEMDT01_25042019_022618PM.jpg",
    "FacultyDepartmentID": 1,
    "FacultySequence": 4
  }

}
